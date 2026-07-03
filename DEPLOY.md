# Trade Pilot · GitHub Pages 部署流程手册

> 仓库：`danniallcc-creator/trade-pilot`（default branch: `main`，根目录发布）
> 部署方式：GitHub Pages（`build_type: legacy`，主干推送即触发 `pages build and deployment` workflow）
> 站点：https://danniallcc-creator.github.io/trade-pilot/
> 本手册最后一次更新：2026-07-03 17:45 CST

---

## 1. 日常发布 SOP

标准三步曲（在本地仓库 `outputs/trade-pilot-site/` 内执行）：

```bash
# 1) 提交 & 推送
git add <files...>
git commit -m "feat(xxx): 变更说明"
git push origin main

# 2) 强制触发 legacy Pages 构建（防止 pages workflow 因排队被跳过）
curl -s -X POST \
  -H "Authorization: token $GH_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/danniallcc-creator/trade-pilot/pages/builds

# 3) 等 60~90 秒后校验部署
curl -sI https://danniallcc-creator.github.io/trade-pilot/knowledge-base.html \
  | grep -iE 'HTTP|last-modified'
```

正常 build 耗时 20~25 秒，Actions 侧显示 `pages build and deployment / build+deploy = success`。

---

## 2. 已知 transient 故障与恢复策略

### 2.1 症状矩阵

| 表现 | 原因 | 处理策略 |
|-----|------|--------|
| `POST /pages/builds` 立即返回 `queued`，但下一次查 `latest` 是 `errored / duration:0 / "Page build failed."` | GH 侧 legacy 队列 transient 抖动 | 再次 `POST /pages/builds` 重试 1~2 次即可 built |
| Actions 里 build 步骤 success，但 deploy 步骤报 `##[error]Deployment failed, try again later.` | Pages Deployment API transient | 用 `POST /pages/builds` 再触发一次，或 `rerun-failed-jobs` |
| 同一 commit 连续 3~5 次 rebuild 都 errored（duration=0，无日志） | 该 commit 的 artifact 或 deployment_id 卡在冷却队列 | **不要再重试同 commit**，改用 `git commit --allow-empty -m "chore: nudge pages build"` 换 SHA 后再触发 |
| workflow_run 长时间 `queued` >20min | GH Actions runner 拥塞 | 优先做空 commit + `POST /pages/builds` 走 legacy 通道（比 workflow 更快复活） |

### 2.2 快速诊断命令

```bash
# a. 最近 5 次 legacy pages build
curl -s -H "Authorization: token $GH_TOKEN" \
  "https://api.github.com/repos/danniallcc-creator/trade-pilot/pages/builds?per_page=5" \
  | python3 -c "import json,sys
for b in json.load(sys.stdin): print(b['status'],b['commit'][:8],b['duration'],b.get('error',{}).get('message'))"

# b. 最近 workflow_run（含 build/deploy 步骤）
curl -s -H "Authorization: token $GH_TOKEN" \
  "https://api.github.com/repos/danniallcc-creator/trade-pilot/actions/runs?per_page=3" \
  | python3 -c "import json,sys
for r in json.load(sys.stdin)['workflow_runs']:
    print(r['name'],r['status'],r['conclusion'],r['head_sha'][:8],r['run_attempt'],r['created_at'])"

# c. deploy 步骤原始日志（定位 GH 侧真正错误）
curl -sL -H "Authorization: token $GH_TOKEN" \
  https://api.github.com/repos/danniallcc-creator/trade-pilot/actions/jobs/<JOB_ID>/logs | tail -60

# d. Pages 站点整体状态
curl -s -H "Authorization: token $GH_TOKEN" \
  https://api.github.com/repos/danniallcc-creator/trade-pilot/pages

# e. 全站 GitHub 状态（排除 GH 全站事故）
curl -s https://www.githubstatus.com/api/v2/summary.json \
  | python3 -c "import json,sys;d=json.load(sys.stdin);print(d['status']['description'])"
```

### 2.3 决策树

```
推送后 60s 未见新 last-modified？
 └─ 查 legacy /pages/builds/latest
     ├─ status=queued/building  → 再等 30s
     ├─ status=built            → 200 OK，只是 CDN 未刷新（Cmd+Shift+R 破缓存）
     └─ status=errored duration=0
         ├─ 首次 errored → 再 POST 一次 /pages/builds
         ├─ 2~3 次仍 errored → 检查 GitHub Status（allSystemsOperational？）
         └─ ≥3 次 errored     → git commit --allow-empty 换 SHA + POST /pages/builds
```

---

## 3. 本次（2026-07-03）沙盘 compact 模式部署实录

变更内容：`knowledge-base.html §6.3 全流程可视沙盘` 加入 `.tp-flow.compact` 紧凑横条模式（收起 → 17 节点压成一条胶囊；再点任一胶囊 → 解除紧凑并只展开被点的节点）。

时间线（Asia/Shanghai）：

| 时间 | 事件 | Commit | 结果 |
|------|------|--------|------|
| 16:00 | 首次推送 compact 变更 | `e1b8b90` | pages build errored |
| 16:03~16:13 | 连续 5 次 `POST /pages/builds` 重试同 commit | `e1b8b90` | 全部 duration=0 errored |
| 16:14 | 排查：GitHub Status 全绿；deploy 日志显示 `Deployment failed, try again later.` | — | 判定为 GH 侧 transient，非代码问题 |
| 16:15 | 换策略：`git commit --allow-empty -m "chore(pages): force rebuild after transient errored builds"` | `851bc1b` | workflow 进入 building |
| 16:20~16:55 | build 步骤 40+ 分钟卡住 → 最终 build success / deploy failure | `851bc1b` | 无进展 |
| 16:57 | 触发 `rerun-failed-jobs` API 重跑 | `851bc1b` | 进入 queued，30 分钟未启动 |
| 17:26 | 判定 Actions 拥塞，再次空 commit 换 SHA 走 legacy 通道 | `f4e448b` | — |
| 17:27 | `POST /pages/builds` 触发 | `f4e448b` | queued → building |
| 17:28 | build + deploy 完成，共 28.8s | `f4e448b` | **completed success** |
| 17:29 | `last-modified: 09:28 GMT`，17 个 `compact` 关键字上线 | — | 校验通过 |

关键教训：**同一个 commit 连续失败超过 3 次后，继续对同 SHA 重试是徒劳的**——GH 队列会把这个 SHA 冷却，得换 SHA。空 commit（`git commit --allow-empty`）是最省事的换 SHA 手段。

---

## 4. 相关文件与锚点

- 主页面：`index.html`（React JSX / babel-standalone 渲染）
- 分层页：`level1.html` / `level2.html` / `level3.html`（React JSX，共享 `_shared.js` + `_samples.js`）
- 知识库：`knowledge-base.html`（原生 HTML + Tailwind CDN）
  - 顶栏 HOT 徽标：搜 `hot-badge`
  - §6.3 沙盘：搜 `id="s6-3"` / `tp-flow` / `NODES` / `compact`
- Token（保密，勿硬编码进仓库；本地用 `export GH_TOKEN=<你的 token>` 注入 shell 环境）：
  - 权限最小集：`repo` + `workflow`
  - 使用示例：`Authorization: token $GH_TOKEN` header
  - 若不小心把 token 写进任何仓库文件被 GitHub push protection 拦截，先 revoke 旧 token，重新生成后再推。

---

## 5. 常用一键命令合集

```bash
# 快速推送并强制刷新
cd /Users/zaiyu/.qoderwork/workspace/mr38grj8m4kdaq7p/outputs/trade-pilot-site
git add -u && git commit -m "…" && git push origin main
curl -s -X POST -H "Authorization: token $GH_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/danniallcc-creator/trade-pilot/pages/builds

# 检查是否卡死（同 SHA 连续 errored ≥3 次就跑这个）
git commit --allow-empty -m "chore: nudge pages build" && git push origin main
curl -s -X POST -H "Authorization: token $GH_TOKEN" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/danniallcc-creator/trade-pilot/pages/builds

# 5 个页面一次性做 hot-badge/compact 探针
for p in "" "knowledge-base.html" "level1.html" "level2.html" "level3.html"; do
  echo "[${p:-index}]"
  curl -sI "https://danniallcc-creator.github.io/trade-pilot/$p" | grep -iE 'HTTP|last-modified'
done
```

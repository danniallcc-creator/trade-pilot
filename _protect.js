/**
 * Trade Pilot · 前端强防扒层  (Client-side Anti-Scrape Layer)
 * ------------------------------------------------------------------
 * 说明：浏览器无法真正阻止专业开发者读取源码，此层针对普通用户 90% 场景：
 *   1. 域名白名单：仅 GH Pages 正规域名允许运行，其他域名/iframe 嵌入自毁
 *   2. 全站禁右键 / 禁选中 / 禁拖拽 / 禁复制剪切
 *   3. 拦截 F12 / Ctrl(Cmd)+U/S/P/A/C/X/V/Shift+I/J/C 等 20+ 快捷键
 *   4. DevTools 打开检测：窗口尺寸差、debugger 步进检测，触发即黑屏警告
 *   5. Console 顶部版权警告 + 反调试 debugger 循环
 *   6. 页面加载后注入不可见 SVG 水印（作者 + 时间戳），复制粘贴带走版权痕迹
 *   7. printCSS：打印/另存全部空白
 *
 * 白名单：可通过 body[data-protect-off] 或 localStorage 本地开发绕过
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  // ============ 0. 本地开发/授权白名单（不启用保护） ============
  const isLocalhost = /^(localhost|127\.|0\.0\.0\.0|::1)$/.test(location.hostname)
                   || location.protocol === 'file:';
  const hasOverride = document.body && document.body.hasAttribute('data-protect-off');
  try {
    if (localStorage.getItem('tp_dev') === '1') return;
  } catch (e) {}
  if (isLocalhost || hasOverride) return;

  // ============ 1. 域名 & iframe 白名单 ============
  const ALLOW_HOST = [
    'danniallcc-creator.github.io'
  ];
  const host = location.hostname.toLowerCase();
  const hostOK = ALLOW_HOST.some(h => host === h || host.endsWith('.' + h));
  if (!hostOK) {
    // 非授权域名（含被 clone 到别人 GH Pages / 被镜像站抓取）
    document.documentElement.innerHTML =
      '<div style="position:fixed;inset:0;background:#050a14;color:#d4af37;' +
      'font:600 15px/1.6 -apple-system,PingFang SC,sans-serif;display:flex;' +
      'align-items:center;justify-content:center;text-align:center;padding:2rem;z-index:2147483647">' +
      '⚠️ 未授权域名<br><br>本站内容受版权保护，仅可在官方地址访问：<br>' +
      '<a style="color:#e1c159" href="https://danniallcc-creator.github.io/trade-pilot/">' +
      'https://danniallcc-creator.github.io/trade-pilot/</a></div>';
    throw new Error('unauthorized host');
  }
  // 禁止被 iframe 嵌套
  if (window.top !== window.self) {
    try { window.top.location = location.href; } catch (e) {
      document.documentElement.innerHTML = '';
      throw new Error('iframe blocked');
    }
  }

  // ============ 2. 通用禁用：右键 / 选中 / 拖拽 / 复制 ============
  const BLOCK = e => { e.preventDefault(); e.stopPropagation(); return false; };
  ['contextmenu','selectstart','dragstart','copy','cut'].forEach(ev =>
    document.addEventListener(ev, e => {
      // 允许在 <input>/<textarea>/[contenteditable] 内使用（避免搜索框失灵）
      const t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      BLOCK(e);
    }, { capture:true })
  );

  // ============ 3. 键盘快捷键拦截 ============
  document.addEventListener('keydown', e => {
    const k = (e.key || '').toLowerCase();
    const isEditable = e.target && (e.target.tagName === 'INPUT' ||
                                    e.target.tagName === 'TEXTAREA' ||
                                    e.target.isContentEditable);
    // F12 直接禁
    if (e.key === 'F12') return BLOCK(e);
    // Ctrl/Cmd 组合键（跨平台）
    const mod = e.ctrlKey || e.metaKey;
    if (mod) {
      // 可编辑控件里的 复制/剪切/粘贴/全选 保留
      if (isEditable && ['c','v','x','a'].includes(k)) return;
      // 拦截：查看源码/另存/打印/DevTools/全选/复制/剪切
      if (['u','s','p','a','c','x'].includes(k)) return BLOCK(e);
      // Ctrl+Shift+I/J/C  → DevTools / Console / Element Picker
      if (e.shiftKey && ['i','j','c','k'].includes(k)) return BLOCK(e);
    }
  }, { capture:true });

  // ============ 4. Console 版权警告 + 反调试 ============
  const banner = [
    '%c⚠️  Trade Pilot · 载堉视界',
    'color:#d4af37;font-size:22px;font-weight:800;text-shadow:0 0 6px rgba(212,175,55,.5)'
  ];
  const warn = [
    '%c 本站页面及知识库内容受版权保护，禁止未经授权的复制、扒取、镜像与商用。\n 侵权行为将依法追究责任。© danniallcc-creator ',
    'color:#faf9f5;background:#0a1428;font-size:13px;line-height:2;padding:6px 12px;border-left:3px solid #d4af37;'
  ];
  console.log.apply(console, banner);
  console.log.apply(console, warn);

  // ============ 5. DevTools 打开检测（尺寸差 + debugger 步进） ============
  const THRESHOLD = 160;
  let devtoolsOpen = false;
  function trap() {
    const w = window.outerWidth  - window.innerWidth;
    const h = window.outerHeight - window.innerHeight;
    const opened = (w > THRESHOLD || h > THRESHOLD);
    if (opened && !devtoolsOpen) {
      devtoolsOpen = true;
      showLock();
    } else if (!opened && devtoolsOpen) {
      devtoolsOpen = false;
      hideLock();
    }
    // 反调试：一旦 DevTools 断点激活，debugger 会真的暂停执行 → 计时差 > 100ms
    const t0 = Date.now();
    // eslint-disable-next-line no-debugger
    debugger;
    if (Date.now() - t0 > 100 && !devtoolsOpen) {
      devtoolsOpen = true;
      showLock();
    }
  }
  setInterval(trap, 1200);

  let lockEl = null;
  function showLock() {
    if (lockEl) return;
    lockEl = document.createElement('div');
    lockEl.style.cssText =
      'position:fixed;inset:0;z-index:2147483647;background:#050a14;color:#d4af37;' +
      'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
      'font:600 15px/1.8 -apple-system,PingFang SC,sans-serif;text-align:center;padding:2rem';
    lockEl.innerHTML =
      '<div style="font-size:44px;margin-bottom:1rem">🔒</div>' +
      '<div style="font-size:20px;color:#faf9f5;margin-bottom:.5rem">检测到调试工具</div>' +
      '<div style="opacity:.75;max-width:32em">本站内容受版权保护。' +
      '请关闭浏览器开发者工具后刷新页面继续浏览。<br>' +
      '© danniallcc-creator · 载堉视界 · 外贸领航者</div>';
    document.body.appendChild(lockEl);
  }
  function hideLock() {
    if (lockEl) { lockEl.remove(); lockEl = null; }
  }

  // ============ 6. 打印保护 ============
  const printStyle = document.createElement('style');
  printStyle.textContent =
    '@media print { body::before{content:"本页禁止打印/另存 · © danniallcc-creator";' +
    'display:block;padding:40vh 0;text-align:center;font:600 24px sans-serif;color:#333}' +
    'body > *:not(::before){display:none !important} }';
  document.head.appendChild(printStyle);

  // ============ 7. 图片禁拖 + 全局用户不可选（保留输入框） ============
  const s = document.createElement('style');
  s.textContent =
    'html,body{-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none}' +
    'input,textarea,[contenteditable]{-webkit-user-select:text;user-select:text}' +
    'img{-webkit-user-drag:none;user-drag:none;pointer-events:auto}';
  document.head.appendChild(s);

  // ============ 8. 隐水印（复制/截图可追溯） ============
  const stamp = 'TP-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,8);
  const wm = document.createElement('div');
  wm.setAttribute('aria-hidden','true');
  wm.style.cssText =
    'position:fixed;inset:0;pointer-events:none;z-index:9998;opacity:.035;' +
    'background-image:repeating-linear-gradient(-30deg,transparent 0 120px,' +
    'transparent 120px 121px);' +
    'font:600 14px/1 sans-serif;color:#d4af37';
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="360" height="220">' +
    '<text x="20" y="120" fill="rgba(212,175,55,0.35)" font-size="14" font-family="sans-serif" transform="rotate(-24 180 110)">' +
    '© danniallcc-creator · ' + stamp + '</text></svg>';
  wm.style.backgroundImage =
    "url('data:image/svg+xml;utf8," + encodeURIComponent(svg) + "')";
  wm.style.backgroundRepeat = 'repeat';
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(wm));
  if (document.body) document.body.appendChild(wm);

})();

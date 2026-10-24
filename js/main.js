/**
 * TemplateFactory 源码商店 — 渲染 + 交互
 * 纯原生 JS，无依赖。购物车不做，订购走 mailto。
 * 页面通过 <body data-page="..."> 声明自己，main.js 只渲染对应区块。
 */
(function () {
  'use strict';

  var TF = window.TF;
  var CONTACT = TF.contact.email;

  /* ---------- 工具 ---------- */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function fmt(n) { return '¥' + n; }

  /* 商品页链接前缀：根目录页面用 products/，products/ 子页用空（相对路径自适应） */
  var pathNorm = location.pathname.replace(/\\/g, '/');
  var inProductsDir = /\/products\/[^/]+\.html$/.test(pathNorm);
  var productHref = function (slug) { return (inProductsDir ? '' : 'products/') + slug + '.html'; };

  function bySlug(slug) {
    for (var i = 0; i < TF.products.length; i++) {
      if (TF.products[i].slug === slug) return TF.products[i];
    }
    return null;
  }

  /* 缩略占位：slug 首字母 + 稳定渐变色（无外部图片依赖） */
  function thumbStyle(slug) {
    var palettes = [
      ['#4f8cff', '#1b3f8f'],
      ['#7c5cff', '#3a1f8f'],
      ['#f5b942', '#a05a12'],
      ['#3ecf8e', '#14684a'],
      ['#ff6b9d', '#8f1f4a'],
      ['#22d3ee', '#0b5c74'],
      ['#a3e635', '#4d7c0f'],
      ['#fb923c', '#9a3412']
    ];
    var h = 0;
    for (var i = 0; i < slug.length; i++) { h = (h * 31 + slug.charCodeAt(i)) >>> 0; }
    var p = palettes[h % palettes.length];
    return 'background:linear-gradient(135deg,' + p[0] + ',' + p[1] + ');';
  }

  function thumbHtml(p) {
    var letter = (p.nameEn || p.slug).charAt(0).toUpperCase();
    return '<div class="thumb" style="' + thumbStyle(p.slug) + '">' +
      '<span>' + esc(letter) + '</span>' +
      '<span class="files-chip">' + p.files + ' 个文件</span>' +
      '</div>';
  }

  /* ---------- mailto 订购 ---------- */

  function orderSubject(p) {
    return '[源码订购] ' + p.name + '（' + p.slug + '）';
  }

  function orderBody(p) {
    return [
      '你好，我想购买这套源码模板：',
      '',
      '模板名称：' + p.name + '（' + p.slug + '）',
      '价格：' + fmt(p.price),
      '',
      '请回复付款方式和网盘链接，谢谢！'
    ].join('\n');
  }

  function orderLink(p) {
    return 'mailto:' + CONTACT +
      '?subject=' + encodeURIComponent(orderSubject(p)) +
      '&body=' + encodeURIComponent(orderBody(p));
  }

  function bundleLink() {
    var p = TF.bundle;
    return 'mailto:' + CONTACT +
      '?subject=' + encodeURIComponent('[源码订购] 全家桶（全部 ' + p.includes + ' 套）') +
      '&body=' + encodeURIComponent([
        '你好，我想购买全家桶：',
        '',
        '套餐：全部 ' + p.includes + ' 套生产级源码模板',
        '价格：' + fmt(p.price),
        '',
        '请回复付款方式和网盘链接，谢谢！'
      ].join('\n'));
  }

  /* data-mailto-order 属性驱动的动态链接（静态 HTML 里的按钮） */
  function wireMailtoButtons() {
    $all('[data-mailto-order]').forEach(function (el) {
      var slug = el.getAttribute('data-mailto-order');
      if (slug === 'bundle') {
        el.setAttribute('href', bundleLink());
      } else {
        var p = bySlug(slug);
        if (p) el.setAttribute('href', orderLink(p));
      }
    });
  }

  /* ---------- toast ---------- */

  var toastTimer = null;
  function toast(msg) {
    var t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  /* ---------- 商品卡 ---------- */

  function cardHtml(p) {
    return '<article class="card">' +
      thumbHtml(p) +
      '<div class="body">' +
      '<span class="cat">' + esc(p.category) + '</span>' +
      '<h3><a href="' + productHref(esc(p.slug)) + '">' + esc(p.name) + '</a></h3>' +
      '<p class="pitch">' + esc(p.tagline) + '</p>' +
      '<div class="stack">' + p.stack.map(function (s) { return '<span>' + esc(s) + '</span>'; }).join('') + '</div>' +
      '<div class="foot">' +
      '<span class="price">' + fmt(p.price) +
      (p.originalPrice ? '<span class="orig">' + fmt(p.originalPrice) + '</span>' : '') +
      '</span>' +
      '<a class="btn btn-primary btn-sm" href="' + orderLink(p) + '">购买</a>' +
      '</div>' +
      '</div>' +
      '</article>';
  }

  function renderGrid() {
    var mount = $('#product-grid');
    if (!mount) return;
    mount.innerHTML = TF.products.map(cardHtml).join('');
  }

  /* ---------- 商品详情页 ---------- */

  function renderProductPage() {
    var mount = $('#product-detail');
    if (!mount) return;
    var slug = mount.getAttribute('data-slug');
    var p = bySlug(slug);
    if (!p) {
      mount.innerHTML = '<p>未找到该模板。<a href="../index.html">返回首页</a></p>';
      return;
    }
    document.title = p.name + ' — ' + TF.brand;

    $all('[data-field]').forEach(function (el) {
      var key = el.getAttribute('data-field');
      if (key === 'price') {
        el.innerHTML = fmt(p.price) +
          (p.originalPrice ? '<span class="orig">' + fmt(p.originalPrice) + '</span>' : '');
      } else if (key === 'files') {
        el.textContent = p.files + ' 个文件';
      } else if (key === 'stack') {
        el.innerHTML = p.stack.map(function (s) { return '<span class="tag">' + esc(s) + '</span>'; }).join('');
      } else if (key === 'features') {
        el.innerHTML = p.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('');
      } else if (key === 'tags') {
        el.innerHTML = p.tags.map(function (t) { return '<span class="tag">#' + esc(t) + '</span>'; }).join('');
      } else if (p[key] !== undefined) {
        el.textContent = p[key];
      }
    });

    var buy = $('#buy-btn');
    if (buy) buy.setAttribute('href', orderLink(p));

    var bundleBtn = $('#bundle-btn');
    if (bundleBtn) bundleBtn.setAttribute('href', bundleLink());

    /* 相关推荐：同分类的其他模板 */
    var rel = $('#related-grid');
    if (rel) {
      var others = TF.products.filter(function (x) { return x.slug !== p.slug; });
      var sameCat = others.filter(function (x) { return x.category === p.category; });
      var picks = (sameCat.length >= 2 ? sameCat : others).slice(0, 3);
      rel.innerHTML = picks.map(cardHtml).join('');
    }
  }

  /* ---------- pricing.html ---------- */

  function renderPricingTable() {
    var tbody = $('#pricing-tbody');
    if (!tbody) return;
    tbody.innerHTML = TF.products.map(function (p) {
      return '<tr>' +
        '<td><a href="' + productHref(esc(p.slug)) + '">' + esc(p.name) + '</a></td>' +
        '<td class="num">' + p.files + '</td>' +
        '<td class="num">' + esc(p.category) + '</td>' +
        '<td class="price-cell">' + fmt(p.price) +
        (p.originalPrice ? ' <span class="orig" style="text-decoration:line-through;color:var(--text-faint);font-weight:400;font-size:12px">' + fmt(p.originalPrice) + '</span>' : '') +
        '</td>' +
        '<td><a class="btn btn-ghost btn-sm" href="' + orderLink(p) + '">购买</a></td>' +
        '</tr>';
    }).join('');
  }

  /* ---------- 统计数字（首页 hero） ---------- */

  function renderStats() {
    var totalFiles = 0;
    TF.products.forEach(function (p) { totalFiles += p.files; });
    var el = $('#stat-files');
    if (el) el.textContent = totalFiles + '+';
    var el2 = $('#stat-skus');
    if (el2) el2.textContent = TF.products.length;
    var el3 = $('#stat-bundle');
    if (el3) el3.textContent = fmt(TF.bundle.price);
  }

  /* ---------- FAQ 单开（手风琴感） ---------- */

  function wireFaq() {
    $all('details.faq').forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (d.open) {
          $all('details.faq').forEach(function (o) {
            if (o !== d) o.open = false;
          });
        }
      });
    });
  }

  /* ---------- 复制邮箱 ---------- */

  function wireCopyEmail() {
    $all('[data-copy-email]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var done = function () { toast('邮箱已复制：' + CONTACT); };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(CONTACT).then(done, done);
        } else {
          var ta = document.createElement('textarea');
          ta.value = CONTACT;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch (err) { /* file:// 下忽略 */ }
          document.body.removeChild(ta);
          done();
        }
      });
    });
  }

  /* ---------- 启动 ---------- */

  function init() {
    wireMailtoButtons();
    renderGrid();
    renderProductPage();
    renderPricingTable();
    renderStats();
    wireFaq();
    wireCopyEmail();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

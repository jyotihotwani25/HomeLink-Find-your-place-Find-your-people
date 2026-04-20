/* ============================================
   HOMELINK — MAIN.JS
   Shared utility script across every page.
   Always load AFTER properties.js and users.js.
   Safe on all pages — every DOM access is
   guard-checked before use.
   ============================================ */


/* ── SCROLL REVEAL ──────────────────────────
   Uses [data-r] + .in from global.css.
   Works on every page automatically.
──────────────────────────────────────────── */
const _io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      _io.unobserve(e.target);
    }
  });
}, { threshold: 0.06 });

document.querySelectorAll('[data-r]').forEach(el => _io.observe(el));


/* ── PUBLIC NAVBAR — MOBILE MENU ───────────
   Used on: index.html, signin.html, signup.html
   The #mob element only exists on public pages.
──────────────────────────────────────────── */
function tM() {
  const mob = document.getElementById('mob');
  if (mob) mob.classList.toggle('open');
}
function cM() {
  const mob = document.getElementById('mob');
  if (mob) mob.classList.remove('open');
}


/* ── ACTIVE NAV LINK HIGHLIGHT ─────────────
   Highlights the current page link in the
   public navbar (.nav-links a).
──────────────────────────────────────────── */
(function highlightNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.style.color      = 'var(--forest)';
      link.style.fontWeight = '600';
    }
  });
})();


/* ── DASHBOARD SIDEBAR TOGGLE ───────────────
   Used on: home.html, explore.html, profile.html
   and all other dashboard/app pages.
──────────────────────────────────────────── */
function toggleSidebar() {
  const sb    = document.getElementById('sb');
  const main  = document.getElementById('main');
  const tog   = document.getElementById('sb-tog');
  if (sb)   sb.classList.toggle('col');
  if (main) main.classList.toggle('wide');
  if (tog)  tog.classList.toggle('col');
}


/* ── DASHBOARD SIDEBAR TOGGLE (mobile-aware) ──
   Alias used in home.html and explore.html.
   On mobile: slides sidebar in as drawer.
   On desktop: collapses to icon-only rail.
──────────────────────────────────────────── */
function toggleSb() {
  if (window.innerWidth <= 768) {
    const sb = document.getElementById('sb');
    if (!sb) return;
    const open = sb.classList.contains('mob-open');
    sb.classList.toggle('mob-open', !open);
    const ov = document.getElementById('sb-overlay');
    if (ov) ov.classList.toggle('open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  } else {
    toggleSidebar();
  }
}


/* ── FAVOURITE / SAVE TOGGLE ───────────────
   Works on both public listing cards and
   dashboard property cards.
   Pass the button element; it must contain
   an <svg> and optionally carry class .sv
──────────────────────────────────────────── */
function toggleFav(btn) {
  btn.classList.toggle('sv');
  btn.style.transform = 'scale(1.3)';
  setTimeout(() => btn.style.transform = '', 200);
}


/* ── SEARCH TYPE CHIPS (.sc) ───────────────
   Used on: index.html search bar,
   explore.html filter bar.
──────────────────────────────────────────── */
function sCh(el) {
  document.querySelectorAll('.sc').forEach(c => c.classList.remove('on'));
  el.classList.add('on');
}


/* ── LISTING TABS (.lt) ─────────────────────
   Generic tab switcher for listing sections.
   Used on: home.html, explore.html.
──────────────────────────────────────────── */
function sLt(el) {
  document.querySelectorAll('.lt').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
}


/* ── GREETING (dashboard topbar) ───────────
   Sets #gt to Good morning / afternoon / evening.
──────────────────────────────────────────── */
(function setGreeting() {
  const el = document.getElementById('gt');
  if (!el) return;
  const h = new Date().getHours();
  el.textContent = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
})();


/* ── RESTORE SESSION USER ───────────────────
   Reads hl_user from sessionStorage and
   populates dashboard sidebar + topbar fields.
   Safe — checks each element before writing.
──────────────────────────────────────────── */
(function restoreUser() {
  try {
    const u = JSON.parse(sessionStorage.getItem('hl_user'));
    if (!u) return;
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    const src = (id, val) => { const el = document.getElementById(id); if (el) el.src = val; };
    set('gn',    u.name.split(' ')[0]);
    set('sb-nm', u.name);
    set('sb-rl', (u.role ? u.role[0].toUpperCase() + u.role.slice(1) : 'User') + ' · Ahmedabad');
    if (u.avatar) src('sb-av', u.avatar);
  } catch(e) {}
})();


/* ── DASHBOARD NOTIFICATIONS ────────────────
   Notification dropdown toggle + read/clear.
   Elements only exist on dashboard pages.
──────────────────────────────────────────── */
let _notifCount = 3;

function toggleNotif() {
  const d = document.getElementById('ndrop');
  if (d) d.classList.toggle('open');
}
function readNotif(item) {
  item.style.opacity = '0.45';
  _notifCount = Math.max(0, _notifCount - 1);
  _updateNotifDot();
}
function markAllRead() {
  document.querySelectorAll('.nitem').forEach(i => i.style.opacity = '0.45');
  _notifCount = 0;
  _updateNotifDot();
  const d = document.getElementById('ndrop');
  if (d) d.classList.remove('open');
}
function _updateNotifDot() {
  const dot = document.getElementById('notif-dot');
  if (dot) dot.classList.toggle('gone', _notifCount === 0);
}

/* Close notification dropdown on outside click */
document.addEventListener('click', e => {
  if (!e.target.closest('.nw')) {
    const d = document.getElementById('ndrop');
    if (d) d.classList.remove('open');
  }
});


/* ── DASHBOARD CHAT DOT ─────────────────────*/
function openChat() {
  const dot = document.getElementById('chat-dot');
  if (dot) dot.classList.add('gone');
  window.location.href = 'chat.html';
}


/* ── MOBILE BOTTOM NAV (.mn-i) ──────────────
   Active state for dashboard bottom nav.
──────────────────────────────────────────── */
(function initMobileNav() {
  document.querySelectorAll('.mn-i').forEach(i => {
    i.addEventListener('click', function () {
      document.querySelectorAll('.mn-i').forEach(x => x.classList.remove('on'));
      this.classList.add('on');
    });
  });
})();


/* ── POST PROPERTY SHORTCUT ─────────────────*/
function postProperty() {
  window.location.href = 'post-property.html';
}


/* ── TRANSPORT ICON SVGs ────────────────────
   Exported so any page script can use them
   when building property card HTML.
──────────────────────────────────────────── */
const SVG = {
  loc:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>`,
  fav:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  metro: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><line x1="8" y1="15" x2="8" y2="17"/><line x1="16" y1="15" x2="16" y2="17"/></svg>`,
  bus:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M8 19v2M16 19v2"/><line x1="3" y1="14" x2="21" y2="14"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  star:  `<svg viewBox="0 0 24 24" width="11" height="11"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
};


/* ── BUILD PROPERTY CARD HTML ───────────────
   Shared card builder used by home.html,
   explore.html, saved.html etc.
   Returns an HTML string ready for innerHTML.
──────────────────────────────────────────── */
function buildPropertyCard(p) {
  const period   = p.period || '';
  const catClass = p.category; /* rent | buy | pg  — matches .pc-b.rent etc in global.css */
  const label    = p.category === 'pg' ? 'PG' : p.category === 'buy' ? 'Buy' : 'Rent';

  /* Specs row */
  const specs = [];
  if (p.category === 'pg') {
    if (p.roomType)        specs.push(p.roomType.split('/')[0].trim());
    if (p.pgMeals && p.pgMeals !== 'Meals Optional') specs.push(p.pgMeals.replace(' Included', ''));
    if (p.genderPreference) specs.push(p.genderPreference);
  } else {
    if (p.bhk)      specs.push(`${p.bhk} BHK`);
    if (p.area)     specs.push(`${p.area.toLocaleString()} sqft`);
    if (p.furnished) {
      const fMap = { 'Fully Furnished':'Furnished', 'Semi-Furnished':'Semi-Furn.', 'Partially Furnished':'Part. Furn.', 'Unfurnished':'Unfurnished', 'Furnished':'Furnished' };
      specs.push(fMap[p.furnished] || p.furnished);
    }
  }

  const featBadge = p.featured ? `<span class="pc-b feat">&#9733; Featured</span>` : '';
  const specHTML  = specs.slice(0, 3).map(s => `<span class="pc-sp">${s}</span>`).join('');
  const starSVG   = `<svg viewBox="0 0 24 24" width="11" height="11" fill="var(--amber)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

  return `
  <div class="pc" onclick="location.href='property.html?id=${p.id}'">
    <div class="pc-img">
      <img src="${p.thumbnail}" alt="${p.title}" loading="lazy"/>
      <div class="pc-badges">
        <span class="pc-b ${catClass}">${label}</span>${featBadge}
      </div>
      <button class="pc-fav" onclick="event.stopPropagation();toggleFav(this)">${SVG.fav}</button>
    </div>
    <div class="pc-body">
      <div class="pc-price">${p.price}<small>${period}</small></div>
      <div class="pc-name">${p.title}</div>
      <div class="pc-loc"><span class="pc-loc-ic">${SVG.loc}</span>${p.locality}, ${p.city}</div>
      <div class="pc-transport">
        <span class="pc-tr"><span class="pc-tr-ic">${SVG.metro}</span>${p.distanceMetro} km · Metro</span>
        <span class="pc-tr"><span class="pc-tr-ic">${SVG.bus}</span>${p.distanceBus} km · Bus</span>
      </div>
      <div class="pc-specs">${specHTML}</div>
      <div class="pc-footer">
        <span class="pc-date">${p.postedDate}</span>
        <span class="pc-rating">${starSVG} ${p.rating}</span>
      </div>
    </div>
  </div>`;
}


/* ── STAGGERED CARD ANIMATION ───────────────
   Call after injecting cards into a grid
   container to fade them in one by one.
──────────────────────────────────────────── */
function animateCards(container) {
  if (!container) return;
  container.querySelectorAll('.pc').forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(14px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.4s, transform 0.4s';
      el.style.opacity    = '1';
      el.style.transform  = 'none';
    }, i * 55 + 20);
  });
}
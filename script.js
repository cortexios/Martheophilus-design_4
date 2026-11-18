/* Shared site behavior; original blocks retain their execution order. */
const SCHOOL_PAGE = document.body.dataset.page || "home";
const SCHOOL_ROUTES = {
  "our-school": "our-school.html",
  "spg-history": "history.html",
  "spg-vision": "vision-mission-motto.html",
  "spg-management": "management.html",
  "spg-principal": "principals-message.html",
  "spg-campus": "campus-infrastructure.html",
  "spg-spaces": "spaces.html",
  "spg-conduct": "code-of-conduct.html",
  "spg-discipline": "discipline.html",
  "spg-timings": "school-timings.html",
  "spg-curriculum": "curriculum.html",
  "spg-subjects": "subjects-offered.html",
  "spg-exams": "examination-rules-pattern.html",
  "spg-scholastics": "scholastics.html",
  "spg-coscholastics": "co-scholastics.html",
  "spg-achievements": "achievements.html",
  "spg-admissions": "admission-process.html",
  "spg-prospectus": "prospectus.html",
  "spg-magazine": "magazine.html",
  "spg-gallery": "gallery.html",
  "spg-alumni": "alumni.html",
  "spg-careers": "work-with-us.html",
  "spg-contact": "contact-us.html",
  "spg-preprimary": "pre-primary.html",
  "spg-primary": "primary.html",
  "spg-middle": "middle.html",
  "spg-high": "high.html"
};

/* Compatibility for saved links to the former index.html subpages. */
if (SCHOOL_PAGE === "home") {
  function redirectLegacyPage() {
    const file = SCHOOL_ROUTES[window.location.hash.slice(1)];
    if (file) window.location.replace(file + window.location.search);
  }
  redirectLegacyPage();
  window.addEventListener('hashchange', redirectLegacyPage);
}

/* Google Translate: existing language controls drive the Google widget. */
(function () {
  'use strict';
  const storageKey = 'siteLanguage';
  let selected = 'en';
  try { selected = localStorage.getItem(storageKey) === 'mr' ? 'mr' : 'en'; } catch (_) {}
  function applyLabels(lang) {
    document.querySelectorAll('[data-en][data-mr]').forEach(el => {
      el.textContent = el.getAttribute(lang === 'mr' ? 'data-mr' : 'data-en');
    });
  }
  window.applyLabels = applyLabels;
  function updateUI() {
    document.querySelectorAll('[data-current-lang-label]').forEach(el => { el.textContent = selected === 'mr' ? 'मराठी' : 'English'; });
    document.querySelectorAll('[data-lang-option]').forEach(el => {
      const active = el.dataset.langOption === selected;
      el.classList.toggle('active', active);
      el.closest('[role="option"]')?.setAttribute('aria-selected', String(active));
    });
  }
  function setCookie(lang) {
    document.cookie = 'googtrans=' + (lang === 'mr' ? '/en/mr' : '/en/en') + '; path=/; SameSite=Lax';
  }
  function apply(lang, reloadOnFailure) {
    selected = lang === 'mr' ? 'mr' : 'en';
    try { localStorage.setItem(storageKey, selected); } catch (_) {}
    setCookie(selected);
    applyLabels(selected);
    updateUI();
    const requested = selected;
    let attempts = 0;
    function tryDropdown() {
      if (selected !== requested) return;
      const combo = document.querySelector('.goog-te-combo');
      const value = requested === 'en' && combo && ![...combo.options].some(option => option.value === 'en') ? '' : requested;
      if (combo && [...combo.options].some(option => option.value === value)) {
        combo.value = value;
        combo.dispatchEvent(new Event('change', {bubbles:true}));
      } else if (++attempts < 25) setTimeout(tryDropdown, 200);
      else if (reloadOnFailure) window.location.reload();
    }
    tryDropdown();
  }
  window.setLang = lang => apply(lang, true);
  window.googleTranslateElementInit = function () {
    new google.translate.TranslateElement({pageLanguage:'en', includedLanguages:'en,mr', autoDisplay:false}, 'google_translate_element');
    updateUI();
    if (selected === 'mr') apply(selected, false);
  };
  document.addEventListener('DOMContentLoaded', function () {
    setCookie(selected);
    applyLabels(selected);
    updateUI();
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => btn.addEventListener('click', function (event) {
      event.preventDefault(); event.stopPropagation();
      const menu=btn.closest('.lang-switcher')?.querySelector('.lang-dropdown');
      const open=menu&&!menu.classList.contains('open');
      document.querySelectorAll('.lang-dropdown.open').forEach(el=>el.classList.remove('open'));
      if(menu)menu.classList.toggle('open',open);
      btn.setAttribute('aria-expanded',String(!!open));
    }));
    document.querySelectorAll('[data-lang-option]').forEach(btn => btn.addEventListener('click', function (event) {
      event.preventDefault(); apply(btn.dataset.langOption,true);
      btn.closest('.lang-dropdown')?.classList.remove('open');
      btn.closest('.lang-switcher')?.querySelector('[data-lang-toggle]')?.setAttribute('aria-expanded','false');
    }));
    document.addEventListener('click',event=>{if(!event.target.closest('.lang-switcher'))document.querySelectorAll('.lang-dropdown.open').forEach(el=>el.classList.remove('open'));});
    const script=document.createElement('script');
    script.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async=true; document.head.appendChild(script);
  });
})();

/* <script data-inlined-source="app.js"> (original line 22629) */


function initNoticeMarquee() {

  const bar = document.getElementById("noticeMarqueeBar");

  if (!bar) return;



  if (bar.dataset.bound) return;

  bar.dataset.bound = "true";

  const viewport = bar.querySelector(".notice-marquee-viewport");
  const track = bar.querySelector(".notice-marquee-track");
  const messages = [
    "Admissions Open for 2027–28",
    "Annual Day – Pre-Primary: 9 December 2026",
    "Annual Day – Primary: 10 December 2026",
    "Annual Day – Secondary: 11 December 2026"
  ];

  if (viewport && track) {

    const group = document.createElement("div");

    group.className = "notice-marquee-group";
    track.replaceChildren(group);

    let noticeCount = 0;

    const appendNotice = (message) => {

      const item = document.createElement("span");
      const separator = document.createElement("span");

      item.className = "notice-marquee-item";
      item.textContent = message;
      if (noticeCount > 0) item.setAttribute("aria-hidden", "true");

      separator.className = "notice-marquee-sep";
      separator.setAttribute("aria-hidden", "true");
      separator.textContent = "•";

      group.append(item, separator);
      noticeCount += 1;

    };

    const appendNoticeSet = () => messages.forEach(appendNotice);

    appendNoticeSet();

    // Keep each half wider than the viewport so the next copy is always
    // visible before the first half completes its animation cycle.
    while (group.scrollWidth < viewport.clientWidth * 2) appendNoticeSet();

    const duplicate = group.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    track.append(duplicate);

  }



  // Pause the auto-scroll on hover so people can read/click a notice.

  bar.addEventListener("mouseenter", () => bar.classList.add("paused"));

  bar.addEventListener("mouseleave", () => bar.classList.remove("paused"));

}





function normalizePagePath(path) {

  // Drop any query string / hash, take just the filename part,

  // strip a trailing ".html" and lowercase it so that live-server

  // quirks (pretty URLs without .html, trailing slashes, different

  // casing, etc.) don't break the comparison the way they can when

  // the host's URL structure differs slightly from a local server.

  if (!path) return "index";

  let p = path.split("?")[0].split("#")[0];

  p = p.split("/").filter(Boolean).pop() || "index.html";

  p = p.toLowerCase().replace(/\.html$/, "");

  return p || "index";

}



function setActiveNav() {
  if (SCHOOL_PAGE !== "home") { setStandaloneNav(); return; }

  const currentPage = normalizePagePath(window.location.pathname);



  document.querySelectorAll(".nav-links a, #mobileMenu a").forEach(link => {

    const href = link.getAttribute("href");

    if (!href) return;

    // Only compare plain same-page links. Skip "#" anchors, external, mailto,

    // tel links, AND any link that jumps to a section on a page (contains a

    // "#"), e.g. "aboutus.html#vm" or "aboutus.html#mt" — otherwise every

    // in-page anchor link normalizes to the same page name and all of them

    // (About Us, Our School, Vision & Mission, Our Motto, ...) light up as

    // "active" together any time you're anywhere on that page.

    if (href.includes("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {

      return;

    }

    const linkPage = normalizePagePath(href);

    link.classList.toggle("active", linkPage === currentPage);

  });

}



document.addEventListener("DOMContentLoaded", () => {

  setTimeout(setActiveNav, 100);

});





/* =========================================================

   STICKY NAVBAR (desktop)

========================================================= */

// Desktop nav: fixed but tracks header until header scrolls away, then locks at top.

// Mobile/tablet: handled by their own fixed CSS — inline styles cleared.

const navbarEl = document.querySelector(".nav-container");

const headerTopEl = document.querySelector(".header-top");

const headerWrapEl = document.getElementById("header");



function setupDesktopLayout() {

  const noticeBar = document.getElementById("noticeMarqueeBar");

  if (window.innerWidth >= 1201 && navbarEl) {

    const navH = navbarEl.offsetHeight;

    // Nav is position:fixed (removed from flow); push notice bar below it

    if (noticeBar) noticeBar.style.marginTop = navH + "px";

    if (headerWrapEl) headerWrapEl.style.paddingBottom = "";

  } else {

    if (noticeBar) noticeBar.style.marginTop = "";

    if (headerWrapEl) headerWrapEl.style.paddingBottom = "";

  }

}



function updateNav() {

  if (!navbarEl) return;

  if (window.innerWidth >= 1201 && headerTopEl) {

    const headerH = headerTopEl.offsetHeight;

    // Track below header until it scrolls away, then lock at 0

    navbarEl.style.top = Math.max(0, headerH - window.scrollY) + "px";

    navbarEl.classList.toggle("scrolled", window.scrollY >= headerH);

    // Preserve the established desktop threshold while handling the
    // header and navbar in this single passive scroll listener.
    navbarEl.classList.toggle("sticky", window.scrollY > 120);
    headerTopEl.classList.toggle("hide", window.scrollY > 120);

  } else {

    // Mobile/tablet: clear all desktop inline styles

    navbarEl.style.top = "";

    if (headerWrapEl) headerWrapEl.style.paddingBottom = "";

    const noticeBarEl = document.getElementById("noticeMarqueeBar");

    if (noticeBarEl) noticeBarEl.style.marginTop = "";

    const threshold = headerTopEl ? headerTopEl.offsetHeight : 0;

    navbarEl.classList.toggle("scrolled", window.scrollY > threshold);

    navbarEl.classList.toggle("sticky", window.scrollY > 10);

  }

}



let navUpdateFrame = 0;
let navLayoutPending = false;

function scheduleNavUpdate(includeLayout) {
  navLayoutPending = navLayoutPending || !!includeLayout;
  if (navUpdateFrame) return;
  navUpdateFrame = requestAnimationFrame(() => {
    navUpdateFrame = 0;
    if (navLayoutPending) setupDesktopLayout();
    navLayoutPending = false;
    updateNav();
  });
}

window.addEventListener("scroll", () => scheduleNavUpdate(false), { passive: true });

window.addEventListener("resize", () => scheduleNavUpdate(true), { passive: true });

scheduleNavUpdate(true);





/* =========================================================

   ALUMNI / LOGIN BUTTON -> EXTERNAL REDIRECT

   (Previously opened a popup modal. Now sends the user straight

   to the external login/portal URL below.)

========================================================= */

// LOGIN DESTINATION: shared by the desktop and mobile Login buttons.

const ALUMNI_LOGIN_URL = "https://mocc.myclassboard.com/login";



function initAlumniModal() {

  const alumniBtns = document.querySelectorAll(".alumni-btn");



  alumniBtns.forEach(btn => {

    // Remove any existing inline onclick to avoid double-firing

    btn.removeAttribute("onclick");

    btn.addEventListener("click", () => {

      window.location.assign(ALUMNI_LOGIN_URL);

    });

  });

}





/* =========================================================
   DESKTOP / TABLET DROPDOWNS — hover, touch and keyboard
========================================================= */
function initDesktopDropdowns() {
  const dropdowns = Array.from(document.querySelectorAll('.nav-container .dropdown, .khopoli-tablet-menu .dropdown'));

  function setOpen(item, open) {
    item.classList.toggle('nav-dropdown-open', open);
    const trigger = item.querySelector(':scope > a');
    if (trigger) trigger.setAttribute('aria-expanded', String(open));
    if (!open) {
      item.querySelectorAll('.nav-dropdown-open').forEach(child => child.classList.remove('nav-dropdown-open'));
      item.querySelectorAll('[aria-expanded="true"]').forEach(control => control.setAttribute('aria-expanded', 'false'));
    }
  }

  function closeAll(except) {
    dropdowns.forEach(item => { if (item !== except) setOpen(item, false); });
  }

  dropdowns.forEach(item => {
    const trigger = item.querySelector(':scope > a');
    if (!trigger) return;
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', event => {
      if (trigger.getAttribute('href') === '#') event.preventDefault();
      event.stopPropagation();
      const willOpen = !item.classList.contains('nav-dropdown-open');
      closeAll(willOpen ? item : null);
      setOpen(item, willOpen);
    });
    item.addEventListener('mouseenter', () => trigger.setAttribute('aria-expanded', 'true'));
    item.addEventListener('mouseleave', () => {
      if (!item.classList.contains('nav-dropdown-open')) trigger.setAttribute('aria-expanded', 'false');
    });
    item.addEventListener('focusin', () => trigger.setAttribute('aria-expanded', 'true'));
    item.addEventListener('focusout', event => {
      if (!item.contains(event.relatedTarget) && !item.classList.contains('nav-dropdown-open')) trigger.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('.nav-container .has-submenu, .khopoli-tablet-menu .has-submenu').forEach(item => {
    const trigger = item.querySelector(':scope > a');
    if (!trigger) return;
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', event => {
      if (trigger.getAttribute('href') === '#') event.preventDefault();
      event.stopPropagation();
      const willOpen = !item.classList.contains('nav-dropdown-open');
      item.parentElement.querySelectorAll(':scope > .has-submenu.nav-dropdown-open').forEach(sibling => {
        if (sibling !== item) setOpen(sibling, false);
      });
      setOpen(item, willOpen);
    });
  });

  document.addEventListener('click', () => closeAll(null));
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const openItem = dropdowns.find(item => item.classList.contains('nav-dropdown-open'));
    if (!openItem) return;
    const trigger = openItem.querySelector(':scope > a');
    closeAll(null);
    if (trigger) trigger.focus();
  });
}


/* =========================================================

   MOBILE MENU — slide-in drawer

========================================================= */

function initMobileMenu() {

  const mobileMenu    = document.getElementById("mobileMenu");

  const overlay       = document.getElementById("mobileMenuOverlay");

  const closeBtn      = document.getElementById("closeMobileMenu");



  const toggleBtns = [

    document.getElementById("menuToggle"),

    document.getElementById("mobileMenuToggle")

  ].filter(Boolean);



  if (!mobileMenu) return;



  let scrollY = 0;
  let previousFocus = null;
  let previousBodyStyles = null;
  const focusableSelector = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

  function setMenuExpanded(expanded) {
    toggleBtns.forEach(btn => {
      btn.setAttribute('aria-expanded', String(expanded));
      btn.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
    });
    mobileMenu.setAttribute('aria-hidden', String(!expanded));
  }



  function openMenu() {

    if (mobileMenu.classList.contains("active")) return;

    previousFocus = document.activeElement;

    mobileMenu.classList.add("active");

    if (overlay) overlay.classList.add("active");

    setMenuExpanded(true);



    // iOS Safari ignores body{overflow:hidden} for touch scrolling, so

    // the page behind the drawer would still scroll. Pinning the body

    // in place with position:fixed is the reliable cross-browser fix,

    // and lets touches inside the drawer scroll its own list instead.

    scrollY = window.scrollY || window.pageYOffset || 0;

    previousBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow
    };

    document.body.style.position = "fixed";

    document.body.style.top = `-${scrollY}px`;

    document.body.style.left = "0";

    document.body.style.right = "0";

    document.body.style.width = "100%";

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => { if (closeBtn) closeBtn.focus(); });

  }



  function closeMenu(restoreFocus = true) {

    if (!mobileMenu.classList.contains("active")) return;

    mobileMenu.classList.remove("active");

    if (overlay) overlay.classList.remove("active");

    setMenuExpanded(false);



    document.body.style.position = previousBodyStyles ? previousBodyStyles.position : "";

    document.body.style.top = previousBodyStyles ? previousBodyStyles.top : "";

    document.body.style.left = previousBodyStyles ? previousBodyStyles.left : "";

    document.body.style.right = previousBodyStyles ? previousBodyStyles.right : "";

    document.body.style.width = previousBodyStyles ? previousBodyStyles.width : "";

    document.body.style.overflow = previousBodyStyles ? previousBodyStyles.overflow : "";

    window.scrollTo(0, scrollY);



    mobileMenu.querySelectorAll(".mob-dropdown-toggle.open").forEach(t => {

      t.classList.remove("open");

      t.setAttribute("aria-expanded", "false");

      t.nextElementSibling.classList.remove("open");

    });

    mobileMenu.querySelectorAll('.mob-sub-heading.open').forEach(heading => {
      heading.classList.remove('open');
      heading.setAttribute('aria-expanded', 'false');
      if (heading.nextElementSibling) heading.nextElementSibling.classList.remove('open');
    });

    if (restoreFocus && previousFocus && previousFocus.isConnected) previousFocus.focus();

  }



  toggleBtns.forEach(btn => {

    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      if (mobileMenu.classList.contains("active")) {

        closeMenu();

      } else {

        openMenu();

      }

    });

  });

  /* The legacy header toggle is a div; make Enter and Space operate it like a button. */
  toggleBtns.forEach(btn => {
    if (btn.tagName === 'BUTTON') return;
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });



  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  if (overlay)  overlay.addEventListener("click", closeMenu);



  mobileMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => closeMenu());

  });



  /* Accordion dropdowns */

  mobileMenu.querySelectorAll(".mob-dropdown-toggle").forEach(toggle => {

    toggle.addEventListener("click", (e) => {

      e.stopPropagation();

      const panel   = toggle.nextElementSibling;

      const isOpen  = toggle.classList.contains("open");



      mobileMenu.querySelectorAll(".mob-dropdown-toggle.open").forEach(t => {

        if (t !== toggle) {

          t.classList.remove("open");

          t.setAttribute("aria-expanded", "false");

          t.nextElementSibling.classList.remove("open");

        }

      });



      toggle.classList.toggle("open", !isOpen);

      toggle.setAttribute("aria-expanded", String(!isOpen));

      panel.classList.toggle("open", !isOpen);

    });

  });

  mobileMenu.querySelectorAll('.mob-sub-heading').forEach(heading => {
    function toggleSubgroup() {
      const willOpen = !heading.classList.contains('open');
      heading.classList.toggle('open', willOpen);
      heading.setAttribute('aria-expanded', String(willOpen));
      if (heading.nextElementSibling) heading.nextElementSibling.classList.toggle('open', willOpen);
    }
    heading.addEventListener('click', toggleSubgroup);
    heading.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSubgroup();
      }
    });
  });



  document.addEventListener("keydown", e => {

    if (!mobileMenu.classList.contains('active')) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = Array.from(mobileMenu.querySelectorAll(focusableSelector)).filter(el =>
        el.offsetParent !== null &&
        !el.closest('.mob-dropdown-panel:not(.open), .mob-sub-links:not(.open), .lang-dropdown:not(.open)')
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1200 && mobileMenu.classList.contains('active')) closeMenu(false);
  }, { passive:true });

}





/* =========================================================

   HERO SLIDER

========================================================= */

/* ── Hero Slideshow ─────────────────────────────────────────────

   Photos live in the HTML above (the <img> tags inside .slides-full).

   Edit ONLY those img lines to add, remove or reorder slides.

   This JS reads whatever is there and adapts automatically.

   ─────────────────────────────────────────────────────────────── */

let currentSlide  = 0;

let slidesFull    = [];

let slideInterval;

let heroZoomCleanup;

// Change 6000 to a different number of milliseconds to make the slides faster or slower.

const HERO_SLIDE_DURATION = 6000;

const heroReducedMotion   = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);



document.addEventListener("DOMContentLoaded", () => {

  slidesFull = Array.from(document.querySelectorAll(".slide-full"));

  if (slidesFull.length === 0) return;



  // ── Build dot buttons from slide count ──

  const dotsWrap = document.getElementById("hero-dots");

  if (dotsWrap) {

    slidesFull.forEach(function(_, i) {

      const btn = document.createElement("button");

      btn.type        = "button";

      btn.className   = "hero-dot" + (i === 0 ? " active" : "");

      btn.setAttribute("aria-label",   "Go to slide " + (i + 1));

      btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");

      btn.addEventListener("click", function() { goToSlide(i); resetHeroInterval(); });

      dotsWrap.appendChild(btn);

    });

  }



  // ── Hide arrows and dots when only 1 slide ──

  if (slidesFull.length <= 1) {

    document.querySelectorAll(".arrow-full").forEach(function(a) { a.style.display = "none"; });

    if (dotsWrap) dotsWrap.style.display = "none";

  }



  showSlide(currentSlide);



  // ── Autoplay (paused when prefers-reduced-motion is on) ──

  if (!heroReducedMotion) {

    slideInterval = setInterval(nextSlide, HERO_SLIDE_DURATION);

  }



  // ── Pause on mouse hover ──

  const container = document.getElementById("hero-slider");

  if (container) {

    container.addEventListener("mouseenter", pauseHeroAutoplay);

    container.addEventListener("mouseleave", function() {

      if (!heroReducedMotion) slideInterval = setInterval(nextSlide, HERO_SLIDE_DURATION);

    });

    // ── Pause when any control inside hero has keyboard focus ──

    container.addEventListener("focusin",  pauseHeroAutoplay);

    container.addEventListener("focusout", function(e) {

      if (!container.contains(e.relatedTarget)) {

        if (!heroReducedMotion) slideInterval = setInterval(nextSlide, HERO_SLIDE_DURATION);

      }

    });

  }



  // ── Touch swipe ──

  var heroTouchX = 0;

  var heroEl = document.querySelector(".hero-full");

  if (heroEl) {

    heroEl.addEventListener("touchstart", function(e) {

      heroTouchX = e.touches[0].clientX;

    }, { passive: true });

    heroEl.addEventListener("touchend", function(e) {

      var dx = e.changedTouches[0].clientX - heroTouchX;

      if (Math.abs(dx) > 40) {

        if (dx < 0) { nextSlide(); } else { prevSlide(); }

        resetHeroInterval();

      }

    }, { passive: true });

  }

});



function pauseHeroAutoplay() {

  clearInterval(slideInterval);

}



function resetHeroInterval() {

  clearInterval(slideInterval);

  if (!heroReducedMotion) {

    slideInterval = setInterval(nextSlide, HERO_SLIDE_DURATION);

  }

}



function showSlide(index) {

  // Leave the outgoing motion class in place for the opacity fade.
  // A zoom-in slide therefore holds its final scale while the next
  // zoom-out slide begins at the same scale.

  slidesFull.forEach(function(slide) {

    slide.classList.remove("active");

  });

  // Activate the chosen slide

  slidesFull[index].classList.add("active");

  // Alternate the direction of the slow zoom for every consecutive slide.

  if (!heroReducedMotion) {

    requestAnimationFrame(function() {

      if (slidesFull[index]) {

        slidesFull[index].classList.add(index % 2 === 0 ? "hero-zoom-in" : "hero-zoom-out");

      }

    });

  }

  // Remove the hidden slides' frozen motion state after the one-second fade.
  clearTimeout(heroZoomCleanup);

  heroZoomCleanup = setTimeout(function() {

    slidesFull.forEach(function(slide) {

      if (!slide.classList.contains("active")) {

        slide.classList.remove("hero-zoom-in");

        slide.classList.remove("hero-zoom-out");

      }

    });

  }, 1050);

  // Update dot indicators

  document.querySelectorAll(".hero-dot").forEach(function(dot, i) {

    var isActive = (i === index);

    dot.classList.toggle("active", isActive);

    dot.setAttribute("aria-pressed", isActive ? "true" : "false");

  });

}



function goToSlide(i) {

  currentSlide = i;

  showSlide(currentSlide);

}



function nextSlide() {

  currentSlide = (currentSlide + 1) % slidesFull.length;

  showSlide(currentSlide);

}



function prevSlide() {

  currentSlide = (currentSlide - 1 + slidesFull.length) % slidesFull.length;

  showSlide(currentSlide);

}













document.addEventListener("DOMContentLoaded",()=>{if(window.AOS)AOS.init({duration:900,once:true,offset:40});initDesktopDropdowns();initMobileMenu();initAlumniModal();setActiveNav();initNoticeMarquee();});

document.querySelectorAll(".arrow-full").forEach(a=>a.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();a.click();}}));let touchStart=0;const hero=document.querySelector(".hero-full");if(hero){hero.addEventListener("touchstart",e=>touchStart=e.changedTouches[0].clientX,{passive:true});hero.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-touchStart;if(Math.abs(d)>60)d>0?prevSlide():nextSlide();},{passive:true});}



/* <script data-inlined-source="school-road.js"> (original line 23806) */
if (SCHOOL_PAGE === "home") {


(() => {

  const section = document.querySelector('.school-road');

  if (!section) return;

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  const stages = [

    ['Pre-Primary','Nursery, LKG & UKG','Where our youngest learners begin: stories, songs and play in a safe, caring classroom.'],

    ['Primary','Classes 1 to 5','Building strong foundations through reading, numbers, discovery and creative expression.'],

    ['Middle','Classes 6 to 8','Growing curiosity, confidence and independence through learning and collaboration.'],

    ['Secondary','Classes 9 and 10','Developing deeper understanding, purposeful study habits and confidence for the next chapter.']

  ];

  const galleryPhotos = [...document.querySelectorAll('.slides-full .slide-full')].map(image => image.currentSrc || image.src);

  

  const stageArt={

    "Pre-Primary":"images/preprimary-globe-red-uniform.png",

    "Primary":"images/ChatGPT Image Oct 31, 2026, 02_34_35 PM-uniform.png",

    "Middle":"images/middle-collaboration-uniform.png",

    "Secondary":"images/high-achiever-uniform.png"

  };

  const host = section.querySelector('.school-road-stages');

  stages.forEach(([stage,range,description],i) => {

    const row=document.createElement('div');row.className='school-road-row';row.dataset.stage=stage;

    const photos = [[galleryPhotos[0],'School campus'],[galleryPhotos[1],'School gathering'],[galleryPhotos[2],'School community']];

    row.innerHTML=`<article class="school-road-card${stageArt[stage] ? ' has-grade-art' : ''}">${stageArt[stage] ? `<div class="school-road-art"><img src="${stageArt[stage]}" alt="${stage} learning activities"></div>` : ''}<div class="school-road-gallery" role="region" aria-label="${stage} school photographs"><div class="school-road-slides">${[...photos,photos[0]].map(([src,alt])=>`<img src="${src}" alt="${alt}" loading="lazy" draggable="false">`).join('')}</div><button type="button" class="school-road-arrow prev" aria-label="Previous ${stage} photograph">&#8249;</button><button type="button" class="school-road-arrow next" aria-label="Next ${stage} photograph">&#8250;</button></div><div class="school-road-card-content"><small>${range}</small><h3>${stage}</h3><p>${description}</p><button type="button" class="school-road-explore" data-stage="${stage}" aria-label="Explore ${stage}">Explore &rarr;</button></div></article><span class="school-road-number" aria-hidden="true">${i+1}</span>`;

    host.append(row);

    const gallery=row.querySelector('.school-road-gallery'),strip=row.querySelector('.school-road-slides');

    let index=0,timer,hover=false,focus=false,visible=false,paused=reduced.matches,touchX=0,resetTimer;

    function schedule(){clearInterval(timer);if(visible&&!hover&&!focus&&!paused&&!document.hidden)timer=setInterval(()=>move(1),4500)}

    function move(direction){clearTimeout(resetTimer);if(index===3){strip.style.transition='none';index=0;strip.style.transform='translateX(0)';void strip.offsetWidth;}strip.style.transition=reduced.matches?'none':'';index=direction<0?(index+2)%3:index+1;strip.style.transform=`translateX(-${index*100}%)`;if(index===3)resetTimer=setTimeout(()=>{strip.style.transition='none';index=0;strip.style.transform='translateX(0)'},reduced.matches?0:680);schedule()}

    row.querySelector('.prev').onclick=()=>move(-1);row.querySelector('.next').onclick=()=>move(1);

    gallery.addEventListener('mouseenter',()=>{hover=true;schedule()});gallery.addEventListener('mouseleave',()=>{hover=false;schedule()});gallery.addEventListener('focusin',()=>{focus=true;schedule()});gallery.addEventListener('focusout',e=>{if(!gallery.contains(e.relatedTarget)){focus=false;schedule()}});

    gallery.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;hover=true;schedule()},{passive:true});gallery.addEventListener('touchend',e=>{const delta=e.changedTouches[0].clientX-touchX;hover=false;if(Math.abs(delta)>45)move(delta<0?1:-1);else schedule()},{passive:true});

    new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule()},{threshold:.15}).observe(gallery);document.addEventListener('visibilitychange',schedule);reduced.addEventListener('change',()=>{paused=reduced.matches;schedule()});

  });

  const body=section.querySelector('.school-road-body'),svg=section.querySelector('svg'),base=section.querySelector('.school-road-dotted'),progress=section.querySelector('.school-road-progress'),marker=section.querySelector('.school-road-marker'),rows=[...host.children];let length=0,queued=false;

  // ROAD DECORATIONS: change these two colors, or the sizes below, to customize.
  // Decorative SVG only; never captures clicks or appears in screen-reader content.
  const accentLayer=document.createElementNS('http://www.w3.org/2000/svg','g');
  accentLayer.setAttribute('aria-hidden','true');
  accentLayer.style.pointerEvents='none';
  svg.insertBefore(accentLayer,base);
  const sparkShapes=[
    '<path d="M0-7 2-2 7 0 2 2 0 7-2 2-7 0-2-2Z"/>',
    '<circle r="5"/>',
    '<path d="M-5 0H5M0-5V5"/>',
    '<path d="M0-6 6 5H-6Z"/>'
  ];
  const schoolSketches=[
    '<path d="m-30-12 60-13-19 48-14-20-27-15 40-3-13 18M11 23 4 9"/><path d="M-35 4c-34-5-35 24-14 23 20-2 16-21-2-17-12 3-17 18-32 16" stroke-dasharray="3 6"/>',
    '<path d="M0-17c-10-8-23-9-36-6v45c14-4 25-3 36 5 11-8 22-9 36-5v-45c-13-3-26-2-36 6Zm0 0v44M-28-12l19 4M-28-2l19 4M-28 8l19 4M9-8l19-4M9 2l19-4M9 12l19-4"/>',
    '<circle r="28"/><circle r="33" stroke-dasharray="1 7"/><path d="m12-19-7 24-17 14 7-24Z M-5-5 5 5M0-40v5M0 35v5M-40 0h5M35 0h5"/>',
    '<path d="M-13 18v-42l38-7v39M-13-13l38-7"/><ellipse cx="-21" cy="20" rx="8" ry="5" transform="rotate(-20 -21 20)"/><ellipse cx="17" cy="10" rx="8" ry="5" transform="rotate(-20 17 10)"/><path d="M-38-9v-17m0 3 8 5"/>'
  ];
  function decorateRoad(){
    accentLayer.replaceChildren();
    const width=body.clientWidth;
    if(width<817)return; // Keep the narrow mobile road clear and readable.
    const bounds=body.getBoundingClientRect();
    const protectedBoxes=[...body.querySelectorAll('.school-road-card,.school-road-art,.school-road-number')].map(el=>{
      const b=el.getBoundingClientRect();return {l:b.left-bounds.left-24,r:b.right-bounds.left+24,t:b.top-bounds.top-24,b:b.bottom-bounds.top+24};
    });
    const placed=[];
    const roadPoints=Array.from({length:160},(_,i)=>base.getPointAtLength(length*i/159));
    function add(shape,x,y,size,color,opacity){
      if(x-size<0||x+size>width||y-size<0||y+size>body.clientHeight||protectedBoxes.some(b=>x+size>b.l&&x-size<b.r&&y+size>b.t&&y-size<b.b)||placed.some(p=>Math.hypot(x-p.x,y-p.y)<size+p.size+18)||roadPoints.some(p=>Math.hypot(x-p.x,y-p.y)<size+14))return;
      const g=document.createElementNS('http://www.w3.org/2000/svg','g');
      g.setAttribute('transform',`translate(${x} ${y})`);g.setAttribute('fill','none');g.setAttribute('stroke',color);g.setAttribute('stroke-width','1.6');g.setAttribute('stroke-linecap','round');g.setAttribute('stroke-linejoin','round');g.setAttribute('opacity',opacity);g.innerHTML=shape;accentLayer.append(g);
      placed.push({x,y,size});
    }
    rows.forEach((row,i)=>{
      // Four tiny sparks follow each bend with alternating offsets from the road.
      for(let j=0;j<4;j++){
        const p=base.getPointAtLength(length*(i+(j+1)/5)/rows.length);
        add(sparkShapes[(i+j)%4],p.x+(j%2?48:-48),p.y,9,j%2?'#800000':'#c79a3b',.65);
      }
      // One larger sketch in the empty side of each alternating card row.
      const x=width*(i%2===0?.83:.17),y=row.offsetTop+row.offsetHeight*.73;
      add(schoolSketches[i%4],x,y,86,i%2?'#800000':'#c79a3b',.48);
    });
    // CANVAS DOODLE DENSITY: smaller spacing adds more sketches in free areas.
    const extraSketches=[
      '<path d="m-25 20 37-44 12 10-37 44-17 6Zm3 1 12 10M6-17l12 10M-27 32l6-2"/>',
      '<rect x="-34" y="-12" width="68" height="24" rx="3" transform="rotate(-25)"/><path d="m-22 2 3 6m6-10 5 10m5-14 3 6m6-10 5 10m5-14 3 6"/>',
      '<circle cy="-6" r="22"/><path d="M-10 14v12h20V14M-10 31h20M-5 36H5M-7 14V-4l7 5 7-5v18M0-40v-8M-32-29l-6-6M32-29l6-6M-34-6h-8M34-6h8"/>',
      '<circle r="26"/><ellipse rx="12" ry="26"/><path d="M-25 0h50M-21-14h42M-21 14h42M-33-5c-2 24 17 43 41 38M0 34v9M-16 44h32"/>',
      '<path d="m0-34 9 23 25 1-20 16 7 25L0 16l-21 15 7-25-20-16 25-1Z"/>',
      '<path d="M-29 5c-14-3-14-22 0-25 2-23 34-25 42-5 22-9 35 23 13 30Z M-15 15l-5 10M4 15l-5 10M23 15l-5 10"/>'
    ];
    const allSketches=[...schoolSketches,...extraSketches],spacing=180;
    let motif=0;
    for(let y=80,row=0;y<body.clientHeight-65;y+=spacing,row++){
      for(let x=75+(row%2)*85;x<width-65;x+=spacing){
        const index=motif++,scale=.7+(index%3)*.12,angle=(index%5-2)*9;
        add(`<g transform="rotate(${angle}) scale(${scale})">${allSketches[index%allSketches.length]}</g>`,x,y,68,index%3===0?'#800000':'#c79a3b',index%3===0?.27:.48);
        add(sparkShapes[index%4],x+72,y+70,9,index%2?'#800000':'#c79a3b',.5);
      }
    }
    // CREAM CANVAS PLUS PATTERN: edit spacing, color and opacity here.
    // Render after doodle placement so every sketch keeps a clear surrounding area.
    const plusSpacing=46,plusSize=5,plusSegments=[];
    for(let y=23;y<body.clientHeight-plusSize;y+=plusSpacing){
      for(let x=23;x<width-plusSize;x+=plusSpacing){
        if(protectedBoxes.some(b=>x+plusSize>b.l&&x-plusSize<b.r&&y+plusSize>b.t&&y-plusSize<b.b)
          ||placed.some(p=>Math.hypot(x-p.x,y-p.y)<p.size+22)
          ||roadPoints.some(p=>Math.hypot(x-p.x,y-p.y)<28))continue;
        plusSegments.push(`M${x-plusSize} ${y}h${plusSize*2}M${x} ${y-plusSize}v${plusSize*2}`);
      }
    }
    const plusPattern=document.createElementNS('http://www.w3.org/2000/svg','path');
    plusPattern.setAttribute('d',plusSegments.join(' '));
    plusPattern.setAttribute('fill','none');
    plusPattern.setAttribute('stroke','#c79a3b');
    plusPattern.setAttribute('stroke-width','1.8');
    plusPattern.setAttribute('stroke-linecap','round');
    plusPattern.setAttribute('opacity','.42');
    accentLayer.prepend(plusPattern);
  }

  function geometry(){const width=body.clientWidth,height=body.clientHeight;svg.setAttribute('viewBox',`0 0 ${width} ${height}`);let d;if(width<817){d=`M 23 0 L 23 ${height}`;}else{d=`M ${width*.5} 0`;rows.forEach((row,i)=>{const top=row.offsetTop,end=top+row.offsetHeight,x=width*(i%2===0?.74:.26);d+=` C ${x} ${top+row.offsetHeight*.25}, ${x} ${top+row.offsetHeight*.75}, ${width*.5} ${end}`;});}base.setAttribute('d',d);progress.setAttribute('d',d);length=base.getTotalLength();progress.style.strokeDasharray=String(length);update();}

  function update(){queued=false;const rect=body.getBoundingClientRect(),fraction=Math.max(0,Math.min(1,(innerHeight*.55-rect.top)/rect.height));const point=base.getPointAtLength(length*fraction);marker.setAttribute('transform',`translate(${point.x} ${point.y})`);progress.style.strokeDashoffset=String(length*(1-fraction));let current=0;rows.forEach((row,i)=>{const reached=point.y>=row.offsetTop+row.offsetHeight*.12;row.classList.toggle('is-reached',reached);if(reached)current=i});rows.forEach((row,i)=>row.classList.toggle('is-current',i===current));}

  window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});new ResizeObserver(()=>{geometry();decorateRoad()}).observe(body);geometry();decorateRoad();
  body.querySelectorAll('img').forEach(img=>img.addEventListener('load',decorateRoad,{once:true}));

})();




}

/* <script> (original line 23974) */
if (SCHOOL_PAGE === "home") {
/* Focus & Dim filter — all cards stay visible; clicking spotlights the matching card */

document.querySelectorAll('.space-filter').forEach(button=>{button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>{const grid=document.querySelector('.spaces-grid');const wasActive=button.classList.contains('is-active');document.querySelectorAll('.space-filter').forEach(b=>{b.classList.remove('is-active');b.setAttribute('aria-pressed','false');});grid.classList.remove('has-focus');document.querySelectorAll('.space-card').forEach(card=>card.classList.remove('is-focused'));if(!wasActive){button.classList.add('is-active');button.setAttribute('aria-pressed','true');const key=button.dataset.interest;const focused=grid.querySelector(`.space-card[data-tags~="${key}"]`);if(focused){grid.classList.add('has-focus');focused.classList.add('is-focused');}}});});document.querySelectorAll('[data-login-close]').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#demo-login').hidden=true;document.body.classList.remove('login-open')}));document.addEventListener('keydown',event=>{if(event.key==='Escape'){document.querySelector('#demo-login').hidden=true;document.body.classList.remove('login-open')}});document.querySelector('.demo-login-submit')?.addEventListener('click',event=>{event.preventDefault();document.querySelector('.demo-login-note').textContent='Demo preview only. No account is connected.'});
}

/* <script> (original line 23976) */
if (SCHOOL_PAGE === "home") {


// Add CSS for the explore button

(function(){

  var s = document.createElement('style');

  s.textContent = '.school-road-explore{margin-top:14px;padding:8px 20px;background:var(--color-primary);color:#fff;border:none;border-radius:20px;font-size:0.9rem;font-weight:600;cursor:pointer;transition:background .2s;}.school-road-explore:hover{background:var(--color-primary-dark);}';

  document.head.appendChild(s);

})();



// Handle explore button clicks on school-road cards

document.addEventListener('click', function(e) {

  if (!e.target.classList.contains('school-road-explore')) return;

  var stage = e.target.getAttribute('data-stage');

  if (stage === 'Pre-Primary') { window.location.href = 'pre-primary.html'; return; }

  if (stage === 'Primary') { window.location.href = 'primary.html'; return; }

  if (stage === 'Middle') { window.location.href = 'middle.html'; return; }

  if (stage === 'Secondary') { window.location.href = 'high.html'; return; }

});


}

/* <script> (original line 24072) */
if (SCHOOL_PAGE === "home") {


(() => {

  const spacesSection=document.getElementById('spaces');

  if(spacesSection&&!document.getElementById('events-section')){

    const eventsSection=document.createElement('section');

    eventsSection.className='events-section';eventsSection.id='events-section';

    eventsSection.innerHTML=`<div class="events-shell"><h2 class="events-main-title">Pre-Primary calendar.</h2><p class="events-intro">Official dated events from the Pre-Primary monthly planner.</p><div class="events-section-switch" role="group" aria-label="Choose school section"><button class="event-section-choice is-active" data-event-section="preprimary" type="button">Pre-Primary</button><button class="event-section-choice" data-event-section="primary" type="button">Primary</button><button class="event-section-choice" data-event-section="secondary" type="button">Secondary</button></div><div class="events-layout"><aside class="events-calendar" aria-label="Pre-Primary calendar"><div class="events-calendar-header"><button class="events-month-arrow" type="button" aria-label="Previous month">‹</button><span></span><button class="events-month-arrow" type="button" aria-label="Next month">›</button></div><div class="events-weekdays"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div><div class="events-days"></div></aside><div class="events-list"><div class="events-controls" role="group" aria-label="Filter events"><button class="event-filter is-active" data-event-filter="all" type="button">All</button><button class="event-filter" data-event-filter="academics" type="button">Academics</button><button class="event-filter" data-event-filter="holiday" type="button">Holidays</button><button class="event-filter" data-event-filter="special" type="button">Special days</button><button class="event-filter" data-event-filter="activity" type="button">Activities</button></div><h3 class="events-list-title">Events this month</h3><div class="events-list-items"></div><p class="events-note">Dates in this calendar are tentative and may be revised if necessary.</p></div></div></div>`;

    const founderSection=document.getElementById('founder');

    (founderSection||spacesSection).insertAdjacentElement('afterend',eventsSection);

    // Every dated planner item. Pre-Board I/II and Geography Awareness Week
    // remain unmarked because their source dates are not available.
    const prePrimaryEvents=[
      ['2027-01-04','Reopening','academics'],['2027-01-15','Makar Sankranti','holiday'],['2027-01-26','Republic Day','holiday'],['2027-02-08','Term III Examination','academics','2027-02-12'],['2027-02-15','Term III Examination','academics','2027-02-20'],
      ['2027-03-04','Holi','holiday'],['2027-03-19','Gudi Padwa','holiday'],['2027-03-21','Id-ul-Fitr','holiday'],['2027-03-21','World Poetry Day','special'],['2027-03-23','Reopening (LKG - X)','academics'],['2027-03-23','Shaheed Diwas','special'],['2027-03-26','Ram Navami','holiday'],['2027-03-27','World Theatre Day','special'],['2027-03-30','First Day (Nursery)','academics'],['2027-03-31','Mahavir Jayanti','holiday'],
      ['2027-04-02','Holy Thursday','holiday'],['2027-04-03','Good Friday','holiday'],['2027-04-05','Easter Sunday','holiday'],['2027-04-07','World Health Day','special'],['2027-04-14','Dr. Ambedkar Jayanti','holiday'],['2027-04-22','Earth Day','special'],['2027-04-23','English Language Day','special'],['2027-04-29','International Dance Day','special'],
      ['2027-05-01','Maharashtra Day','holiday'],['2027-05-02','Academic Break (Nursery - VIII)','holiday','2027-05-09'],['2027-05-27','Bakrid','holiday'],
      ['2027-06-03','World Bicycle Day','special'],['2027-06-05','Environment Day','special'],['2027-06-08','Reopening (Nursery - X)','academics'],['2027-06-21','International Yoga Day','special'],['2027-06-21','World Music Day','special'],['2027-06-26','Muharram','holiday'],
      ['2027-07-01','National Doctor\'s Day','special'],['2027-07-21','Guru Purnima','special'],['2027-07-27','Term I Examination','academics','2027-07-31'],
      ['2027-08-01','Term I Examination','academics'],['2027-08-03','Term I Examination','academics','2027-08-07'],['2027-08-12','International Youth Day','special'],['2027-08-15','Independence Day','holiday'],['2027-08-26','Id-e-Milad','holiday'],['2027-08-28','Raksha Bandhan','special'],['2027-08-29','National Sports Day','special'],
      ['2027-09-04','Janmashtami','holiday'],['2027-09-05','Teachers\' Day','special'],['2027-09-08','International Literacy Day','special'],['2027-09-14','Ganesh Chaturthi','holiday'],['2027-09-14','Hindi Diwas','special'],['2027-09-21','International Peace Day','special'],['2027-09-28','Patron\'s Day Floral Tribute','special'],
      ['2027-10-02','Gandhi Jayanti','holiday'],['2027-10-10','World Mental Health Day','special'],['2027-10-19','Dussehra','holiday'],['2027-10-19','Term II Examination','academics','2027-10-24'],['2027-10-24','United Nations Day','special'],['2027-10-26','Term II Examination','academics','2027-10-31'],
      ['2027-11-02','Term II Examination','academics','2027-11-04'],['2027-11-06','Diwali Holidays Begin','holiday'],['2027-11-08','Diwali','holiday'],['2027-11-16','Reopening','academics'],['2027-11-20','Children\'s Day Celebration','special'],['2027-11-24','Guru Nanak\'s Jayanti','holiday'],['2027-11-26','Constitution Day of India','special'],
      ['2027-12-10','Human Rights Day','special'],['2027-12-22','National Mathematics Day','special'],['2027-12-23','Christmas Holidays Begin','holiday'],['2027-12-25','Christmas','holiday']
    ].map(([date,title,type,end])=>({date,title,type,end:end||date}));
    const primaryEvents=[
      ['2027-01-01','Hindi Funny Act','activity','2027-01-02'],['2027-01-01','English Poetry','activity','2027-01-02'],['2027-01-03','Shape Safari','activity','2027-01-05'],['2027-01-03','Radio Jockey','activity','2027-01-05'],['2027-01-04','Reopening','academics'],['2027-01-04','Fraction Fun','activity'],['2027-01-15','Makar Sankranti','holiday'],['2027-01-26','Republic Day','holiday'],
      ['2027-02-08','Term III Examination','academics','2027-02-12'],['2027-02-15','Term III Examination','academics','2027-02-20'],
      ['2027-03-04','Holi','holiday'],['2027-03-19','Gudi Padwa','holiday'],['2027-03-21','Id-ul-Fitr','holiday'],['2027-03-21','World Poetry Day','special'],['2027-03-23','Reopening (LKG - X)','academics'],['2027-03-23','Shaheed Diwas','special'],['2027-03-26','Ram Navami','holiday'],['2027-03-27','World Theatre Day','special'],['2027-03-30','First Day (Nursery)','academics'],['2027-03-31','Mahavir Jayanti','holiday'],
      ['2027-04-02','Holy Thursday','holiday'],['2027-04-03','Good Friday','holiday'],['2027-04-04','School Holiday','holiday'],['2027-04-05','Easter Sunday','holiday'],['2027-04-07','World Health Day','special'],['2027-04-14','Dr. Ambedkar Jayanti','holiday'],['2027-04-22','Earth Day','special'],['2027-04-23','English Language Day','special'],['2027-04-29','International Dance Day','special'],
      ['2027-05-01','Maharashtra Day','holiday'],['2027-05-02','Academic Break (Nursery - VIII)','holiday','2027-05-09'],['2027-05-27','Bakrid','holiday'],
      ['2027-06-03','World Bicycle Day','special'],['2027-06-05','Environment Day','special'],['2027-06-08','Reopening (Nursery - X)','academics'],['2027-06-18','Music Competition','activity'],['2027-06-21','International Yoga Day','special'],['2027-06-21','World Music Day','special'],['2027-06-22','Yoga Day','activity'],['2027-06-26','Muharram','holiday'],
      ['2027-07-01','National Doctor\'s Day','special'],['2027-07-01','English Storytelling','activity','2027-07-02'],['2027-07-03','Poster Making','activity','2027-07-04'],['2027-07-21','Guru Purnima','special'],['2027-07-27','Term I Examination','academics','2027-07-31'],
      ['2027-08-01','Term I Examination','academics'],['2027-08-03','Term I Examination','academics','2027-08-07'],['2027-08-03','Science Explorer','activity','2027-08-05'],['2027-08-03','Legacy of the Past','activity','2027-08-05'],['2027-08-04','Street Play','activity'],['2027-08-05','Math Blast','activity'],['2027-08-12','International Youth Day','special'],['2027-08-15','Independence Day','holiday'],['2027-08-26','Id-e-Milad','holiday'],['2027-08-28','Raksha Bandhan','special'],['2027-08-29','National Sports Day','special'],
      ['2027-09-01','One Act Plays','activity','2027-09-05'],['2027-09-01','Food Decoration','activity','2027-09-02'],['2027-09-03','Math Scavenger Hunt','activity'],['2027-09-03','Flower Rangoli','activity'],['2027-09-04','Janmashtami','holiday'],['2027-09-04','Hindi News Room','activity'],['2027-09-04','English Dialogue Circle','activity'],['2027-09-05','Teachers\' Day','special'],['2027-09-05','Harvest Activity','activity'],['2027-09-05','English Debate','activity'],['2027-09-08','International Literacy Day','special'],['2027-09-14','Ganesh Chaturthi','holiday'],['2027-09-14','Hindi Diwas','special'],['2027-09-21','International Peace Day','special'],['2027-09-28','Patron\'s Day Floral Tribute','special'],
      ['2027-10-01','Best out of Waste','activity','2027-10-02'],['2027-10-01','Marathi Speaking Skill','activity','2027-10-02'],['2027-10-02','Gandhi Jayanti','holiday'],['2027-10-03','Junior Chef Fiesta','activity'],['2027-10-03','Science Quiz','activity','2027-10-05'],['2027-10-04','Mini Museum','activity'],['2027-10-05','Wings of Change','activity'],['2027-10-05','Hindi Elocution','activity'],['2027-10-10','World Mental Health Day','special'],['2027-10-19','Dussehra','holiday'],['2027-10-19','Term II Examination','academics','2027-10-24'],['2027-10-24','United Nations Day','special'],['2027-10-26','Term II Examination','academics','2027-10-31'],
      ['2027-11-02','Term II Examination','academics','2027-11-04'],['2027-11-05','Diwali Celebration & Traditional Day','activity'],['2027-11-06','Diwali Holidays Begin','holiday'],['2027-11-08','Diwali','holiday'],['2027-11-16','Reopening','academics'],['2027-11-21','Children\'s Day Celebration','activity'],['2027-11-24','Guru Nanak\'s Jayanti','holiday'],['2027-11-26','Constitution Day of India','special'],
      ['2027-12-10','Human Rights Day','special'],['2027-12-22','National Mathematics Day','special'],['2027-12-23','Christmas Holidays Begin','holiday'],['2027-12-25','Christmas','holiday']
    ].map(([date,title,type,end])=>({date,title,type,end:end||date}));
    const secondaryEvents=[
      ['2027-01-04','Reopening','academics'],['2027-01-15','Makar Sankranti','holiday'],['2027-01-26','Republic Day','holiday'],
      ['2027-02-08','Term III Examination','academics','2027-02-12'],['2027-02-15','Term III Examination','academics','2027-02-20'],
      ['2027-03-04','Holi','holiday'],['2027-03-19','Gudi Padwa','holiday'],['2027-03-21','Id-ul-Fitr','holiday'],['2027-03-21','World Poetry Day','special'],['2027-03-23','Reopening (LKG - X)','academics'],['2027-03-23','Shaheed Diwas','special'],['2027-03-26','Ram Navami','holiday'],['2027-03-27','Divine Service','activity'],['2027-03-27','World Theatre Day','special'],['2027-03-30','First Day (Nursery)','academics'],['2027-03-31','Mahavir Jayanti','holiday'],
      ['2027-04-02','Holy Thursday','holiday'],['2027-04-03','Good Friday','holiday'],['2027-04-05','Easter Sunday','holiday'],['2027-04-07','World Health Day','special'],['2027-04-14','Dr. Ambedkar Jayanti','holiday'],['2027-04-22','Earth Day','special'],['2027-04-23','English Language Day','special'],['2027-04-29','International Dance Day','special'],
      ['2027-05-01','Maharashtra Day','holiday'],['2027-05-02','Academic Break (Nursery - VIII)','holiday','2027-05-09'],['2027-05-27','Bakrid','holiday'],
      ['2027-06-03','World Bicycle Day','special'],['2027-06-05','Environment Day','special'],['2027-06-08','Reopening (Nursery - X)','academics'],['2027-06-12','Environment Day Activity','activity'],['2027-06-17','Bicycle Rally','activity'],['2027-06-19','Music Competition','activity'],['2027-06-21','International Yoga Day','special'],['2027-06-21','World Music Day','special'],['2027-06-22','Yoga Day','activity'],['2027-06-26','Muharram','holiday'],
      ['2027-07-01','National Doctor\'s Day','special'],['2027-07-21','Guru Purnima','special'],['2027-07-27','Term I Examination','academics','2027-07-31'],
      ['2027-08-01','Term I Examination','academics'],['2027-08-03','Term I Examination','academics','2027-08-07'],['2027-08-12','International Youth Day','special'],['2027-08-15','Independence Day','holiday'],['2027-08-26','Id-e-Milad','holiday'],['2027-08-28','Raksha Bandhan','special'],['2027-08-29','National Sports Day','special'],
      ['2027-09-04','Janmashtami','holiday'],['2027-09-05','Teachers\' Day','special'],['2027-09-08','International Literacy Day','special'],['2027-09-10','Idol Making','activity'],['2027-09-14','Ganesh Chaturthi','holiday'],['2027-09-14','Hindi Diwas','special'],['2027-09-21','International Peace Day','special'],['2027-09-28','Patron\'s Day Floral Tribute','special'],
      ['2027-10-02','Gandhi Jayanti','holiday'],['2027-10-10','World Mental Health Day','special'],['2027-10-19','Dussehra','holiday'],['2027-10-19','Term II Examination','academics','2027-10-24'],['2027-10-24','United Nations Day','special'],['2027-10-26','Term II Examination','academics','2027-10-31'],
      ['2027-11-02','Term II Examination','academics','2027-11-04'],['2027-11-06','Diwali Holidays Begin','holiday'],['2027-11-08','Diwali','holiday'],['2027-11-16','Reopening','academics'],['2027-11-17','Children\'s Day Celebration','activity'],['2027-11-24','Guru Nanak\'s Jayanti','holiday'],['2027-11-26','Constitution Day of India','special'],
      ['2027-12-10','Human Rights Day','special'],['2027-12-22','National Mathematics Day','special'],['2027-12-23','Christmas Holidays Begin','holiday'],['2027-12-25','Christmas','holiday']
    ].map(([date,title,type,end])=>({date,title,type,end:end||date}));
    let events=prePrimaryEvents;
    const calendar=eventsSection.querySelector('.events-calendar'),calendarTitle=calendar.querySelector('.events-calendar-header span'),calendarDays=calendar.querySelector('.events-days'),monthButtons=calendar.querySelectorAll('.events-month-arrow'),listTitle=eventsSection.querySelector('.events-list-title'),listItems=eventsSection.querySelector('.events-list-items'),mainTitle=eventsSection.querySelector('.events-main-title'),intro=eventsSection.querySelector('.events-intro');
    // Calendar opens with the 2027 Pre-Primary schedule, beginning in January.
    let activeSection='preprimary',activeEventFilter='all',calendarMonth=0,calendarYear=2027,selectedEventDate=null;
    const keyForDate=(year,month,day)=>`${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const occursOn=(item,date)=>date>=item.date&&date<=item.end;
    const inVisibleMonth=item=>{const monthStart=keyForDate(calendarYear,calendarMonth,1),monthEnd=keyForDate(calendarYear,calendarMonth+1,0);return item.date<=monthEnd&&item.end>=monthStart;};
    const formatDate=date=>new Intl.DateTimeFormat('en',{month:'short',day:'numeric'}).format(new Date(`${date}T00:00:00`));
    const sectionLabel=section=>({preprimary:'Pre-Primary',primary:'Primary',secondary:'Secondary'})[section]||'Pre-Primary';
    const renderEvents=()=>{let visible=events.filter(item=>selectedEventDate?occursOn(item,selectedEventDate):inVisibleMonth(item));if(activeEventFilter!=='all')visible=visible.filter(item=>item.type===activeEventFilter);visible.sort((a,b)=>a.date.localeCompare(b.date));listTitle.textContent=selectedEventDate?`Events on ${formatDate(selectedEventDate)}`:`Events in ${new Intl.DateTimeFormat('en',{month:'long'}).format(new Date(calendarYear,calendarMonth))}`;listItems.innerHTML=visible.length?visible.map(item=>{const date=new Date(`${item.date}T00:00:00`),month=new Intl.DateTimeFormat('en',{month:'short'}).format(date).toUpperCase(),end=item.end!==item.date?` - ${formatDate(item.end)}`:'',typeLabel=item.type==='academics'?'Academics':item.type==='holiday'?'Holiday':item.type==='activity'?'Activity':'Special day';return `<article class="event-row" data-event-type="${item.type}"><div class="event-date"><small>${month}</small><strong>${date.getDate()}</strong></div><div><h4 class="event-title">${item.title}</h4><p class="event-meta">${typeLabel}${end}</p></div></article>`;}).join(''):`<p class="events-empty">No matching ${sectionLabel(activeSection)} events are scheduled for this selection.</p>`;listItems.scrollTop=0;};
    const renderCalendar=()=>{const firstDay=new Date(calendarYear,calendarMonth,1).getDay(),daysInMonth=new Date(calendarYear,calendarMonth+1,0).getDate(),monthName=new Intl.DateTimeFormat('en',{month:'long'}).format(new Date(calendarYear,calendarMonth));calendarTitle.textContent=`${monthName} ${calendarYear}`;calendar.setAttribute('aria-label',`${monthName} ${calendarYear} calendar`);calendarDays.innerHTML='';for(let i=0;i<firstDay;i++)calendarDays.insertAdjacentHTML('beforeend','<span aria-hidden="true"></span>');for(let day=1;day<=daysInMonth;day++){const dateKey=keyForDate(calendarYear,calendarMonth,day),hasEvent=events.some(item=>occursOn(item,dateKey)),selected=dateKey===selectedEventDate;calendarDays.insertAdjacentHTML('beforeend',`<button type="button" class="calendar-date${hasEvent?' event-day':''}${selected?' is-selected':''}" data-date="${dateKey}" aria-label="Select ${monthName} ${day}, ${calendarYear}">${day}</button>`);}renderEvents();};
    eventsSection.querySelectorAll('.event-section-choice').forEach(button=>button.addEventListener('click',()=>{activeSection=button.dataset.eventSection;events=activeSection==='primary'?primaryEvents:activeSection==='secondary'?secondaryEvents:prePrimaryEvents;const label=sectionLabel(activeSection);mainTitle.textContent=`${label} calendar.`;intro.textContent=`Official dated events from the ${label} monthly planner.`;calendar.setAttribute('aria-label',`${label} calendar`);selectedEventDate=null;activeEventFilter='all';eventsSection.querySelectorAll('.event-section-choice').forEach(item=>item.classList.toggle('is-active',item===button));eventsSection.querySelectorAll('.event-filter').forEach(item=>item.classList.toggle('is-active',item.dataset.eventFilter==='all'));renderCalendar();}));
    eventsSection.querySelectorAll('.event-filter').forEach(button=>button.addEventListener('click',()=>{activeEventFilter=button.dataset.eventFilter;eventsSection.querySelectorAll('.event-filter').forEach(item=>item.classList.toggle('is-active',item===button));renderEvents();}));

    monthButtons[0].addEventListener('click',()=>{calendarMonth--;if(calendarMonth<0){calendarMonth=11;calendarYear--;}selectedEventDate=null;renderCalendar();});

    monthButtons[1].addEventListener('click',()=>{calendarMonth++;if(calendarMonth>11){calendarMonth=0;calendarYear++;}selectedEventDate=null;renderCalendar();});

    calendarDays.addEventListener('click',event=>{const dateButton=event.target.closest('.calendar-date');if(!dateButton)return;selectedEventDate=dateButton.dataset.date;renderCalendar();});

    renderCalendar();

  }

  if(!document.getElementById('desktop-nav-action-compact')){const compactNavStyle=document.createElement('style');compactNavStyle.id='desktop-nav-action-compact';compactNavStyle.textContent='@media(min-width:1201px){.nav-container.sticky .nav-actions{justify-self:end!important;gap:8px!important;padding:0 8px!important;transform:none!important}.nav-container.sticky .lang-switcher-btn{min-width:95px!important;height:auto!important;padding:8px 16px!important;font-size:.85rem!important}.nav-container.sticky .alumni-btn{min-width:0!important;height:auto!important;padding:10px 20px!important;font-size:15px!important}}';document.head.append(compactNavStyle);}

})();


}

/* <script> (original line 25034) */
if (SCHOOL_PAGE === "spg-spaces") {

(function () {
  /*
    SPACES PAGE PHOTOS — EDIT IMAGE PATHS HERE.
    For each space, change `photo` for the large feature image and edit `thumbs`
    for its small gallery images. Keep all image files in the images/ folder.
  */
  var SPACES = [
    {
      key: 'science',
      name: 'Science Lab',
      cat: 'Physics · Chemistry · Biology',
      desc: 'Physics, Chemistry and Biology labs equipped for practical work. Students across the school use these labs for hands-on experiments and to build a foundation in the natural sciences.',
      features: [
        'Separate labs for Physics, Chemistry and Biology',
        'Practical work for all science subjects',
        'Available to students from the primary stage onwards'
      ],
      // Science Lab: main image and gallery thumbnails
      photo: 'images/sc1.jpg',
      thumbs: ['images/sc1.jpg', 'images/sc2.jpg']
    },
    {
      key: 'computers',
      name: 'Computer Lab',
      cat: 'Technology · Digital learning',
      desc: 'Computer studies are part of the curriculum from Std I. The labs give every student access to computers for academic and skill-building work throughout the school year.',
      features: [
        'Computer studies from Std I',
        'Available to all year groups',
        'Supports both academic and practical ICT skills'
      ],
      // Computer Lab: main image and gallery thumbnails
      photo: 'images/cl1.jpg',
      thumbs: ['images/cl1.jpg', 'images/cl2.jpg']
    },
    {
      key: 'library',
      name: 'Library',
      cat: 'Reading · Research · Exploration',
      desc: 'A well-equipped library on the first floor, open for reading, research and exploration. Students are encouraged to use the library regularly to build reading habits and support their studies.',
      features: [
        'Located on the first floor',
        'Wide range of books and reference materials',
        'Open for reading, learning and exploration'
      ],
      // Library: main image and gallery thumbnails
      photo: 'images/lb1.jpg',
      thumbs: ['images/lb1.jpg','images/lb2.jpg']
    },
    {
      key: 'arts',
      name: 'Performing Arts',
      cat: 'Art · Singing · Performances',
      desc: 'Art and music are integral to school life. Students participate in art classes, singing, and are part of the school\'s annual performances and cultural programmes held on stage.',
      features: [
        'Art and craft as part of the curriculum',
        'Singing and music activities',
        'Annual Day and cultural stage performances'
      ],
      // Performing Arts: main image and gallery thumbnails
      photo: 'images/sa2.jpg',
      thumbs: ['images/sa1.jpg','images/sa2.jpg']
    },
    {
      key: 'visualarts',
      name: 'Visual Arts',
      cat: 'Drawing · Painting · Craft',
      desc: 'Visual Arts gives students opportunities to explore drawing, painting, craft and creative expression while developing observation, imagination and practical artistic skills.',
      features: [
        'Drawing and painting activities',
        'Creative art and craft projects',
        'Opportunities to display student artwork'
      ],
      /*
        VISUAL ARTS IMAGES — EDIT HERE.
        Replace `photo` for the large image and edit `thumbs` for gallery images.
        Keep the replacement files inside the images/ folder.
      */
      photo: 'images/va1.jpg',
      thumbs: ['images/va1.jpg', 'images/va2.jpg']
    },
    {
      key: 'sports',
      name: 'Games and Sports',
      cat: 'Football · Basketball · Badminton · and more',
      desc: 'Sports are an integral part of school life. Students play and train in football, basketball, roll ball, badminton, table tennis and skating. The school participates in inter-school, district, zonal, regional and national competitions.',
      features: [
        'Football, basketball, roll ball, badminton, table tennis and skating',
        'Inter-school, district, zonal and national competitions',
        'Training on the two-acre playground',
        'First aid available; students trained by qualified coaches'
      ],
      // Games and Sports: main image and gallery thumbnails
      photo: 'images/sp1.jpg',
      thumbs: ['images/sp1.jpg','images/sp2.jpg','images/sp3.jpg']
    },
    {
      key: 'karate',
      name: 'Karate',
      cat: 'Discipline · Fitness · Competition',
      desc: 'Karate is part of the curriculum from Std I, making it a core part of every student\'s school life. Students have won gold and silver medals at CISCE Zonal Karate Championships.',
      features: [
        'Part of the curriculum from Std I',
        'Gold medals at CISCE Zonal Karate Championship',
        'Silver medals at CISCE Zonal Karate Championship'
      ],
      // Karate: main image and gallery thumbnails
      photo: 'images/k2.jpg',
      thumbs: ['images/k1.jpg','images/k2.jpg']
    },
    {
      key: 'campus',
      name: 'Seven-Acre Campus',
      cat: 'Green campus · Orchards · Playground',
      desc: 'The school is spread across seven acres with orchards, flower gardens and a two-acre playground. The open, green campus gives students space to move, play and connect with nature alongside their studies.',
      features: [
        'Seven-Acre Campus in Dhanori, Pune',
        'Orchards and flower gardens',
        'Two-acre playground'
      ],
      // Seven-Acre Campus: main image and gallery thumbnails
      photo: 'images/gc2.jpg',
      thumbs: ['images/127.jpeg', 'images/gc2.jpg']
    }
  ];

  var section    = document.getElementById('spg-spaces');
  var switcher   = document.getElementById('spaces-switcher');
  var mainImg    = document.getElementById('spaces-main-img');
  var mainWrap   = document.getElementById('spaces-main-wrap');
  var thumbsEl   = document.getElementById('spaces-thumbs');
  var nameEl     = document.getElementById('spaces-name');
  var catEl      = document.getElementById('spaces-cat');
  var descEl     = document.getElementById('spaces-desc');
  var featEl     = document.getElementById('spaces-features');
  var exploreEl  = document.getElementById('spaces-explore-strip');
  var lightbox   = document.getElementById('spaces-lightbox');
  var lbImg      = document.getElementById('spaces-lb-img');
  var lbClose    = document.getElementById('spaces-lb-close');
  var zoomBtn    = document.getElementById('spaces-zoom-btn');

  var current    = SPACES[0];

  function spaceByKey(key) {
    for (var i = 0; i < SPACES.length; i++) {
      if (SPACES[i].key === key) return SPACES[i];
    }
    return null;
  }

  function renderPanel(sp) {
    current = sp;
    mainImg.src = sp.photo;
    mainImg.alt = sp.name;
    nameEl.textContent = sp.name;
    catEl.textContent = sp.cat;
    descEl.textContent = sp.desc;
    featEl.innerHTML = sp.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('');
    renderThumbs(sp);
    updateExplore();
  }

  function renderThumbs(sp) {
    thumbsEl.innerHTML = '';
    sp.thumbs.forEach(function (src, i) {
      var img = document.createElement('img');
      img.className = 'spaces-thumb' + (i === 0 ? ' is-active' : '');
      img.src = src;
      img.alt = sp.name;
      img.addEventListener('click', function () {
        mainImg.src = src;
        thumbsEl.querySelectorAll('.spaces-thumb').forEach(function (t) { t.classList.remove('is-active'); });
        img.classList.add('is-active');
      });
      thumbsEl.appendChild(img);
    });
  }

  function renderExplore() {
    exploreEl.innerHTML = '';
    SPACES.forEach(function (sp) {
      var item = document.createElement('div');
      item.className = 'spaces-explore-item' + (sp.key === current.key ? ' is-current' : '');
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', sp.name);
      item.dataset.spaceKey = sp.key;
      var img = document.createElement('img');
      img.className = 'spaces-explore-img';
      img.src = sp.photo;
      img.alt = sp.name;
      var label = document.createElement('span');
      label.className = 'spaces-explore-name';
      label.textContent = sp.name;
      item.appendChild(img);
      item.appendChild(label);
      item.addEventListener('click', function () { selectSpace(sp.key); });
      item.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectSpace(sp.key); } });
      exploreEl.appendChild(item);
    });
  }

  function updateExplore() {
    var items = exploreEl.querySelectorAll('.spaces-explore-item');
    items.forEach(function (item) {
      item.classList.toggle('is-current', item.dataset.spaceKey === current.key);
    });
  }

  function updatePills() {
    switcher.querySelectorAll('.spaces-pill').forEach(function (btn) {
      var active = btn.dataset.spaceKey === current.key;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });
  }

  function selectSpace(key) {
    var sp = spaceByKey(key);
    if (!sp) return;
    renderPanel(sp);
    updatePills();
    updateExplore();
    try { sessionStorage.setItem('dmts_space', key); } catch (e) {}
  }

  function openLightbox() {
    lbImg.src = mainImg.src;
    lbImg.alt = mainImg.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  /* pill clicks */
  switcher.addEventListener('click', function (e) {
    var btn = e.target.closest('.spaces-pill');
    if (!btn) return;
    selectSpace(btn.dataset.spaceKey);
  });

  /* zoom / lightbox */
  mainWrap.addEventListener('click', function (e) {
    if (e.target === zoomBtn || e.target.closest('.spaces-zoom-btn')) return;
    openLightbox();
  });
  zoomBtn.addEventListener('click', openLightbox);
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  /* activate on hash change — read sessionStorage for the target space */
  function onShow() {
    var key = '';
    try { key = sessionStorage.getItem('dmts_space') || ''; } catch (e) {}
    var sp = spaceByKey(key) || SPACES[0];
    renderPanel(sp);
    renderExplore();
    updatePills();
  }

  /* watch for the section becoming visible */
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.type === 'attributes' && m.attributeName === 'hidden') {
        if (!section.hidden) onShow();
      }
    });
  });
  observer.observe(section, { attributes: true });

  /* also run once if already visible at page load */
  if (!section.hidden) onShow();
  else {
    /* initial render so pills/explore exist before first visit */
    renderPanel(SPACES[0]);
    renderExplore();
  }
}());

}

/* <script> (original line 26812) */
if (SCHOOL_PAGE === "spg-conduct") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-conduct .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



  /* ── Expand all / Collapse all ── */

  var expandBtn = document.getElementById('coc-expand-all');

  var collapseBtn = document.getElementById('coc-collapse-all');

  if (expandBtn) {

    expandBtn.addEventListener('click', function() {

      document.querySelectorAll('#spg-conduct details.coc-details').forEach(function(d) { d.open = true; });

    });

  }

  if (collapseBtn) {

    collapseBtn.addEventListener('click', function() {

      document.querySelectorAll('#spg-conduct details.coc-details').forEach(function(d) { d.open = false; });

    });

  }



})();


}

/* <script> (original line 27294) */
if (SCHOOL_PAGE === "spg-discipline") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-discipline .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



  /* ── Expand all / Collapse all ── */

  var expandBtn = document.getElementById('disc-expand-all');

  var collapseBtn = document.getElementById('disc-collapse-all');

  if (expandBtn) {

    expandBtn.addEventListener('click', function() {

      document.querySelectorAll('#spg-discipline details.coc-details').forEach(function(d) { d.open = true; });

    });

  }

  if (collapseBtn) {

    collapseBtn.addEventListener('click', function() {

      document.querySelectorAll('#spg-discipline details.coc-details').forEach(function(d) { d.open = false; });

    });

  }



})();


}

/* <script> (original line 27946) */
if (SCHOOL_PAGE === "spg-timings") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-timings .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 28746) */
if (SCHOOL_PAGE === "spg-curriculum") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-curriculum .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 29384) */
if (SCHOOL_PAGE === "spg-subjects") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-subjects .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 30078) */
if (SCHOOL_PAGE === "spg-exams") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-exams .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 30748) */
if (SCHOOL_PAGE === "spg-scholastics") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-scholastics .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 31248) */
if (SCHOOL_PAGE === "spg-coscholastics") {


(function(){

  'use strict';



  /* ── Fade-in on scroll ── */

  var fadeItems = document.querySelectorAll('#spg-coscholastics .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 31904) */
if (SCHOOL_PAGE === "spg-achievements") {


(function(){

  'use strict';



  /* ── Fade-in on scroll only — no counting animation per design spec ── */

  var fadeItems = document.querySelectorAll('#spg-achievements .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 33500) */
if (SCHOOL_PAGE === "spg-admissions") {


(function(){

  'use strict';



  /* ── Fade-in on scroll — scoped to #spg-admissions ── */

  var fadeItems = document.querySelectorAll('#spg-admissions .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script id="magazine-reader-script"> (original line 34887) */
if (SCHOOL_PAGE === "spg-magazine") {

(function () {
  "use strict";

  /*
   * ADD MORE MAGAZINES HERE:
   * 1. Copy the PDF and a cover image into the existing images/ folder.
   * 2. Duplicate one object below and update title, issue, description, pdf, cover and pages.
   * 3. For offline file:// page flipping, export pages as prefix-01.jpg, prefix-02.jpg, etc.
   *    Then set pageImagePrefix to "images/prefix-". If omitted, the hosted site uses PDF.js.
   * The selection card and live reader menu are generated automatically.
   */
  var MAGAZINES = [
    {
      title: "Theophilian Trailblazer",
      issue: "Edition 06 - October 2026",
      description: "Rising with renewed energy - stories, reflections and achievements from our senior school community.",
      pdf: "images/theophilian-trailblazer-october-2026.pdf",
      cover: "images/theophilian-trailblazer-cover.jpg",
      pageImagePrefix: "images/theophilian-trailblazer-page-",
      pages: 28
    },
    {
      title: "Junior Trailblazers",
      issue: "Issue 13 - October 2026",
      description: "A vibrant collection of celebrations, classroom experiences and creative work from our junior learners.",
      pdf: "images/junior-trailblazers-october-2026.pdf",
      cover: "images/junior-trailblazers-cover.jpg",
      pageImagePrefix: "images/junior-trailblazers-page-",
      pages: 62
    }
  ];

  var root = document.getElementById("spg-magazine");
  if (!root) return;

  var grid = root.querySelector("#magazineEditionGrid");
  var select = root.querySelector("#magazineSelect");
  var stage = root.querySelector("#magBookStage");
  var reader = root.querySelector("#magazineReader");
  var title = root.querySelector("#mag-reader-title");
  var status = root.querySelector("#magReaderStatus");
  var welcome = root.querySelector("#magReaderWelcome");
  var firstBtn = root.querySelector("#magFirstPage");
  var prevBtn = root.querySelector("#magPrevPage");
  var nextBtn = root.querySelector("#magNextPage");
  var lastBtn = root.querySelector("#magLastPage");
  var zoomOutBtn = root.querySelector("#magZoomOut");
  var zoomInBtn = root.querySelector("#magZoomIn");
  var fullscreenBtn = root.querySelector("#magFullscreen");
  var pageInput = root.querySelector("#magPageInput");
  var pageTotal = root.querySelector("#magPageTotal");
  var pdfDoc = null;
  var activeIndex = -1;
  var currentPage = 1;
  var zoom = 1;
  var renderTicket = 0;
  var pdfJsPromise = null;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[character];
    });
  }

  function buildLibrary() {
    grid.innerHTML = MAGAZINES.map(function (magazine, index) {
      return '<article class="mag-card">' +
        '<div class="mag-cover"><img src="' + escapeHtml(magazine.cover) + '" alt="Cover of ' + escapeHtml(magazine.title) + '" loading="lazy"></div>' +
        '<div class="mag-card-copy">' +
          '<div class="mag-issue">' + escapeHtml(magazine.issue) + '</div>' +
          '<h3>' + escapeHtml(magazine.title) + '</h3>' +
          '<p>' + escapeHtml(magazine.description) + '</p>' +
          '<div class="mag-meta"><span><i class="far fa-file-pdf" aria-hidden="true"></i> PDF edition</span><span><i class="far fa-copy" aria-hidden="true"></i> ' + magazine.pages + ' pages</span></div>' +
          '<button type="button" class="mag-read-btn" data-magazine-index="' + index + '"><i class="fas fa-book-reader" aria-hidden="true"></i> Read magazine</button>' +
        '</div>' +
      '</article>';
    }).join("");

    select.innerHTML = '<option value="" selected disabled>Choose a magazine</option>' + MAGAZINES.map(function (magazine, index) {
      return '<option value="' + index + '">' + escapeHtml(magazine.title + " - " + magazine.issue) + '</option>';
    }).join("");
  }

  function loadPdfJs() {
    if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if (pdfJsPromise) return pdfJsPromise;
    pdfJsPromise = new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
      script.onload = function () {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        resolve(window.pdfjsLib);
      };
      script.onerror = function () { reject(new Error("PDF reader library could not be loaded.")); };
      document.head.appendChild(script);
    });
    return pdfJsPromise;
  }

  function setLoading(message) {
    status.hidden = false;
    status.innerHTML = '<div><div class="mag-spinner" aria-hidden="true"></div>' + escapeHtml(message) + '</div>';
  }

  function clearLoading() {
    status.hidden = true;
    status.innerHTML = "";
  }

  function isSinglePage() {
    return window.matchMedia("(max-width: 700px)").matches;
  }

  function spreadStartFor(page) {
    if (isSinglePage() || page === 1) return page;
    return page % 2 === 0 ? page : page - 1;
  }

  function pagesFor(start) {
    if (!pdfDoc) return [];
    if (isSinglePage() || start === 1) return [start];
    return [start, start + 1].filter(function (page) { return page <= pdfDoc.numPages; });
  }

  function makeSheet(pageNumber, pageMedia) {
    var sheet = document.createElement("div");
    sheet.className = "mag-sheet";
    sheet.setAttribute("aria-label", "Page " + pageNumber);
    sheet.appendChild(pageMedia);
    var number = document.createElement("span");
    number.className = "mag-page-number";
    number.textContent = pageNumber;
    sheet.appendChild(number);
    return sheet;
  }

  function renderCanvas(pageNumber) {
    var magazine = MAGAZINES[activeIndex];
    if (magazine && magazine.pageImagePrefix) {
      return new Promise(function (resolve, reject) {
        var image = new Image();
        image.alt = "";
        image.decoding = "async";
        image.onload = function () { resolve(image); };
        image.onerror = function () { reject(new Error("Page image " + pageNumber + " could not be loaded.")); };
        image.src = magazine.pageImagePrefix + String(pageNumber).padStart(2, "0") + ".jpg";
      });
    }
    return pdfDoc.getPage(pageNumber).then(function (page) {
      var viewport = page.getViewport({ scale: 1.45 });
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d", { alpha: false });
      var pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(viewport.width * pixelRatio);
      canvas.height = Math.floor(viewport.height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      return page.render({ canvasContext: context, viewport: viewport }).promise.then(function () { return canvas; });
    });
  }

  function renderSpread(targetPage, direction, instant) {
    if (!pdfDoc) return Promise.resolve();
    var ticket = ++renderTicket;
    var start = spreadStartFor(Math.max(1, Math.min(targetPage, pdfDoc.numPages)));
    var pageNumbers = pagesFor(start);
    if (!pageNumbers.length) return Promise.resolve();
    setLoading("Preparing pages...");

    return Promise.all(pageNumbers.map(renderCanvas)).then(function (canvases) {
      if (ticket !== renderTicket) return;
      var spread = document.createElement("div");
      spread.className = "mag-spread";
      spread.style.setProperty("--mag-zoom", zoom);
      canvases.forEach(function (canvas, index) { spread.appendChild(makeSheet(pageNumbers[index], canvas)); });
      var oldSpreads = Array.prototype.slice.call(stage.querySelectorAll(".mag-spread"));
      Array.prototype.forEach.call(stage.querySelectorAll(".mag-fallback"), function (node) { node.remove(); });
      stage.appendChild(spread);

      if (oldSpreads.length && !instant && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        var suffix = direction === "prev" ? "prev" : "next";
        oldSpreads.forEach(function (oldSpread) { oldSpread.classList.add("turn-out-" + suffix); });
        spread.classList.add("turn-in-" + suffix);
        window.setTimeout(function () {
          oldSpreads.forEach(function (oldSpread) { if (oldSpread.parentNode) oldSpread.remove(); });
        }, 480);
      } else if (oldSpreads.length) {
        oldSpreads.forEach(function (oldSpread) { oldSpread.remove(); });
      }

      currentPage = start;
      pageInput.value = currentPage;
      updateControls();
      clearLoading();
    }).catch(function (error) {
      if (ticket !== renderTicket) return;
      showFallback(error);
    });
  }

  function showFallback(error) {
    clearLoading();
    Array.prototype.forEach.call(stage.querySelectorAll(".mag-spread, .mag-fallback"), function (node) { node.remove(); });
    var magazine = MAGAZINES[activeIndex];
    var panel = document.createElement("div");
    panel.className = "mag-fallback";
    panel.innerHTML = '<i class="far fa-file-pdf" aria-hidden="true"></i><p>The interactive page renderer is unavailable in this browser. You can still read the complete magazine in the built-in PDF viewer.</p><a href="' + escapeHtml(magazine.pdf) + '" target="_blank" rel="noopener">Open ' + escapeHtml(magazine.title) + '</a>';
    stage.appendChild(panel);
    console.warn("Magazine reader fallback:", error);
  }

  function updateControls() {
    var ready = !!pdfDoc;
    var step = isSinglePage() ? 1 : 2;
    var atStart = !ready || currentPage <= 1;
    var atEnd = !ready || currentPage + (currentPage === 1 ? 0 : step - 1) >= pdfDoc.numPages;
    [firstBtn, prevBtn].forEach(function (button) { button.disabled = atStart; });
    [nextBtn, lastBtn].forEach(function (button) { button.disabled = atEnd; });
    [zoomOutBtn, zoomInBtn, pageInput].forEach(function (control) { control.disabled = !ready; });
    zoomOutBtn.disabled = !ready || zoom <= .75;
    zoomInBtn.disabled = !ready || zoom >= 1.5;
    pageTotal.textContent = "of " + (ready ? pdfDoc.numPages : 0);
    pageInput.max = ready ? pdfDoc.numPages : 1;
  }

  function goNext() {
    if (!pdfDoc) return;
    var next = isSinglePage() ? currentPage + 1 : (currentPage === 1 ? 2 : currentPage + 2);
    if (next <= pdfDoc.numPages) renderSpread(next, "next", false);
  }

  function goPrevious() {
    if (!pdfDoc || currentPage <= 1) return;
    var previous = isSinglePage() ? currentPage - 1 : (currentPage <= 2 ? 1 : currentPage - 2);
    renderSpread(previous, "prev", false);
  }

  function changeZoom(amount) {
    zoom = Math.max(.75, Math.min(1.5, Math.round((zoom + amount) * 100) / 100));
    var spread = stage.querySelector(".mag-spread");
    if (spread) spread.style.setProperty("--mag-zoom", zoom);
    updateControls();
  }

  function selectMagazine(index, scrollToReader) {
    var magazine = MAGAZINES[index];
    if (!magazine) return;
    activeIndex = index;
    pdfDoc = null;
    currentPage = 1;
    zoom = 1;
    select.value = String(index);
    title.textContent = magazine.title + " - " + magazine.issue;
    updateControls();
    if (scrollToReader) reader.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    setLoading("Opening " + magazine.title + "...");

    if (magazine.pageImagePrefix) {
      pdfDoc = { numPages: magazine.pages };
      pageTotal.textContent = "of " + pdfDoc.numPages;
      renderSpread(1, "next", true);
    } else {
      loadPdfJs().then(function (pdfjsLib) {
        return pdfjsLib.getDocument({ url: magazine.pdf }).promise;
      }).then(function (loadedPdf) {
        if (activeIndex !== index) return;
        pdfDoc = loadedPdf;
        pageTotal.textContent = "of " + pdfDoc.numPages;
        return renderSpread(1, "next", true);
      }).catch(showFallback);
    }
  }

  grid.addEventListener("click", function (event) {
    var button = event.target.closest("[data-magazine-index]");
    if (button) selectMagazine(Number(button.getAttribute("data-magazine-index")), true);
  });
  select.addEventListener("change", function () { selectMagazine(Number(select.value), false); });
  firstBtn.addEventListener("click", function () { renderSpread(1, "prev", false); });
  prevBtn.addEventListener("click", goPrevious);
  nextBtn.addEventListener("click", goNext);
  lastBtn.addEventListener("click", function () { renderSpread(pdfDoc ? pdfDoc.numPages : 1, "next", false); });
  zoomOutBtn.addEventListener("click", function () { changeZoom(-.15); });
  zoomInBtn.addEventListener("click", function () { changeZoom(.15); });
  pageInput.addEventListener("change", function () {
    if (!pdfDoc) return;
    var requested = Math.max(1, Math.min(Number(pageInput.value) || 1, pdfDoc.numPages));
    renderSpread(requested, requested < currentPage ? "prev" : "next", false);
  });
  fullscreenBtn.addEventListener("click", function () {
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    else if (reader.requestFullscreen) reader.requestFullscreen();
  });
  stage.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "PageDown") { event.preventDefault(); goNext(); }
    if (event.key === "ArrowLeft" || event.key === "PageUp") { event.preventDefault(); goPrevious(); }
    if (event.key === "Home" && pdfDoc) { event.preventDefault(); renderSpread(1, "prev", false); }
    if (event.key === "End" && pdfDoc) { event.preventDefault(); renderSpread(pdfDoc.numPages, "next", false); }
  });

  var resizeTimer = 0;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      if (pdfDoc) renderSpread(currentPage, "next", true);
    }, 180);
  });

  buildLibrary();
  updateControls();
})();

}

/* <script> (original line 36393) */
if (SCHOOL_PAGE === "spg-alumni") {


(function(){

  'use strict';



  /* ── Fade-in on scroll — scoped to #spg-alumni ── */

  var fadeItems = document.querySelectorAll('#spg-alumni .coc-fade');

  if (fadeItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

    var fadeObs = new IntersectionObserver(function(entries) {

      entries.forEach(function(e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); fadeObs.unobserve(e.target); }

      });

    }, { threshold: 0.08 });

    fadeItems.forEach(function(el) { fadeObs.observe(el); });

  } else {

    fadeItems.forEach(function(el) { el.classList.add('sc-visible'); });

  }



})();


}

/* <script> (original line 37303) */
if (SCHOOL_PAGE === "spg-careers") {


(function () {

  /* Smooth scroll for "How to Apply" button */

  var scrollBtn = document.getElementById('car-scroll-btn');

  if (scrollBtn) {

    scrollBtn.addEventListener('click', function (e) {

      var target = document.getElementById('car-how-to-apply');

      if (target) {

        e.preventDefault();

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      }

    });

  }



  /* Copy email button */

  var copyBtn = document.getElementById('car-copy-email');

  var statusEl = document.getElementById('car-copy-status');

  if (copyBtn) {

    copyBtn.addEventListener('click', function () {

      var email = 'dmtsquery@gmail.com';

      function confirm() {

        copyBtn.textContent = 'Copied!';

        if (statusEl) statusEl.textContent = 'Email address copied.';

        setTimeout(function () {

          copyBtn.textContent = 'Copy email';

          if (statusEl) statusEl.textContent = '';

        }, 2000);

      }

      if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(email).then(confirm).catch(function () {

          /* fallback: select a temporary input */

          var inp = document.createElement('input');

          inp.value = email;

          document.body.appendChild(inp);

          inp.select();

          document.execCommand('copy');

          document.body.removeChild(inp);

          confirm();

        });

      } else {

        var inp = document.createElement('input');

        inp.value = email;

        document.body.appendChild(inp);

        inp.select();

        document.execCommand('copy');

        document.body.removeChild(inp);

        confirm();

      }

    });

  }



  /* Fade-in via IntersectionObserver */

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {

    var fades = document.querySelectorAll('#spg-careers .car-fade');

    var obs = new IntersectionObserver(function (entries) {

      entries.forEach(function (e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

      });

    }, { threshold: 0.12 });

    fades.forEach(function (el) { obs.observe(el); });

  }

})();


}

/* <script> (original line 38211) */
if (SCHOOL_PAGE === "spg-contact") {


(function () {

  /* Copy buttons */

  var statusEl = document.getElementById('con-copy-status');

  document.querySelectorAll('#spg-contact .con-copy-btn').forEach(function (btn) {

    btn.addEventListener('click', function () {

      var text = btn.dataset.copy;

      function confirm() {

        var orig = btn.textContent;

        btn.textContent = 'Copied!';

        if (statusEl) statusEl.textContent = text + ' copied.';

        setTimeout(function () { btn.textContent = orig; if (statusEl) statusEl.textContent = ''; }, 2000);

      }

      if (navigator.clipboard && navigator.clipboard.writeText) {

        navigator.clipboard.writeText(text).then(confirm).catch(function () {

          var inp = document.createElement('input'); inp.value = text;

          document.body.appendChild(inp); inp.select(); document.execCommand('copy'); document.body.removeChild(inp); confirm();

        });

      } else {

        var inp = document.createElement('input'); inp.value = text;

        document.body.appendChild(inp); inp.select(); document.execCommand('copy'); document.body.removeChild(inp); confirm();

      }

    });

  });



  /* Fade-in */

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {

    var fades = document.querySelectorAll('#spg-contact .con-fade');

    var obs = new IntersectionObserver(function (entries) {

      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); } });

    }, { threshold: 0.1 });

    fades.forEach(function (el) { obs.observe(el); });

  }

})();


}

/* <script> (original line 39384) */
if (SCHOOL_PAGE === "spg-history") {


(function(){

  'use strict';

  var items = document.querySelectorAll('#spg-history .hist-fade');

  if (!items.length) return;

  var obs = new IntersectionObserver(function(entries) {

    entries.forEach(function(e) {

      if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

    });

  }, { threshold: 0.12 });

  items.forEach(function(el) { obs.observe(el); });

})();


}

/* <script> (original line 40244) */
if (SCHOOL_PAGE === "spg-vision") {


(function () {

  'use strict';

  /* Fade-in via IntersectionObserver — reuses sc-visible class */

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced && 'IntersectionObserver' in window) {

    var els = document.querySelectorAll('#spg-vision .vmm-fade');

    var obs = new IntersectionObserver(function (entries) {

      entries.forEach(function (e) {

        if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

      });

    }, { threshold: 0.1 });

    els.forEach(function (el) { obs.observe(el); });

  }

}());


}

/* <script> (original line 40989) */
if (SCHOOL_PAGE === "spg-management") {


(function(){

  'use strict';

  var items = document.querySelectorAll('#spg-management .mgmt-fade');

  if (!items.length) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (reduced.matches) return;

  var obs = new IntersectionObserver(function(entries) {

    entries.forEach(function(e) {

      if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

    });

  }, { threshold: 0.12 });

  items.forEach(function(el) { obs.observe(el); });

})();


}

/* <script> (original line 41189) */
if (SCHOOL_PAGE === "spg-management") {

(function(){
  var root=document.querySelector('#spg-management .mgmt2-page'); if(!root) return;
  var track=document.getElementById('mgmt2TeamTrack');
  var teamPrev=document.getElementById('mgmt2TeamPrev'), teamNext=document.getElementById('mgmt2TeamNext');
  function teamTargets(){
    if(!track||track.clientWidth===0)return [0];
    var cards=track.querySelectorAll('.mgmt2-team-card'), firstOffset=cards[0]?.offsetLeft||0;
    var maxScroll=Math.max(0,track.scrollWidth-track.clientWidth), targets=[0];
    cards.forEach(function(card){
      var target=Math.max(0,Math.min(maxScroll,card.offsetLeft-firstOffset));
      if(Math.abs(target-targets[targets.length-1])>2)targets.push(target);
    });
    if(Math.abs(maxScroll-targets[targets.length-1])>2)targets.push(maxScroll);
    return targets;
  }
  var teamButtonFrame=0, teamSettleTimer=0;
  function updateTeamButtons(){
    if(!track)return;
    var maxScroll=Math.max(0,track.scrollWidth-track.clientWidth), edgeTolerance=4;
    if(teamPrev)teamPrev.disabled=track.scrollLeft<=edgeTolerance;
    if(teamNext)teamNext.disabled=track.scrollLeft>=maxScroll-edgeTolerance;
  }
  function scheduleTeamButtonUpdate(){
    if(teamButtonFrame)return;
    teamButtonFrame=requestAnimationFrame(function(){teamButtonFrame=0;updateTeamButtons()});
  }
  function moveTeam(dir){
    if(!track)return;
    var targets=teamTargets();
    if(targets.length<2)return;
    var current=track.scrollLeft, tolerance=4, destination;
    if(dir>0){
      destination=targets.find(function(target){return target>current+tolerance});
      if(destination===undefined)destination=targets[targets.length-1];
    }else{
      for(var index=targets.length-1;index>=0;index--){
        if(targets[index]<current-tolerance){destination=targets[index];break;}
      }
      if(destination===undefined)destination=targets[0];
    }
    track.scrollTo({left:destination,behavior:reduce?.matches?'auto':'smooth'});
    scheduleTeamButtonUpdate();
    clearTimeout(teamSettleTimer);
    teamSettleTimer=setTimeout(updateTeamButtons,reduce?.matches?0:450);
  }
  teamPrev?.addEventListener('click',function(){moveTeam(-1)});
  teamNext?.addEventListener('click',function(){moveTeam(1)});
  var items=root.querySelectorAll('.mgmt2-fade'), reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(reduce.matches||!('IntersectionObserver' in window)){items.forEach(function(el){el.classList.add('is-visible')});}
  else {var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}})},{threshold:.12});items.forEach(function(el){io.observe(el)});}
  if(track){
    track.setAttribute('tabindex','0');
    track.setAttribute('aria-label','School leadership team');
    track.addEventListener('keydown',function(event){if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();moveTeam(event.key==='ArrowRight'?1:-1)}});
    track.addEventListener('scroll',scheduleTeamButtonUpdate,{passive:true});
    window.addEventListener('resize',scheduleTeamButtonUpdate,{passive:true});
    scheduleTeamButtonUpdate();
  }
  var heritageTrack=document.getElementById('mgmt2HeritageTrack'), heritageCards=heritageTrack?heritageTrack.querySelectorAll('.mgmt2-heritage-card'):[], heritageIndex=0, heritageTimer;
  function heritageStep(dir){
    if(!heritageTrack||!heritageCards.length)return;
    heritageIndex=(heritageIndex+dir+heritageCards.length)%heritageCards.length;
    var spacing=Math.min(290,heritageCards[0].offsetWidth*.88);
    heritageCards.forEach(function(card,i){
      var slot=(i-heritageIndex+heritageCards.length)%heritageCards.length;
      if(slot>heritageCards.length/2)slot-=heritageCards.length;
      var distance=Math.abs(slot), visible=distance<=2;
      card.style.setProperty('--slot-x',(slot*spacing)+'px');
      card.style.setProperty('--slot-scale',distance===0?'1':distance===1?'.72':'.55');
      card.style.setProperty('--slot-opacity',visible?(distance===0?'1':distance===1?'.75':'.35'):'0');
      card.style.zIndex=String(10-Math.min(distance,9));
      card.style.pointerEvents=visible?'auto':'none';
      card.classList.toggle('is-active',distance===0);
      card.setAttribute('aria-hidden',String(!visible));
    });
  }
  document.getElementById('mgmt2HeritagePrev')?.addEventListener('click',function(){heritageStep(-1);restartHeritage()});
  document.getElementById('mgmt2HeritageNext')?.addEventListener('click',function(){heritageStep(1);restartHeritage()});
  // AUTOPLAY SPEED: 2800 milliseconds between cards; hover/focus pauses movement.
  function restartHeritage(){clearInterval(heritageTimer);if(!reduce.matches)heritageTimer=setInterval(function(){var viewport=heritageTrack.parentElement;if(!document.hidden&&!document.getElementById('spg-management').hidden&&!viewport.matches(':hover')&&!viewport.contains(document.activeElement))heritageStep(1)},2800)}
  if(heritageTrack){
    var carousel=heritageTrack.parentElement;
    carousel.setAttribute('role','region');carousel.setAttribute('aria-roledescription','carousel');carousel.setAttribute('aria-label','Our institutions');carousel.tabIndex=0;
    carousel.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();heritageStep(e.key==='ArrowRight'?1:-1);restartHeritage()}});
    heritageCards.forEach(function(card,i){
      var label=card.querySelector('small'),badge=document.createElement('span');badge.className='mgmt2-heritage-board';badge.textContent=label.textContent.split('·')[0].trim();badge.setAttribute('aria-hidden','true');card.appendChild(badge);
      card.addEventListener('click',function(){heritageStep(i-heritageIndex);restartHeritage()});
    });
    heritageStep(0);
    if('ResizeObserver' in window)new ResizeObserver(function(){heritageStep(0)}).observe(carousel);
  }
  if(heritageCards.length>1){var heritageViewport=document.querySelector('#spg-management .mgmt2-heritage-viewport'), touchStartX=0;heritageViewport?.addEventListener('mouseenter',function(){clearInterval(heritageTimer)});heritageViewport?.addEventListener('mouseleave',restartHeritage);heritageViewport?.addEventListener('focusin',function(){clearInterval(heritageTimer)});heritageViewport?.addEventListener('focusout',restartHeritage);heritageViewport?.addEventListener('touchstart',function(e){touchStartX=e.changedTouches[0].clientX},{passive:true});heritageViewport?.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-touchStartX;if(Math.abs(dx)>40){heritageStep(dx<0?1:-1);restartHeritage()}},{passive:true});window.addEventListener('resize',function(){heritageStep(0)});restartHeritage();}
})();

}

/* <script> (original line 41930) */
if (SCHOOL_PAGE === "spg-principal") {


(function(){

  'use strict';

  var items = document.querySelectorAll('#spg-principal .prnc-fade');

  if (!items.length) return;

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (reduced.matches) return;

  var obs = new IntersectionObserver(function(entries) {

    entries.forEach(function(e) {

      if (e.isIntersecting) { e.target.classList.add('sc-visible'); obs.unobserve(e.target); }

    });

  }, { threshold: 0.10 });

  items.forEach(function(el) { obs.observe(el); });

})();


}

/* <script> (original line 42868) */


(function () {

  /* Run after DOM is fully ready */

  function init() {

    var toggle = document.getElementById('navSearchToggle');

    if (!toggle) return;



/* ── Catalogue ── */

    var CATALOGUE = [

      { group:'Actions',         title:'Apply for Admission',         subtitle:'Start your admission journey',        icon:'fa-file-alt',       href:'admission-process.html' },

      { group:'Actions',         title:'Download Prospectus',         subtitle:'Get the school prospectus PDF',       icon:'fa-download',       href:'prospectus.html' },

      { group:'Actions',         title:'Contact Us',                  subtitle:'Reach the school office',             icon:'fa-phone-alt',      href:'contact-us.html' },

      { group:'Actions',         title:'View Gallery',                subtitle:'Photos from school events',           icon:'fa-images',         href:'gallery.html' },

      { group:'Actions',         title:'Careers at School',           subtitle:'Open positions & opportunities',      icon:'fa-briefcase',      href:'work-with-us.html' },

      { group:'Programmes',      title:'Pre-Primary',                 subtitle:'Nursery · LKG · UKG',                icon:'fa-child',          href:'pre-primary.html' },

      { group:'Programmes',      title:'Primary School',              subtitle:'Std I to Std V',                     icon:'fa-book-open',      href:'primary.html' },

      { group:'Programmes',      title:'Middle School',               subtitle:'Std VI to Std VIII',                 icon:'fa-school',         href:'middle.html' },

      { group:'Programmes',      title:'High School',                 subtitle:'Std IX & Std X',                     icon:'fa-graduation-cap', href:'high.html' },

      { group:'Academics',       title:'Curriculum',                  subtitle:'Academic curriculum & syllabus',      icon:'fa-scroll',         href:'curriculum.html' },

      { group:'Academics',       title:'Subjects Offered',            subtitle:'Subjects available by class',         icon:'fa-list-ul',        href:'subjects-offered.html' },

      { group:'Academics',       title:'Examination Rules & Pattern', subtitle:'Exam structure & assessment guide',   icon:'fa-clipboard-check',href:'examination-rules-pattern.html' },

      { group:'Academics',       title:'Scholastics',                 subtitle:'Academic performance & awards',       icon:'fa-graduation-cap', href:'scholastics.html' },

      { group:'Academics',       title:'Co-Scholastics',              subtitle:'Sports, arts & extra-curriculars',    icon:'fa-palette',        href:'co-scholastics.html' },

      { group:'Academics',       title:'Achievements',                subtitle:'Awards, medals & recognitions',       icon:'fa-trophy',         href:'achievements.html' },

      { group:'Admissions',      title:'Admission Process',           subtitle:'How to apply & requirements',         icon:'fa-clipboard-list', href:'admission-process.html' },

      { group:'Admissions',      title:'Prospectus',                  subtitle:'Download the school prospectus',      icon:'fa-file-pdf',       href:'prospectus.html' },

    ];



    /* ── Popular search keywords ── */

    var POPULAR = [

      { label:'Pre-Primary',        icon:'fa-child',          href:'pre-primary.html' },

      { label:'Primary',            icon:'fa-book-open',      href:'primary.html' },

      { label:'High School',        icon:'fa-graduation-cap', href:'high.html' },

      { label:'Admissions',         icon:'fa-clipboard-list', href:'admission-process.html' },

      { label:"Principal's Message",icon:'fa-user-tie',       href:'principals-message.html' },

      { label:'Our History',        icon:'fa-history',        href:'history.html' },

      { label:'Academics',          icon:'fa-book',           href:'curriculum.html' },

      { label:'Curriculum',         icon:'fa-scroll',         href:'curriculum.html' },

      { label:'Gallery',            icon:'fa-images',         href:'gallery.html' },

      { label:'Contact',            icon:'fa-phone-alt',      href:'contact-us.html' },

    ];



    /* ── Build modal ── */

    var bd = document.createElement('div');

    bd.className = 'smodal-backdrop';

    bd.setAttribute('role', 'dialog');

    bd.setAttribute('aria-modal', 'true');

    bd.setAttribute('aria-label', 'Site search');

    bd.hidden = true;

    bd.innerHTML =

      '<div class="smodal">' +

        '<div class="smodal-input-row">' +

          '<span class="smodal-icon"><i class="fas fa-search"></i></span>' +

          '<input class="smodal-input" id="smodalInput" type="search" placeholder="Search pages, programmes, actions…" autocomplete="off">' +

          '<button class="smodal-kbd-esc" id="smodalClose" type="button">esc</button>' +

        '</div>' +

        '<div class="smodal-results" id="smodalList"></div>' +

        '<div class="smodal-footer">' +

          '<span class="smodal-hint"><kbd>↑</kbd><kbd>↓</kbd> navigate</span>' +

          '<span class="smodal-hint"><kbd>↵</kbd> select</span>' +

          '<span class="smodal-hint"><kbd>Esc</kbd> close</span>' +

        '</div>' +

      '</div>';

    document.body.appendChild(bd);



    var inp   = bd.querySelector('#smodalInput');

    var list  = bd.querySelector('#smodalList');

    var closeBtn = bd.querySelector('#smodalClose');



    /* ── State ── */

    var currentItems = [];  /* flat ordered list matching rendered buttons */

    var activeIdx = -1;

    var previousFocus = null;

    var previousOverflow = '';



    /* ── Helpers ── */

    function esc(s) {

      return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    }

    function bold(text, q) {

      if (!q) return esc(text);

      var lo = text.toLowerCase(), lq = q.toLowerCase();

      var i = lo.indexOf(lq);

      if (i < 0) return esc(text);

      return esc(text.slice(0,i)) + '<strong style="color:var(--color-primary);font-weight:700">' + esc(text.slice(i,i+q.length)) + '</strong>' + esc(text.slice(i+q.length));

    }

    function itemRow(item, q) {

      return '<button class="smodal-item" type="button">' +

        '<span class="smodal-item-icon"><i class="fas ' + item.icon + '"></i></span>' +

        '<span class="smodal-item-text">' +

          '<span class="smodal-item-title">' + bold(item.title, q) + '</span>' +

          '<span class="smodal-item-subtitle">' + esc(item.subtitle || '') + '</span>' +

        '</span>' +

        '<span class="smodal-item-arrow"><i class="fas fa-chevron-right"></i></span>' +

      '</button>';

    }



    /* ── Render (stores flat item order in currentItems) ── */

    function render(items, q) {

      currentItems = items;

      activeIdx = -1;

      if (!items.length) {

        list.innerHTML = '<div class="smodal-empty">No results for <strong>' + esc(q) + '</strong></div>';

        return;

      }

      var groups = {}, order = [];

      items.forEach(function(item) {

        if (!groups[item.group]) { groups[item.group] = []; order.push(item.group); }

        groups[item.group].push(item);

      });

      var html = '';

      order.forEach(function(g) {

        html += '<div class="smodal-group-label">' + esc(g) + '</div>';

        groups[g].forEach(function(item) { html += itemRow(item, q || ''); });

      });

      list.innerHTML = html;

    }



    function chipsHtml() {

      var h = '<div class="smodal-popular"><div class="smodal-popular-label">Popular searches</div><div class="smodal-chips">';

      POPULAR.forEach(function(p) {

        h += '<button class="smodal-chip" type="button" data-href="' + p.href + '"><i class="fas ' + p.icon + '"></i>' + esc(p.label) + '</button>';

      });

      return h + '</div></div>';

    }



    function showDefault() {

      currentItems = CATALOGUE;

      activeIdx = -1;

      var groups = {}, order = [];

      CATALOGUE.forEach(function(item) {

        if (!groups[item.group]) { groups[item.group] = []; order.push(item.group); }

        groups[item.group].push(item);

      });

      var html = chipsHtml();

      order.forEach(function(g) {

        html += '<div class="smodal-group-label">' + esc(g) + '</div>';

        groups[g].forEach(function(item) { html += itemRow(item, ''); });

      });

      list.innerHTML = html;

    }



    function showFiltered(q) {

      var lq = q.toLowerCase();

      var hits = CATALOGUE.filter(function(it) {

        return it.title.toLowerCase().indexOf(lq) >= 0 ||

               (it.subtitle || '').toLowerCase().indexOf(lq) >= 0 ||

               it.group.toLowerCase().indexOf(lq) >= 0;

      }).slice(0, 12);

      render(hits, q);

    }



    /* ── Active highlight ── */

    function setActive(idx) {

      var btns = list.querySelectorAll('.smodal-item');

      for (var i = 0; i < btns.length; i++) btns[i].classList.remove('smod-active');

      if (idx >= 0 && btns[idx]) { btns[idx].classList.add('smod-active'); btns[idx].scrollIntoView({block:'nearest'}); }

      activeIdx = idx;

    }



    /* ── Select an item ── */

    function select(item) {
      close();
      var href = item && item.href;
      if (!href || href === '#') return;
      if (href.charAt(0) !== '#') { window.location.assign(href); return; }
      var id = href.slice(1);
      var target = document.getElementById(id) || document.querySelector('[data-section="' + id + '"]');
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      else window.location.assign('index.html' + href);
    }

    /* ── Open / close ── */

    function open() {

      if (!bd.hidden) return;

      previousFocus = document.activeElement;

      previousOverflow = document.body.style.overflow;

      bd.hidden = false;

      toggle.setAttribute('aria-expanded', 'true');

      inp.value = '';

      showDefault();

      setTimeout(function() { inp.focus(); }, 50);

      document.body.style.overflow = 'hidden';

    }

    function close() {

      if (bd.hidden) return;

      bd.hidden = true;

      toggle.setAttribute('aria-expanded', 'false');

      document.body.style.overflow = previousOverflow;

      activeIdx = -1;

      if (previousFocus && previousFocus.isConnected) previousFocus.focus();

    }



    /* ── Event delegation on results list ── */

    list.addEventListener('click', function(e) {

      /* Popular chip click */

      var chip = e.target.closest('.smodal-chip');

      if (chip) { select({ href: chip.getAttribute('data-href') }); return; }

      /* Regular result item */

      var btn = e.target.closest('.smodal-item');

      if (!btn) return;

      var btns = list.querySelectorAll('.smodal-item');

      for (var i = 0; i < btns.length; i++) {

        if (btns[i] === btn) { select(currentItems[i]); return; }

      }

    });

    list.addEventListener('mouseover', function(e) {

      var btn = e.target.closest('.smodal-item');

      if (!btn) return;

      var btns = list.querySelectorAll('.smodal-item');

      for (var i = 0; i < btns.length; i++) {

        if (btns[i] === btn) { setActive(i); return; }

      }

    });



    /* ── Input ── */

    inp.addEventListener('input', function() {

      var q = inp.value.trim();

      q ? showFiltered(q) : showDefault();

    });

    inp.addEventListener('keydown', function(e) {

      var btns = list.querySelectorAll('.smodal-item');

      var len  = btns.length;

      if (e.key === 'ArrowDown')  { e.preventDefault(); setActive(activeIdx + 1 < len ? activeIdx + 1 : 0); }

      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(activeIdx - 1 >= 0 ? activeIdx - 1 : len - 1); }

      else if (e.key === 'Enter')   { e.preventDefault(); select(currentItems[activeIdx >= 0 ? activeIdx : 0]); }

      else if (e.key === 'Escape')  { close(); }

    });



    /* ── Toggle / close triggers ── */

    toggle.addEventListener('click', function(e) { e.stopPropagation(); bd.hidden ? open() : close(); });

    closeBtn.addEventListener('click', close);

    bd.addEventListener('click', function(e) { if (e.target === bd) close(); });

    document.addEventListener('keydown', function(e) {

      if (e.key === 'Escape' && !bd.hidden) close();

      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); bd.hidden ? open() : close(); }

      if (e.key === 'Tab' && !bd.hidden) {
        var focusable = Array.prototype.slice.call(bd.querySelectorAll('button:not([disabled]),input:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])'))
          .filter(function(el) { return el.offsetParent !== null; });
        if (!focusable.length) return;
        var first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }

    });

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', init);

  } else {

    init();

  }

}());



/* <script> (original line 45484) */
if (SCHOOL_PAGE === "spg-preprimary") {


(function () {

  'use strict';

  /* Bounce fade-in via IntersectionObserver, only while this page is visible. */
  var observer;
  var scrollTopButton = document.querySelector('#spg-preprimary .ppr-scroll-top');
  var preprimarySection = document.getElementById('spg-preprimary');
  function updateScrollTop() {
    if (!scrollTopButton || !preprimarySection) return;
    var active = (SCHOOL_PAGE === 'spg-preprimary') && !preprimarySection.hidden;
    scrollTopButton.classList.toggle('is-visible', active && window.scrollY > 420);
  }
  window.addEventListener('scroll', updateScrollTop, { passive: true });
  function scrollPreprimaryTop(event) {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    var target = document.getElementById('spg-preprimary');
    if (target && target.scrollIntoView) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
  if (scrollTopButton) scrollTopButton.addEventListener('click', scrollPreprimaryTop);
  updateScrollTop();
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function attach() {
    if ((SCHOOL_PAGE === 'spg-preprimary') && !document.getElementById('ppr-room-fonts')) {
      var fonts = document.createElement('link');
      fonts.id = 'ppr-room-fonts'; fonts.rel = 'stylesheet';
      fonts.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap';
      document.head.appendChild(fonts);
    }
    if (observer || reduced || !('IntersectionObserver' in window) || (SCHOOL_PAGE !== 'spg-preprimary')) return;
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('sc-visible'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('#spg-preprimary .ppr-bounce').forEach(function (el) { observer.observe(el); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attach);
  else attach();

})();


}

/* <script> (original line 48168) */


(function(){

  /* Only activate theme tester when ?theme=edit is in the URL */

  if(location.search.indexOf('theme=edit')===-1)return;

  var panel=document.getElementById('theme-tester');

  panel.hidden=false;



  var DEFAULTS={

    '--color-primary':'#D50000',

    '--color-secondary':'#E5C16A',

    '--color-cta':'#FF8000',

    '--color-bg-main':'#FFF9F0',

    '--color-bg-section':'#F1E7DC',

    '--color-text':'#343434'

  };



  function hexToRgb(hex){

    hex=hex.replace('#','');

    if(hex.length===3)hex=hex.split('').map(function(c){return c+c;}).join('');

    var r=parseInt(hex.substring(0,2),16);

    var g=parseInt(hex.substring(2,4),16);

    var b=parseInt(hex.substring(4,6),16);

    return r+','+g+','+b;

  }



  document.querySelectorAll('#theme-pickers input[type=color]').forEach(function(inp){

    inp.addEventListener('input',function(){

      var v=inp.dataset.var;

      document.documentElement.style.setProperty(v,inp.value);

      if(inp.dataset.rgb){

        document.documentElement.style.setProperty(inp.dataset.rgb,hexToRgb(inp.value));

      }

    });

  });



  document.getElementById('theme-copy-btn').addEventListener('click',function(){

    var lines=[':root {'];

    document.querySelectorAll('#theme-pickers input[type=color]').forEach(function(inp){

      lines.push('  '+inp.dataset.var+': '+inp.value+';');

      if(inp.dataset.rgb){

        lines.push('  '+inp.dataset.rgb+': '+hexToRgb(inp.value)+';');

      }

    });

    lines.push('}');

    var css=lines.join('\n');

    navigator.clipboard.writeText(css).then(function(){

      var msg=document.getElementById('theme-copy-msg');

      msg.style.display='block';

      setTimeout(function(){msg.style.display='none';},2500);

    }).catch(function(){

      var ta=document.createElement('textarea');

      ta.value=css;

      document.body.appendChild(ta);

      ta.select();

      document.execCommand('copy');

      document.body.removeChild(ta);

    });

  });



  document.getElementById('theme-reset-btn').addEventListener('click',function(){

    Object.keys(DEFAULTS).forEach(function(v){

      document.documentElement.style.removeProperty(v);

    });

    document.querySelectorAll('#theme-pickers input[type=color]').forEach(function(inp){

      inp.value=DEFAULTS[inp.dataset.var]||inp.value;

    });

    /* Reset RGB channels too */

    document.documentElement.style.setProperty('--color-primary-rgb','213,0,0');

    document.documentElement.style.setProperty('--color-secondary-rgb','229,193,106');

  });

}());



/* <script id="faqbot-js"> (original line 49336) */


(function () {

  'use strict';



  /* ── FAQ DATA ──────────────────────────────────────────────

     Edit questions, answers and keywords here.

     showAdmissionsLink: true  → shows "View Admission Procedure" link under answer

     keywords: case-insensitive substrings matched against typed text

  ─────────────────────────────────────────────────────────── */

  var FAQS = [

    {

      id: 'q1',

      question: 'For which classes are admissions open?',

      answer: 'Admissions are generally open for Nursery, LKG and UKG. Admissions to higher classes are subject to seat availability.',

      htmlAnswer: null,

      showAdmissionsLink: true,

      keywords: ['classes', 'nursery', 'lkg', 'ukg', 'seats', 'class', 'standard', 'grade', 'open', 'available class']

    },

    {

      id: 'q2',

      question: 'When are admission forms available, and how can I apply?',

      answer: "Admissions generally open in November. The advertisement, application dates and instructions are published on the school’s official website before admissions commence. Parents can apply online during the specified period.",

      htmlAnswer: null,

      showAdmissionsLink: true,

      keywords: ['form', 'apply', 'application', 'online', 'dates', 'november', 'available', 'how', 'when', 'register', 'registration', 'procedure', 'process', 'start', 'begin']

    },

    {

      id: 'q3',

      question: 'What is the age eligibility for admission?',

      answer: null,

      htmlAnswer: 'The age criteria as on 30th June of the academic year are:<ul class="faqbot-age-list"><li><strong>Nursery:</strong> 3 years</li><li><strong>LKG:</strong> 4 years</li><li><strong>UKG:</strong> 5 years</li></ul>',

      showAdmissionsLink: false,

      keywords: ['age', 'eligibility', 'years', 'old', 'eligible', 'year', 'criteria', 'born', 'birthday', 'cut', 'eligible age', 'how old']

    },

    {

      id: 'q4',

      question: 'What documents are required for admission?',

      answer: "Parents must submit the child’s birth certificate, Aadhaar card, photographs, residential proof, signed declaration and previous report card, wherever applicable. Additional documents may be required depending on the class.",

      htmlAnswer: null,

      showAdmissionsLink: true,

      keywords: ['documents', 'certificate', 'aadhaar', 'photo', 'proof', 'required', 'submit', 'papers', 'birth', 'report', 'card', 'declaration', 'residential', 'photograph', 'docs', 'document']

    },

    {

      id: 'q5',

      question: 'Does submitting an application guarantee admission?',

      answer: 'No. Admission is subject to seat availability and the school’s admission procedure. Selected candidates will be informed through email.',

      htmlAnswer: null,

      showAdmissionsLink: false,

      keywords: ['guarantee', 'selected', 'confirm', 'email', 'result', 'guaranteed', 'sure', 'certain', 'seat', 'confirmed', 'inform', 'notification', 'assured', 'secure']

    }

  ];



  /* ── STATE ─────────────────────────────────────────────── */

  var isOpen    = false;

  var askedIds  = [];



  /* ── ELEMENTS ──────────────────────────────────────────── */

  var launcher  = document.getElementById('faqbot-launcher');

  var panel     = document.getElementById('faqbot-panel');

  var messages  = document.getElementById('faqbot-messages');

  var inputEl   = document.getElementById('faqbot-input');

  var sendBtn   = document.getElementById('faqbot-send');

  var closeBtnEl= document.getElementById('faqbot-close');

  var restartBtn= document.getElementById('faqbot-restart');

  var iconChat  = document.getElementById('faqbot-icon-chat');

  var iconClose = document.getElementById('faqbot-icon-close');



  var reducedMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);



  /* ── OPEN / CLOSE PANEL ────────────────────────────────── */

  function openPanel() {

    isOpen = true;

    panel.removeAttribute('hidden');

    // Trigger animation on next frame

    requestAnimationFrame(function () {

      requestAnimationFrame(function () {

        panel.classList.add('faqbot-panel-open');

      });

    });

    launcher.setAttribute('aria-expanded', 'true');

    iconChat.style.display  = 'none';

    iconClose.style.display = '';

    // Prevent body scroll on mobile bottom sheet

    if (window.innerWidth < 600) {

      document.body.style.overflow = 'hidden';

    }

    // Greet on first open

    if (messages.children.length === 0) {

      showGreeting();

    }

    // Move focus to first chip or input

    setTimeout(function () {

      var firstChip = panel.querySelector('.faqbot-chip');

      if (firstChip) { firstChip.focus(); }

      else { inputEl.focus(); }

    }, reducedMotion ? 10 : 230);

  }



  function closePanel() {

    isOpen = false;

    panel.classList.remove('faqbot-panel-open');

    var delay = reducedMotion ? 0 : 210;

    setTimeout(function () {

      if (!isOpen) { panel.setAttribute('hidden', ''); }

    }, delay);

    launcher.setAttribute('aria-expanded', 'false');

    iconChat.style.display  = '';

    iconClose.style.display = 'none';

    document.body.style.overflow = '';

    launcher.focus();

  }



  launcher.addEventListener('click', function () {

    if (isOpen) { closePanel(); } else { openPanel(); }

  });

  closeBtnEl.addEventListener('click', closePanel);



  /* ── KEYBOARD: Escape closes; Tab trapped on mobile ─────── */

  document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape' && isOpen) {

      closePanel();

      return;

    }

    if (isOpen && window.innerWidth < 600 && e.key === 'Tab') {

      var focusable = Array.prototype.slice.call(

        panel.querySelectorAll('button:not([disabled]), input:not([disabled])')

      );

      if (!focusable.length) { return; }

      var first = focusable[0];

      var last  = focusable[focusable.length - 1];

      if (e.shiftKey) {

        if (document.activeElement === first) { e.preventDefault(); last.focus(); }

      } else {

        if (document.activeElement === last) { e.preventDefault(); first.focus(); }

      }

    }

  });



  /* ── GREETING ──────────────────────────────────────────── */

  function showGreeting() {

    addBotBubble('Hello! I can answer common questions about admissions at Dr. Mar Theophilus School. Please choose a question below.', false);

    showChips(FAQS, false);

  }



  /* ── ADD BOT BUBBLE ────────────────────────────────────── */

  function addBotBubble(content, isHtml) {

    var wrap   = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-bot';

    var bubble = document.createElement('div');

    bubble.className = 'faqbot-bubble faqbot-bubble-bot';

    if (isHtml) {

      bubble.innerHTML = content; // only pre-built safe HTML (Q3 age list)

    } else {

      bubble.textContent = content;

    }

    wrap.appendChild(bubble);

    messages.appendChild(wrap);

    scrollBottom();

    return wrap;

  }



  /* ── ADD USER BUBBLE ───────────────────────────────────── */

  function addUserBubble(text) {

    var wrap   = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-user';

    var bubble = document.createElement('div');

    bubble.className = 'faqbot-bubble faqbot-bubble-user';

    bubble.textContent = text; // always textContent — never innerHTML

    wrap.appendChild(bubble);

    messages.appendChild(wrap);

    scrollBottom();

  }



  /* ── TYPING INDICATOR ──────────────────────────────────── */

  function addTypingIndicator() {

    var wrap   = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-bot';

    wrap.id    = 'faqbot-typing';

    var bubble = document.createElement('div');

    bubble.className = 'faqbot-bubble faqbot-bubble-bot faqbot-typing-bubble';

    if (reducedMotion) {

      bubble.textContent = '…'; // static ellipsis

    } else {

      var d1 = document.createElement('span'); d1.className = 'faqbot-dot';

      var d2 = document.createElement('span'); d2.className = 'faqbot-dot';

      var d3 = document.createElement('span'); d3.className = 'faqbot-dot';

      bubble.appendChild(d1); bubble.appendChild(d2); bubble.appendChild(d3);

    }

    wrap.appendChild(bubble);

    messages.appendChild(wrap);

    scrollBottom();

  }



  function removeTypingIndicator() {

    var el = document.getElementById('faqbot-typing');

    if (el && el.parentNode) { el.parentNode.removeChild(el); }

  }



  /* ── REMOVE ALL CHIPS ──────────────────────────────────── */

  function removeChips() {

    var all = messages.querySelectorAll('.faqbot-chips-wrap');

    for (var i = 0; i < all.length; i++) {

      if (all[i].parentNode) { all[i].parentNode.removeChild(all[i]); }

    }

  }



  /* ── SHOW QUESTION CHIPS ───────────────────────────────── */

  function showChips(faqs, isSubset) {

    removeChips();

    var wrap = document.createElement('div');

    wrap.className = 'faqbot-chips-wrap';

    faqs.forEach(function (faq) {

      var btn = document.createElement('button');

      btn.type = 'button';

      btn.className = 'faqbot-chip' + (askedIds.indexOf(faq.id) >= 0 ? ' faqbot-chip-asked' : '');

      btn.textContent = faq.question;

      btn.dataset.faqId = faq.id;

      btn.addEventListener('click', function () { handleChip(faq); });

      wrap.appendChild(btn);

    });

    messages.appendChild(wrap);

    scrollBottom();

    // Focus first chip

    var first = wrap.querySelector('.faqbot-chip');

    if (first && isSubset) { first.focus(); }

  }



  /* ── SHOW ACTION CHIPS ─────────────────────────────────── */

  function showActionChips() {

    removeChips();

    var wrap = document.createElement('div');

    wrap.className = 'faqbot-chips-wrap faqbot-action-chips';



    var askBtn = document.createElement('button');

    askBtn.type = 'button';

    askBtn.className = 'faqbot-chip faqbot-chip-action';

    askBtn.textContent = 'Ask another question';

    askBtn.addEventListener('click', function () { removeChips(); showChips(FAQS, true); });

    wrap.appendChild(askBtn);



    var rstBtn = document.createElement('button');

    rstBtn.type = 'button';

    rstBtn.className = 'faqbot-chip faqbot-chip-action';

    rstBtn.textContent = 'Restart';

    rstBtn.addEventListener('click', restartConversation);

    wrap.appendChild(rstBtn);



    messages.appendChild(wrap);

    scrollBottom();

  }



  /* ── HANDLE CHIP CLICK ─────────────────────────────────── */

  function handleChip(faq) {

    removeChips();

    addUserBubble(faq.question);

    if (askedIds.indexOf(faq.id) < 0) { askedIds.push(faq.id); }

    addTypingIndicator();



    setTimeout(function () {

      removeTypingIndicator();

      deliverAnswer(faq);

    }, reducedMotion ? 0 : 600);

  }



  /* ── DELIVER ANSWER ────────────────────────────────────── */

  function deliverAnswer(faq) {

    if (faq.htmlAnswer) {

      addBotBubble(faq.htmlAnswer, true);

    } else {

      addBotBubble(faq.answer, false);

    }

    // "View Admission Procedure" link for Q1, Q2, Q4

    if (faq.showAdmissionsLink) {

      addAdmissionsLink();

    }

    // If all 5 answered → closing message + contact

    if (askedIds.length >= FAQS.length) {

      addBotBubble('Is there anything else? You can also contact the school office.', false);

      addContactActions();

    } else {

      showActionChips();

    }

  }



  /* ── ADMISSIONS LINK ───────────────────────────────────── */

  function addAdmissionsLink() {

    var wrap = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-bot';

    var btn  = document.createElement('button');

    btn.type = 'button';

    btn.className = 'faqbot-link-btn';

    btn.textContent = 'View the Admission Procedure';

    btn.addEventListener('click', function () {

      closePanel();

      window.location.href = 'admission-process.html';

    });

    wrap.appendChild(btn);

    messages.appendChild(wrap);

    scrollBottom();

  }



  /* ── CONTACT ACTIONS ───────────────────────────────────── */

  function addContactActions() {

    var wrap    = document.createElement('div');

    wrap.className = 'faqbot-msg faqbot-msg-bot';

    var actions = document.createElement('div');

    actions.className = 'faqbot-contact-actions';



    var callA = document.createElement('a');

    callA.className = 'faqbot-contact-btn';

    callA.href      = 'tel:+917720043214';

    callA.textContent = 'Call  +91 772 004 3214';



    var emailA = document.createElement('a');

    emailA.className = 'faqbot-contact-btn';

    emailA.href      = 'mailto:dmtsquery@gmail.com';

    emailA.textContent = 'Email dmtsquery@gmail.com';



    var contactBtn = document.createElement('button');

    contactBtn.type = 'button';

    contactBtn.className = 'faqbot-contact-btn';

    contactBtn.textContent = 'Contact page';

    contactBtn.addEventListener('click', function () {

      closePanel();

      window.location.href = 'contact-us.html';

    });



    var note = document.createElement('p');

    note.className = 'faqbot-contact-note';

    note.textContent = 'Office help for the admission form: 10:00 a.m. to 12:00 noon.';



    actions.appendChild(callA);

    actions.appendChild(emailA);

    actions.appendChild(contactBtn);

    actions.appendChild(note);

    wrap.appendChild(actions);

    messages.appendChild(wrap);

    scrollBottom();

  }



  /* ── FALLBACK ──────────────────────────────────────────── */

  function showFallback() {

    addBotBubble("I’m sorry, I only have answers to the questions listed here. For anything else, please contact the school office.", false);

    addContactActions();

    showActionChips();

  }



  /* ── KEYWORD MATCHING ──────────────────────────────────── */

  function matchKeywords(text) {

    var lower   = text.toLowerCase().trim();

    var matched = [];

    for (var i = 0; i < FAQS.length; i++) {

      var faq = FAQS[i];

      for (var j = 0; j < faq.keywords.length; j++) {

        if (lower.indexOf(faq.keywords[j]) !== -1) {

          matched.push(faq);

          break;

        }

      }

    }

    return matched;

  }



  /* ── HANDLE TEXT INPUT ─────────────────────────────────── */

  function handleSend() {

    var raw = inputEl.value.trim();

    if (!raw) { return; }

    inputEl.value = '';

    removeChips();

    addUserBubble(raw); // textContent — safe



    var matched = matchKeywords(raw);

    addTypingIndicator();



    setTimeout(function () {

      removeTypingIndicator();

      if (matched.length === 1) {

        var faq = matched[0];

        if (askedIds.indexOf(faq.id) < 0) { askedIds.push(faq.id); }

        deliverAnswer(faq);

      } else if (matched.length > 1) {

        addBotBubble('I found a few questions that might help. Please choose one:', false);

        showChips(matched, true);

      } else {

        showFallback();

      }

    }, reducedMotion ? 0 : 600);

  }



  sendBtn.addEventListener('click', handleSend);

  inputEl.addEventListener('keydown', function (e) {

    if (e.key === 'Enter') { e.preventDefault(); handleSend(); }

  });



  /* ── RESTART ───────────────────────────────────────────── */

  function restartConversation() {

    askedIds = [];

    while (messages.firstChild) { messages.removeChild(messages.firstChild); }

    showGreeting();

  }

  restartBtn.addEventListener('click', restartConversation);



  /* ── SCROLL TO BOTTOM ──────────────────────────────────── */

  function scrollBottom() {

    messages.scrollTop = messages.scrollHeight;

  }



  /* ── PULSE RING (first 6 s, then removed) ──────────────── */

  if (!reducedMotion) {

    launcher.classList.add('faqbot-pulse');

    setTimeout(function () {

      launcher.classList.remove('faqbot-pulse');

    }, 6000);

  }



}());



/* <script> (original line 50904) */
if (SCHOOL_PAGE === "home") {
window.admissionImageSchedule = { start: '2026-11-14', end: '2026-11-30' };
}

/* <script> (original line 50924) */
if (SCHOOL_PAGE === "home") {


(function () {

  'use strict';

  /* ── SETTINGS ───────────────────────────────────────────── */

  var APPLY_URL     = 'https://mocc.myclassboard.com/OnlineApplicationForm_New/513FDD72-578A-4369-BEB6-2846A07B26BF';

  var SHOW_AFTER_MS = 1500;



  /* ── GUARDS ─────────────────────────────────────────────── */

  /* Homepage-only initialization is guarded by SCHOOL_PAGE. */



  /* ── ELEMENTS ───────────────────────────────────────────── */

  var backdrop = document.getElementById('admpop-backdrop');

  var card     = document.getElementById('admpop-card');

  var closeBtn = document.getElementById('admpop-close');

  var procBtn  = document.getElementById('admpop-procedure');



  if (!backdrop || !card || !closeBtn || !procBtn) return;



  /* ── FOCUS TRAP ─────────────────────────────────────────── */

  var FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';



  function trapFocus(e) {

    if (e.key !== 'Tab') return;

    var nodes = Array.prototype.slice.call(card.querySelectorAll(FOCUSABLE));

    if (!nodes.length) return;

    var first = nodes[0], last = nodes[nodes.length - 1];

    if (e.shiftKey) {

      if (document.activeElement === first) { e.preventDefault(); last.focus(); }

    } else {

      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }

    }

  }



  /* ── OPEN ───────────────────────────────────────────────── */

  var previousFocus, previousOverflow;
  function fitPopup() {
    if (backdrop.hidden) return;
    card.style.zoom = '1';
    var availableHeight = (window.visualViewport ? window.visualViewport.height : window.innerHeight) - 32;
    card.style.zoom = String(Math.min(1, availableHeight / card.offsetHeight));
  }
  window.addEventListener('resize', fitPopup);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', fitPopup);
  function openPopup() {
    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;

    backdrop.hidden = false;
    fitPopup();

    document.body.style.overflow = 'hidden';

    backdrop.addEventListener('keydown', trapFocus);

    requestAnimationFrame(function () {

      requestAnimationFrame(function () {

        backdrop.classList.add('admpop-visible');

      });

    });

    setTimeout(function () { closeBtn.focus(); }, 120);

  }



  /* ── CLOSE ──────────────────────────────────────────────── */

  function closePopup() {

    backdrop.classList.remove('admpop-visible');

    setTimeout(function () {

      backdrop.hidden = true;

      document.body.style.overflow = previousOverflow || '';
      if (previousFocus && previousFocus.isConnected) previousFocus.focus();

      backdrop.removeEventListener('keydown', trapFocus);

    }, 300);


  }



  /* ── EVENTS ─────────────────────────────────────────────── */

  closeBtn.addEventListener('click', closePopup);



  backdrop.addEventListener('click', function (e) {

    if (e.target === backdrop) closePopup();

  });



  document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape' && !backdrop.hidden) closePopup();

  });



  procBtn.addEventListener('click', function () {

    window.location.href = 'admission-process.html';

    closePopup();

  });



  document.getElementById('admpop-tour-form').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.assign(APPLY_URL);
  });
  /* ── AUTO-OPEN ──────────────────────────────────────────── */

  function imagePopupActive() {
    var schedule = window.admissionImageSchedule;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(schedule.start) || !/^\d{4}-\d{2}-\d{2}$/.test(schedule.end)) return false;
    var start = Date.parse(schedule.start + 'T00:00:00+05:30');
    var end = Date.parse(schedule.end + 'T00:00:00+05:30');
    var now = Date.now();
    return Number.isFinite(start) && Number.isFinite(end) && start <= end && now >= start && now < end + 86400000;
  }
  function openImagePopup() {
    var overlay = document.getElementById('admpop-image-backdrop');
    var button = document.getElementById('admpop-image-close');
    var lastFocus = document.activeElement, oldOverflow = document.body.style.overflow;
    var closing = false;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ if(!closing){ overlay.classList.add('admpop-visible'); button.focus(); } }); });
    function closeImage() {
      if (closing) return;
      closing = true;
      overlay.classList.remove('admpop-visible');
      document.removeEventListener('keydown', onKey);
      setTimeout(function(){ overlay.hidden = true; document.body.style.overflow = oldOverflow; if(lastFocus && lastFocus.isConnected) lastFocus.focus(); }, 480);
    }
    function onKey(e) { if(e.key === 'Escape') closeImage(); else if(e.key === 'Tab'){e.preventDefault();button.focus();} }
    button.onclick = closeImage;
    overlay.onclick = function(e){ if(e.target === overlay) closeImage(); };
    document.addEventListener('keydown', onKey);
  }
  setTimeout(function(){ if(imagePopupActive()) openImagePopup(); else openPopup(); }, SHOW_AFTER_MS);



}());


}

/* <script id="mts-achievers-script"> (original line 52105) */
if (SCHOOL_PAGE === "home") {

(function () {
  'use strict';

  /* ==========================================================
     STUDENT PHOTO PATHS
     Update these seven paths to replace the student photographs.
     ========================================================== */
  var PHOTO_PATHS = Object.freeze({
    anvay: 'images/anvay.png',
    shantanu: 'images/shantanu.png',
    namish: 'images/namish.png',
    priya: 'images/priya.png',
    aarohi: 'images/aarohi.png',
    arnav: 'images/arnav.png',
    aarav: 'images/aarav.png'
  });

  /* DATA */
  var ACHIEVERS = [
    { id:'anvay', rank:1, rankLabel:'1st Rank', score:98.6, scoreDisplay:'98.6%', name:'Anvay Aniruddha Ashtekar', initials:'AA', joint:false, photo:PHOTO_PATHS.anvay },
    { id:'shantanu', rank:2, rankLabel:'2nd Rank', score:98.0, scoreDisplay:'98.0%', name:'Shantanu Santosh Shinde', initials:'SS', joint:false, photo:PHOTO_PATHS.shantanu },
    { id:'namish', rank:3, rankLabel:'3rd Rank', score:97.6, scoreDisplay:'97.6%', name:'Namish Mahesh Kamble', initials:'NM', joint:false, photo:PHOTO_PATHS.namish },
    { id:'priya', rank:4, rankLabel:'Joint 4th Rank', score:97.0, scoreDisplay:'97.0%', name:'Priya Kevalaprasad Mourya', initials:'PM', joint:true, photo:PHOTO_PATHS.priya },
    { id:'aarohi', rank:4, rankLabel:'Joint 4th Rank', score:97.0, scoreDisplay:'97.0%', name:'Aarohi Kalpak Sule', initials:'AS', joint:true, photo:PHOTO_PATHS.aarohi },
    { id:'arnav', rank:5, rankLabel:'Joint 5th Rank', score:96.4, scoreDisplay:'96.40%', name:'Arnav Viraj Dessai', initials:'AD', joint:true, photo:PHOTO_PATHS.arnav },
    { id:'aarav', rank:5, rankLabel:'Joint 5th Rank', score:96.4, scoreDisplay:'96.40%', name:'Aarav Amit Dhande', initials:'AD', joint:true, photo:PHOTO_PATHS.aarav }
  ];

  var root = document.getElementById('mts-achievers-root');
  var shell = document.getElementById('mts-drawer-shell');
  var drawer = document.getElementById('mts-achievers-drawer');
  var widget = document.getElementById('mts-achievers-widget');
  var closeButton = document.getElementById('mts-drawer-close');
  var backdrop = document.getElementById('mts-drawer-backdrop');
  var results = document.getElementById('mts-achiever-results');
  var canvas = document.getElementById('mts-sparkle-canvas');
  var canvasContext = canvas.getContext('2d');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var lastFocusedElement = null;
  var drawerOpen = false;
  var sparkleFrame = 0;

  function crownSvg() {
    return [
      '<svg viewBox="0 0 32 32" width="25" height="25" fill="none" aria-hidden="true">',
      '<path d="m4 9 6.5 7L16 7l5.5 9L28 9l-2.5 14h-19L4 9Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
      '<path d="M7 26h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
      '</svg>'
    ].join('');
  }

  function photoMarkup(student) {
    switch (student.id) {
      case 'anvay':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Anvay Aniruddha Ashtekar → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.anvay + '" alt="Photo of Anvay Aniruddha Ashtekar" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'shantanu':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Shantanu Santosh Shinde → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.shantanu + '" alt="Photo of Shantanu Santosh Shinde" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'namish':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Namish Mahesh Kamble → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.namish + '" alt="Photo of Namish Mahesh Kamble" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'priya':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Priya Kevalaprasad Mourya → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.priya + '" alt="Photo of Priya Kevalaprasad Mourya" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'aarohi':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Aarohi Kalpak Sule → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.aarohi + '" alt="Photo of Aarohi Kalpak Sule" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'arnav':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Arnav Viraj Dessai → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.arnav + '" alt="Photo of Arnav Viraj Dessai" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      case 'aarav':
        return '<!-- ADD/REPLACE STUDENT PHOTO: Aarav Amit Dhande → change the src below to your image path, or delete this <img> -->' +
          '<img src="' + PHOTO_PATHS.aarav + '" alt="Photo of Aarav Amit Dhande" class="mts-student-photo" loading="lazy" onerror="this.hidden=true">';
      default:
        return '';
    }
  }

  function avatarMarkup(student) {
    return [
      '<div class="mts-avatar-wrap"><div class="mts-avatar-inner">',
      '<span class="mts-initials-fallback" aria-hidden="true">', student.initials, '</span>',
      photoMarkup(student),
      '</div></div>'
    ].join('');
  }

  function podiumCardMarkup(student, index) {
    return [
      '<article class="mts-achiever-card mts-podium-card mts-rank-', student.rank,
      '" style="--mts-delay:', index * 80, 'ms" aria-label="', student.rankLabel, ': ', student.name, ', ', student.scoreDisplay, '">',
      '<div class="mts-crown-badge" aria-hidden="true">', crownSvg(), '</div>',
      avatarMarkup(student),
      '<h3 class="mts-student-name">', student.name, '</h3>',
      '<div class="mts-rank-ribbon">', student.rankLabel, '</div>',
      '<div class="mts-progress-wrap" data-mts-progress="', student.score,
      '" data-mts-display="', student.scoreDisplay, '" aria-label="', student.scoreDisplay, '">',
      '<svg class="mts-progress-svg" viewBox="0 0 120 120" aria-hidden="true">',
      '<circle class="mts-progress-track" cx="60" cy="60" r="52"></circle>',
      '<circle class="mts-progress-value" cx="60" cy="60" r="52"></circle>',
      '</svg><span class="mts-progress-number">0%</span></div>',
      '</article>'
    ].join('');
  }

  function jointStudentMarkup(student) {
    return [
      '<div class="mts-joint-student">',
      avatarMarkup(student),
      '<h4 class="mts-student-name">', student.name, '</h4>',
      '<span class="mts-rank-chip">', student.rankLabel, ' · ', student.scoreDisplay, '</span>',
      '</div>'
    ].join('');
  }

  function jointCardMarkup(rank, students, index) {
    var score = students[0].scoreDisplay;
    var label = 'Joint ' + rank + 'th Rank';
    var secondStudent = students.length > 1
      ? '<div class="mts-joint-divider" aria-hidden="true">&amp;</div>' + jointStudentMarkup(students[1])
      : '';

    return [
      '<article class="mts-achiever-card mts-joint-card" style="--mts-delay:', (index + 3) * 80,
      'ms" aria-label="', label, ', ', score, '">',
      '<div class="mts-joint-header"><h3>', label, '</h3><span class="mts-score-badge">', score, '</span></div>',
      '<div class="mts-joint-students">', jointStudentMarkup(students[0]), secondStudent, '</div>',
      '</article>'
    ].join('');
  }

  function emptyStateMarkup() {
    return [
      '<div class="mts-empty-state"><div>',
      '<svg viewBox="0 0 64 64" width="54" height="54" fill="none" aria-hidden="true" style="color:var(--color-secondary)">',
      '<circle cx="28" cy="28" r="17" stroke="currentColor" stroke-width="4"/>',
      '<path d="m41 41 13 13M21 28h14" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>',
      '</svg><h3>No achievers found</h3><p>Try another name or choose a different filter.</p>',
      '</div></div>'
    ].join('');
  }

  function renderAchievers() {
    var filtered = ACHIEVERS.slice();

    if (!filtered.length) {
      results.innerHTML = emptyStateMarkup();
      return;
    }

    results.innerHTML = '<div class="mts-podium-grid mts-all-students-grid">' +
      filtered.map(podiumCardMarkup).join('') +
      '</div>';
    if (drawerOpen) requestAnimationFrame(animateProgressRings);
  }

  function animateProgressRings() {
    var circumference = 2 * Math.PI * 52;
    root.querySelectorAll('[data-mts-progress]').forEach(function (progress) {
      var score = Number(progress.dataset.mtsProgress);
      var display = progress.dataset.mtsDisplay;
      var ring = progress.querySelector('.mts-progress-value');
      var number = progress.querySelector('.mts-progress-number');
      var targetOffset = circumference * (1 - score / 100);
      var decimalPlaces = display.indexOf('.') >= 0 ? display.split('.')[1].replace('%', '').length : 0;

      ring.style.strokeDasharray = String(circumference);
      ring.style.strokeDashoffset = String(circumference);
      number.textContent = reducedMotion.matches ? display : '0%';
      requestAnimationFrame(function () { ring.style.strokeDashoffset = String(targetOffset); });

      if (reducedMotion.matches) return;

      var duration = 1300;
      var start = performance.now();
      function countFrame(now) {
        var elapsed = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - elapsed, 3);
        number.textContent = (score * eased).toFixed(decimalPlaces) + '%';
        if (elapsed < 1) requestAnimationFrame(countFrame);
        else number.textContent = display;
      }
      requestAnimationFrame(countFrame);
    });
  }

  function resizeCanvas() {
    var rect = drawer.getBoundingClientRect();
    var scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * scale));
    canvas.height = Math.max(1, Math.floor(rect.height * scale));
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    canvasContext.setTransform(scale, 0, 0, scale, 0, 0);
  }

  function launchSparkles() {
    cancelAnimationFrame(sparkleFrame);
    if (reducedMotion.matches) return;
    resizeCanvas();

    var styles = getComputedStyle(root);
    var colors = [
      styles.getPropertyValue('--color-secondary').trim(),
      styles.getPropertyValue('--gold-light').trim(),
      styles.getPropertyValue('--color-cta').trim()
    ];

    var particles = Array.from({ length: 42 }, function (_, index) {
      return {
        x: drawer.clientWidth * (.32 + Math.random() * .55),
        y: 50 + Math.random() * 100,
        vx: (Math.random() - .5) * 4.8,
        vy: -1.5 - Math.random() * 4.8,
        gravity: .08 + Math.random() * .05,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - .5) * .18,
        size: 2.5 + Math.random() * 4,
        alpha: .78 + Math.random() * .22,
        color: colors[index % colors.length]
      };
    });

    var start = performance.now();
    function draw(now) {
      canvasContext.clearRect(0, 0, drawer.clientWidth, drawer.clientHeight);
      particles.forEach(function (particle) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.rotation += particle.spin;
        particle.alpha *= .986;
        canvasContext.save();
        canvasContext.globalAlpha = Math.max(0, particle.alpha);
        canvasContext.translate(particle.x, particle.y);
        canvasContext.rotate(particle.rotation);
        canvasContext.fillStyle = particle.color;
        canvasContext.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 1.7);
        canvasContext.restore();
      });
      if (now - start < 1700) sparkleFrame = requestAnimationFrame(draw);
      else canvasContext.clearRect(0, 0, drawer.clientWidth, drawer.clientHeight);
    }
    sparkleFrame = requestAnimationFrame(draw);
  }

  function focusableElements() {
    return Array.from(drawer.querySelectorAll(
      'button:not([disabled]):not([hidden]),input:not([disabled]),[href],[tabindex]:not([tabindex="-1"])'
    )).filter(function (element) { return element.offsetParent !== null; });
  }

  function trapFocus(event) {
    if (!drawerOpen || event.key !== 'Tab') return;
    var focusable = focusableElements();
    if (!focusable.length) {
      event.preventDefault();
      drawer.focus();
      return;
    }
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function openDrawer() {
    if (drawerOpen || root.hidden) return;
    drawerOpen = true;
    lastFocusedElement = document.activeElement;
    document.body.classList.add('mts-achievers-open');
    shell.classList.add('is-open');
    shell.setAttribute('aria-hidden', 'false');
    widget.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(function () {
      closeButton.focus();
      animateProgressRings();
      launchSparkles();
    });
  }

  function closeDrawer(restoreFocus) {
    if (!drawerOpen) return;
    drawerOpen = false;
    shell.classList.remove('is-open');
    shell.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mts-achievers-open');
    widget.setAttribute('aria-expanded', 'false');
    cancelAnimationFrame(sparkleFrame);
    if (restoreFocus !== false && lastFocusedElement && lastFocusedElement.focus) lastFocusedElement.focus();
  }

  widget.addEventListener('click', openDrawer);
  closeButton.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && drawerOpen) {
      closeDrawer();
      return;
    }
    trapFocus(event);
  });

  window.addEventListener('resize', function () {
    if (drawerOpen) resizeCanvas();
  });


  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener('change', function () {
      if (drawerOpen) animateProgressRings();
    });
  }

  renderAchievers();
  root.hidden = false;
}());

}

/* Standalone page navigation uses the original active class. */
function setStandaloneNav() {
  const file = SCHOOL_ROUTES[SCHOOL_PAGE]; if (!file) return;
  document.querySelectorAll(".nav-links, #mobileMenu").forEach(menu => {
    menu.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
    menu.querySelectorAll("a[href]").forEach(link => { if (link.getAttribute("href") !== file) return; link.classList.add("active");
      let parent = link.parentElement; while (parent && parent !== menu) { if (parent.matches("li.dropdown, li.dropdown-submenu, li.has-submenu")) parent.querySelector(":scope > a")?.classList.add("active"); if (parent.matches(".mob-dropdown")) parent.querySelector(".mob-dropdown-toggle")?.classList.add("active"); parent = parent.parentElement; }
    });
  });
}
document.addEventListener("DOMContentLoaded", setStandaloneNav);

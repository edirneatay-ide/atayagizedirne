(function () {
  const C = CONFIG;

  /* ── NAV ── */
  document.getElementById("nav-left").innerHTML = '<img class="sig-img" src="images/signature-ata.png" width="291" height="179" alt="Ata">';
  // Right word = first word of nameRight
  document.getElementById("nav-right").innerHTML = '<img class="sig-img" src="images/signature-yagiz-edirne.png" width="1022" height="179" alt="Yağız Edirne">';

  /* ── HERO STAMP ── */
  document.getElementById("hero-stamp").textContent = C.hero.stamp || "";

  /* ── HERO TAGLINES ── */
  const taglineEl = document.getElementById("hero-taglines");
  C.studio.taglines.forEach((line) => {
    const p = document.createElement("p");
    p.className = "hero-tagline";
    p.textContent = line;
    taglineEl.appendChild(p);
  });

  /* keep the hero image below the intro text, however long it runs */
  function fitHeroImage() {
    const hero = document.getElementById("hero");
    const wrap = document.getElementById("hero-image-wrap");
    const needed = taglineEl.getBoundingClientRect().bottom - hero.getBoundingClientRect().top + 28;
    const base = hero.offsetHeight * (window.innerWidth <= 860 ? 0.38 : 0.30);
    wrap.style.top = Math.max(base, needed) + "px";
  }
  document.fonts.ready.then(fitHeroImage);
  window.addEventListener("load", fitHeroImage);
  window.addEventListener("resize", fitHeroImage);
  fitHeroImage();

  /* ── HERO HEADLINES ── */
  const aboveEl  = document.getElementById("hero-headlines-above");
  const overEl   = document.getElementById("hero-headlines-over");
  const lines    = C.hero.lines;
  const splitAt  = lines.length - 1; // last line goes ghost over image

  lines.forEach((line, i) => {
    const span = document.createElement("span");
    if (i < splitAt) {
      span.className = "hero-hl";
      span.textContent = line + (i < splitAt - 1 ? " ," : "");
      aboveEl.appendChild(span);
    } else {
      span.className = "hero-hl-ghost";
      span.textContent = line;
      overEl.appendChild(span);
    }
  });

  /* ── HERO IMAGE ── */
  const heroImg = document.getElementById("hero-img");
  if (C.hero.video) {
    // main video: muted autoplay loop, fills the same area as the picture
    const vid = document.createElement("video");
    vid.src = C.hero.video;
    if (C.hero.poster) vid.poster = C.hero.poster;
    vid.muted = true;
    vid.defaultMuted = true;
    vid.loop = true;
    vid.autoplay = true;
    vid.playsInline = true;
    vid.setAttribute("playsinline", "");
    vid.setAttribute("muted", "");
    vid.preload = "auto";
    heroImg.replaceWith(vid);
    const tryPlay = () => { const p = vid.play(); if (p && p.catch) p.catch(() => {}); };
    tryPlay();
    document.addEventListener("click", tryPlay, { once: true });
  } else if (C.hero.image) {
    heroImg.src = C.hero.image;
    heroImg.alt = lines[0] || "Hero image";
  } else {
    heroImg.remove();
  }

  /* ── HERO CREDITS ── */
  const creditsEl = document.getElementById("hero-credits");
  C.hero.credits.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    creditsEl.appendChild(p);
  });

  /* ── WORKS LINK ── (sits in the oval of the sketchbook picture) */
  if (C.projects[0]) document.getElementById("book-link-title").textContent = C.projects[0].title;

  /* ── ABOUT ── */
  // poem in the top right corner of the picture, in black on the empty wall
  if (C.about.quote) {
    const q = C.about.quote;
    const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const bq = document.createElement("blockquote");
    bq.className = "about-poem";
    bq.innerHTML = '"' + q.lines.map(esc).join("<br>") + '"' + (q.author ? '<span class="about-poem-author">— ' + esc(q.author) + "</span>" : "");
    document.getElementById("about-figure").appendChild(bq);
  }

  // black placeholder until a picture is set in config.js (about.image)
  if (C.about.image) {
    const img = document.createElement("img");
    img.src = C.about.image;
    img.alt = "Ata Yağız Edirne";
    document.getElementById("about-photo").appendChild(img);
  }

  const aboutCredits = document.getElementById("about-credits");
  C.about.credits.forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    aboutCredits.appendChild(p);
  });

  /* ── FOOTER ── */
  document.getElementById("footer-name").textContent =
    C.footer.name || (C.studio.nameLeft + " " + C.studio.nameRight);
  document.getElementById("footer-meta").innerHTML =
    C.footer.meta.join("<br>");

  /* ── SCROLL FADE-IN ── */
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
    { threshold: 0.1 }
  );
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  /* ── PARALLAX HERO IMAGE ── */
  const heroWrap = document.getElementById("hero-image-wrap");
  window.addEventListener("scroll", () => {
    heroWrap.style.transform = `translateY(${window.scrollY * 0.12}px)`;
  }, { passive: true });

/* ── CONTACT LINK SLIDE ANIMATION ── */
  const contactLink = document.querySelector('a[href="contact.html"]');

  if (contactLink) {
    
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.href;
      const rightEl = document.getElementById('nav-right');
      const leftEl  = document.getElementById('nav-left');
      const rightRect = rightEl.getBoundingClientRect();
      const leftRect  = leftEl.getBoundingClientRect();
      const leftImg = leftEl.querySelector('img');
      const sigH = leftImg ? leftImg.getBoundingClientRect().height : leftRect.height;
      const ataRatio = (leftImg && leftImg.naturalWidth) ? leftImg.naturalWidth / leftImg.naturalHeight : 291 / 179;
      // where the name sits on the contact page: after the "Ata" image plus the gap used there (0.25 × image height)
      const targetLeft = leftRect.left + sigH * ataRatio + sigH * 0.25;
      const targetTop  = leftRect.top;

      const clone = rightEl.cloneNode(true);
      clone.style.cssText = [
        'position:fixed',
        'top:' + rightRect.top + 'px',
        'left:' + rightRect.left + 'px',
        'margin:0',
        'z-index:9999',
        'pointer-events:none',
        'transition:left 0.8s cubic-bezier(0.77,0,0.18,1), top 0.8s cubic-bezier(0.77,0,0.18,1)',
        'font-family:var(--font-display)',
        'font-weight:900',
        'font-size:' + getComputedStyle(rightEl).fontSize,
        'letter-spacing:' + getComputedStyle(rightEl).letterSpacing,
        'text-transform:uppercase',
        'line-height:1',
        'white-space:nowrap'
      ].join(';');
      document.body.appendChild(clone);
      clone.getBoundingClientRect(); // commit the start position so the transition always runs
      rightEl.style.visibility = 'hidden';

      requestAnimationFrame(() => requestAnimationFrame(() => {
        clone.style.left = targetLeft + 'px';
        clone.style.top  = targetTop  + 'px';
      }));

      setTimeout(() => { window.location.href = href; }, 780);
    });
  }

  /* ── NAV BACKGROUND ON SCROLL ── */
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      nav.style.background = "rgba(255,255,255,0.93)";
      nav.style.backdropFilter = "blur(6px)";
      nav.style.borderBottom = "1px solid rgba(0,0,0,0.08)";
    } else {
      nav.style.background = "transparent";
      nav.style.backdropFilter = "none";
      nav.style.borderBottom = "none";
    }
  }, { passive: true });

})();

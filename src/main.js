import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

$$('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));

/* ---------- Scroll suave ---------- */
let lenis;
if (!reduceMotion) {
  lenis = new Lenis({ lerp: 0.085 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
$$('a[href^="#"]').forEach((a) =>
  a.addEventListener('click', (e) => {
    const target = $(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: -52 });
    else target.scrollIntoView();
  })
);

document.fonts.ready.then(() => {
  initHero();
  initReveals();
  initStatement();
  initShowcase();
  initTimeline();
  initNavTheme();
  ScrollTrigger.refresh();
});
initCounters();
syncGithubCounts();
initGallery();

/* ---------- Nav clara sobre seções claras ---------- */
function initNavTheme() {
  const nav = $('.localnav');
  if (!nav || document.body.classList.contains('page-doc')) return;
  $$('[data-nav="light"]').forEach((sec) => {
    ScrollTrigger.create({ trigger: sec, start: 'top 60px', end: 'bottom 60px', onToggle: (st) => nav.classList.toggle('is-light', st.isActive) });
  });
}

/* ---------- Hero: o notebook sobe, cresce e troca de tela ---------- */
function initHero() {
  const hero = $('.hero');
  if (!hero) return;
  const mac = $('.mac');
  const shots = $$('.mac__shot');
  const captions = $$('.hero__caption');

  if (!reduceMotion) {
    const split = SplitText.create('.hero__title', { type: 'chars', charsClass: 'ch' });
    gsap.timeline()
      .from(split.chars, { yPercent: 60, opacity: 0, filter: 'blur(12px)', duration: 1.1, stagger: 0.035, ease: 'power3.out', clearProps: 'filter' })
      .from(['.hero__eyebrow', '.hero__sub'], { y: 20, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' }, '-=0.8')
      .from(mac, { y: 120, opacity: 0, duration: 1.4, ease: 'expo.out' }, '-=0.7');
  }

  let current = 0;
  const show = (i) => {
    if (i === current) return;
    current = i;
    shots.forEach((s, k) => s.classList.toggle('is-on', k === i));
    captions.forEach((c, k) => c.classList.toggle('is-on', k === i));
  };

  if (reduceMotion) return;

  // Escala final: o notebook ocupa a altura útil da tela, centralizado abaixo da nav
  const finalScale = () => Math.min(1, (window.innerHeight - 52 - 110) / mac.offsetHeight);
  const finalY = () => 52 + 30 - mac.offsetTop;

  gsap.timeline({
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: '+=260%',
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (st) => show(st.progress < 0.5 ? 0 : st.progress < 0.78 ? 1 : 2),
    },
  })
    .to('.hero__text', { y: -80, opacity: 0, ease: 'none', duration: 0.3 }, 0)
    .fromTo(mac, { scale: 0.8 }, { scale: finalScale, y: finalY, ease: 'power1.inOut', duration: 0.4 }, 0)
    .to('.hero__captions', { opacity: 1, ease: 'none', duration: 0.1 }, 0.3)
    .to({}, { duration: 0.6 });
}

/* ---------- Títulos de seção: linhas sobem ---------- */
function initReveals() {
  if (reduceMotion) return;
  $$('.reveal').forEach((el) => {
    const s = SplitText.create(el, { type: 'lines', linesClass: 'split-line', mask: 'lines' });
    gsap.from(s.lines, { yPercent: 100, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
  });
  $$('.fade-up').forEach((el) => {
    gsap.from(el, { y: 50, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
  });
  gsap.utils.toArray('.tile').forEach((tile, i) => {
    gsap.from(tile, { y: 80, opacity: 0, scale: 0.96, duration: 1.1, ease: 'expo.out', delay: (i % 3) * 0.08, scrollTrigger: { trigger: tile, start: 'top 92%' } });
  });
  const closing = $('.closing__title');
  if (closing) gsap.from(closing, { scale: 0.86, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.closing', start: 'top 85%', end: 'center center', scrub: true } });
}

/* ---------- Manifesto: palavras acendem ---------- */
function initStatement() {
  const el = $('.statement__text');
  if (!el || reduceMotion) return;
  const words = SplitText.create(el, { type: 'words', wordsClass: 'w' }).words;
  gsap.to(words, {
    color: '#f5f5f7', stagger: 0.12, ease: 'none',
    scrollTrigger: { trigger: el, start: 'top 75%', end: 'bottom 40%', scrub: true },
  });
}

/* ---------- Contadores ---------- */
function initCounters() {
  $$('[data-count]').forEach((el) => {
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      // O valor é lido só ao entrar na tela, para aproveitar o total vindo da API do GitHub
      onEnter: () => {
        const end = Number(el.dataset.count);
        const obj = { v: el.hasAttribute('data-plain') ? end - 12 : 0 };
        gsap.to(obj, { v: end, duration: reduceMotion ? 0 : 1.8, ease: 'expo.out', onUpdate: () => (el.textContent = Math.round(obj.v)) });
      },
    });
  });
}

/* ---------- Galeria de destaques com autoplay e progresso ---------- */
function initGallery() {
  const gallery = $('.gallery');
  if (!gallery) return;
  const cards = $$('.gcard', gallery);
  const dotsWrap = $('.dotnav__dots');
  const playBtn = $('.dotnav__play');
  const DURATION = 5500;

  const dots = cards.map((card, i) => {
    const b = document.createElement('button');
    b.className = 'dot';
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.setAttribute('aria-label', `Destaque ${i + 1} de ${cards.length}`);
    b.addEventListener('click', () => { go(i); restart(); });
    dotsWrap.appendChild(b);
    return b;
  });

  let active = -1;
  let playing = !reduceMotion;
  let elapsed = 0;
  let last = 0;
  let visible = false;

  function setActive(i) {
    if (i === active) return;
    active = i;
    cards.forEach((c, k) => c.classList.toggle('is-active', k === i));
    dots.forEach((d, k) => {
      d.classList.toggle('is-active', k === i);
      d.setAttribute('aria-selected', k === i);
      d.style.setProperty('--progress', 0);
    });
  }

  function go(i) {
    const card = cards[i];
    const pad = parseFloat(getComputedStyle(gallery).scrollPaddingInlineStart) || 0;
    gallery.scrollTo({ left: card.offsetLeft - pad, behavior: reduceMotion ? 'auto' : 'smooth' });
    setActive(i);
  }

  function restart() { elapsed = 0; }

  function setPlaying(p) {
    playing = p;
    playBtn.innerHTML = p ? '<span class="i-pause"></span>' : '<span class="i-play"></span>';
    playBtn.setAttribute('aria-label', p ? 'Pausar' : 'Reproduzir');
  }

  playBtn.addEventListener('click', () => {
    if (!playing && active === cards.length - 1 && elapsed >= DURATION) { go(0); restart(); }
    setPlaying(!playing);
  });

  // Card ativo segue o scroll manual (arrastar / trackpad)
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting && e.intersectionRatio > 0.6) { setActive(cards.indexOf(e.target)); restart(); } });
  }, { root: gallery, threshold: [0.6] });
  cards.forEach((c) => io.observe(c));

  // Só roda o autoplay com a galeria visível
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.4 }).observe(gallery);

  function tick(now) {
    const dt = last ? now - last : 0;
    last = now;
    if (playing && visible && active >= 0) {
      elapsed += dt;
      dots[active].style.setProperty('--progress', Math.min(elapsed / DURATION, 1));
      if (elapsed >= DURATION) {
        if (active < cards.length - 1) { go(active + 1); restart(); }
        else setPlaying(false);
      }
    }
    requestAnimationFrame(tick);
  }

  setActive(0);
  setPlaying(playing);
  requestAnimationFrame(tick);

  gallery.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(Math.min(active + 1, cards.length - 1)); restart(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(Math.max(active - 1, 0)); restart(); }
  });
}

/* ---------- Projetos: a tela acompanha o capítulo ativo ---------- */
function initShowcase() {
  const chapters = $$('.chapter');
  if (!chapters.length) return;
  const screens = $$('.screen');
  const activate = (ch) => {
    chapters.forEach((c) => c.classList.toggle('is-active', c === ch));
    screens.forEach((s) => s.classList.toggle('is-on', s.dataset.screen === ch.dataset.target));
  };
  chapters.forEach((ch) => {
    ScrollTrigger.create({ trigger: ch, start: 'top 60%', end: 'bottom 60%', onToggle: (st) => st.isActive && activate(ch) });
  });
  activate(chapters[0]);
}

/* ---------- Trajetória: linha se preenche ---------- */
function initTimeline() {
  const tl = $('.timeline');
  if (!tl) return;
  gsap.to(tl, { '--fill': '100%', ease: 'none', scrollTrigger: { trigger: tl, start: 'top 75%', end: 'bottom 75%', scrub: true } });
  $$('.tl').forEach((item) => {
    ScrollTrigger.create({ trigger: item, start: 'top 75%', end: 'max', toggleClass: { targets: item, className: 'is-past' } });
    if (!reduceMotion) gsap.from(item.children, { x: 30, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 85%' } });
  });
}

window.addEventListener('load', () => ScrollTrigger.refresh());

/* ---------- Números: o total de repositórios vem da API pública do GitHub ---------- */
// O HTML já traz um valor de reserva; se a API falhar ou estourar o limite, ele continua valendo.
async function syncGithubCounts() {
  const el = $('[data-gh="public_repos"]');
  if (!el) return;
  try {
    const res = await fetch('https://api.github.com/users/D4NIELT0RRES');
    if (!res.ok) return;
    const { public_repos } = await res.json();
    if (Number.isFinite(public_repos) && public_repos > 0) el.dataset.count = public_repos;
  } catch { /* mantém o valor de reserva */ }
}

/* global React, ReactDOM, CONTENT,
   BgCanvas, ChBoot, ChOrigin, ChTimeline, ChNow, ChStats, ChStack, ChProjects, ChMission, ChLetters, ChContact,
   useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakColor */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lang": "it",
  "skin": "neon-green",
  "density": "regular",
  "glyphs": true,
  "scanlines": true
}/*EDITMODE-END*/;

// id order should match the nav order in content.jsx
const CHAPTERS = [
  'boot', 'origin', 'pivot', 'climb', 'now', 'stats', 'stack', 'projects', 'mission', 'letters', 'contact',
];

// Time HUD
function useClock() {
  const [t, setT] = React.useState(() => new Date());
  React.useEffect(() => {
    const iv = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(iv);
  }, []);
  const hh = String(t.getHours()).padStart(2, '0');
  const mm = String(t.getMinutes()).padStart(2, '0');
  const ss = String(t.getSeconds()).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}

// Track which chapter is the most-visible one (for sidenav + AVANTI)
function useActiveChapter() {
  const [active, setActive] = React.useState('boot');
  React.useEffect(() => {
    const sections = CHAPTERS.map(id => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;
    const visible = new Map();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        visible.set(e.target.id, e.intersectionRatio);
      }
      // pick the entry with highest ratio
      let best = 'boot';
      let bestVal = -1;
      visible.forEach((v, k) => { if (v > bestVal) { bestVal = v; best = k; } });
      setActive(best);
    }, { threshold: [0.15, 0.3, 0.5, 0.75] });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);
  return active;
}

// Track scroll progress for the bottom bar
function useScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return p;
}

function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: 'smooth' });
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const lang = t.lang;
  const active = useActiveChapter();
  const progress = useScrollProgress();
  const clock = useClock();

  // Apply skin via data-attribute on body
  React.useEffect(() => {
    document.body.dataset.skin = t.skin;
  }, [t.skin]);

  // Update document language for a11y
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Toggle scanlines
  const showScanlines = t.scanlines;

  // Find next chapter id for the AVANTI button
  const activeIdx = CHAPTERS.indexOf(active);
  const nextId = activeIdx >= 0 && activeIdx < CHAPTERS.length - 1 ? CHAPTERS[activeIdx + 1] : CHAPTERS[0];
  const nextLabel = lang === 'it'
    ? (activeIdx === CHAPTERS.length - 1 ? 'TORNA SU' : 'AVANTI')
    : (activeIdx === CHAPTERS.length - 1 ? 'BACK TO TOP' : 'NEXT');

  // Arrow-key navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
        const i = CHAPTERS.indexOf(active);
        if (i >= 0 && i < CHAPTERS.length - 1) {
          e.preventDefault();
          scrollTo(CHAPTERS[i + 1]);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const i = CHAPTERS.indexOf(active);
        if (i > 0) {
          e.preventDefault();
          scrollTo(CHAPTERS[i - 1]);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const hud = CONTENT.hud[lang];
  const navLabels = CONTENT.nav;

  return (
    <>
      <BgCanvas density={t.density === 'comfy' ? 1.4 : t.density === 'compact' ? 0.7 : 1} glyphs={t.glyphs} />
      <div className="bg-vignette"></div>
      {showScanlines && <div className="bg-scan"></div>}

      {/* HUD */}
      <header className="hud">
        <div className="hud-left">
          <span className="dot"></span>
          <span className="mono-tag">FC<span style={{ color: 'var(--kv-green)' }}>·</span>OS</span>
          <span className="sep">/</span>
          <span>{hud.role}</span>
        </div>
        <div className="hud-right">
          <span className="hud-time">{clock}</span>
          <span className="sep">/</span>
          <span>{hud.loc}</span>
          <span className="sep">/</span>
          <span className="lang-switch" role="tablist">
            <button className={lang === 'it' ? 'active' : ''} onClick={() => setTweak('lang', 'it')}>IT</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setTweak('lang', 'en')}>EN</button>
          </span>
        </div>
      </header>

      {/* Side nav (chapter dots) */}
      <nav className="sidenav" aria-label="chapters">
        {/* Group nav: nav array has the canonical 10 entries; we have an extra "stats" between now and stack — handle simply */}
        {[
          { id: 'boot',     it: 'INTRO',      en: 'INTRO' },
          { id: 'origin',   it: 'ORIGINE',    en: 'ORIGIN' },
          { id: 'pivot',    it: 'IL SALTO',   en: 'THE LEAP' },
          { id: 'climb',    it: 'LA SCALATA', en: 'THE CLIMB' },
          { id: 'now',      it: 'OGGI',       en: 'TODAY' },
          { id: 'stats',    it: 'NUMERI',     en: 'NUMBERS' },
          { id: 'stack',    it: 'STACK',      en: 'STACK' },
          { id: 'projects', it: 'PROGETTI',   en: 'PROJECTS' },
          { id: 'mission',  it: 'MISSIONE',   en: 'MISSION' },
          { id: 'letters',  it: 'INFLUENZE',  en: 'INFLUENCES' },
          { id: 'contact',  it: 'CONTATTI',   en: 'CONTACT' },
        ].map((n, i) => (
          <button
            key={n.id}
            className={`sidenav-item ${active === n.id ? 'active' : ''}`}
            onClick={() => scrollTo(n.id)}
            aria-label={n[lang]}
          >
            <span className="tick"></span>
            <span className="label">{String(i).padStart(2, '0')} · {n[lang]}</span>
          </button>
        ))}
      </nav>

      {/* Chapters */}
      <main>
        <ChBoot data={CONTENT.boot} lang={lang} active={active === 'boot'} />
        <ChOrigin data={CONTENT.origin} lang={lang} active={active === 'origin'} />
        <ChTimeline data={CONTENT.pivot} lang={lang} active={active === 'pivot'} id="pivot" label="02 The Leap" />
        <ChTimeline data={CONTENT.climb} lang={lang} active={active === 'climb'} id="climb" label="03 The Climb" />
        <ChNow data={CONTENT.now} lang={lang} active={active === 'now'} />
        <ChStats data={CONTENT.stats} lang={lang} active={active === 'stats'} />
        <ChStack data={CONTENT.stack} lang={lang} active={active === 'stack'} />
        <ChProjects data={CONTENT.projects} lang={lang} active={active === 'projects'} />
        <ChMission data={CONTENT.mission} lang={lang} active={active === 'mission'} onContact={() => scrollTo('contact')} />
        <ChLetters data={CONTENT.letters} lang={lang} active={active === 'letters'} />
        <ChContact data={CONTENT.contact} lang={lang} active={active === 'contact'} />
      </main>

      {/* Footer */}
      <footer className="foot">
        <span>{CONTENT.footer[lang].l}</span>
        <span>{CONTENT.footer[lang].m}</span>
        <span><span className="accent">{CONTENT.footer[lang].r}</span></span>
      </footer>

      {/* AVANTI button */}
      <button
        className="avanti"
        onClick={() => {
          if (activeIdx === CHAPTERS.length - 1) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            scrollTo(nextId);
          }
        }}
      >
        <span>{nextLabel}</span>
        <span className="arrow">↓</span>
      </button>

      {/* Progress bar */}
      <div className="progress"><div className="progress-bar" style={{ width: `${progress * 100}%` }}></div></div>

      {/* Tweaks */}
      <TweaksPanel title="Tweaks">
        <TweakSection label={lang === 'it' ? 'Lingua' : 'Language'} />
        <TweakRadio
          label={lang === 'it' ? 'Lingua' : 'Language'}
          value={t.lang}
          options={['it', 'en']}
          onChange={(v) => setTweak('lang', v)}
        />
        <TweakSection label={lang === 'it' ? 'Accento' : 'Accent'} />
        <TweakRadio
          label={lang === 'it' ? 'Colore' : 'Color'}
          value={t.skin}
          options={['neon-green', 'cobalt', 'warm', 'amber']}
          onChange={(v) => setTweak('skin', v)}
        />
        <TweakSection label={lang === 'it' ? 'Sfondo' : 'Background'} />
        <TweakRadio
          label={lang === 'it' ? 'Densità' : 'Density'}
          value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakToggle
          label={lang === 'it' ? 'Glifi fluttuanti' : 'Floating glyphs'}
          value={t.glyphs}
          onChange={(v) => setTweak('glyphs', v)}
        />
        <TweakToggle
          label={lang === 'it' ? 'Scanlines CRT' : 'CRT scanlines'}
          value={t.scanlines}
          onChange={(v) => setTweak('scanlines', v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

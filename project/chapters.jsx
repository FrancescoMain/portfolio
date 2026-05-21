/* global React */
// All chapter components for the portfolio.
// Each takes (data, lang) and renders into a .chapter section.

// ── helper: render mixed-array titles with accent/strike/br segments ──
function renderTitle(parts) {
  return parts.map((p, i) => {
    if (typeof p === 'string') return <React.Fragment key={i}>{p}</React.Fragment>;
    if (p.br) return <br key={i} />;
    if (p.accent) return <span key={i} className="accent">{p.accent}</span>;
    if (p.strike) return <span key={i} className="strike">{p.strike}</span>;
    return null;
  });
}

// ── helper: animated counter ──
function useCounter(target, active, duration = 1400) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    function tick(t) {
      const k = Math.min(1, (t - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - k, 3);
      setVal(Math.round(target * eased));
      if (k < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return val;
}

// ── helper: typewriter for boot mono ──
function useTypewriter(text, speed = 35, delay = 200) {
  const [out, setOut] = React.useState('');
  React.useEffect(() => {
    setOut('');
    let i = 0;
    const startT = setTimeout(() => {
      const iv = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(iv);
      }, speed);
    }, delay);
    return () => clearTimeout(startT);
  }, [text, speed, delay]);
  return out;
}

// ── icons (inline SVG) ──
const Icons = {
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  github: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  pin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  download: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>,
};

// ─────────────────────────────────────────────────────────────
// CHAPTER 00 — BOOT
// ─────────────────────────────────────────────────────────────
function ChBoot({ data, lang, active }) {
  const d = data[lang];
  const line = useTypewriter(`> ${d.pre}_`, 28, 350);
  const [roleIdx, setRoleIdx] = React.useState(0);
  React.useEffect(() => {
    const iv = setInterval(() => setRoleIdx(i => (i + 1) % d.role.length), 2400);
    return () => clearInterval(iv);
  }, [d.role.length]);

  return (
    <section id="boot" className={`boot ${active ? 'is-active' : ''}`} data-screen-label="00 Intro">
      <div className="boot-mono">
        {line}<span className="cursor"></span>
      </div>
      <h1 className="boot-name fade-up">
        {d.first} <span className="accent">{d.last}</span>
      </h1>
      <div className="boot-role fade-up d2">
        <span>{d.role[roleIdx]}</span>
        <span className="pip"></span>
        <span style={{ color: 'var(--kv-green)' }}>NAPOLI · IT</span>
      </div>
      <div className="boot-quote fade-up d4">
        "{d.quote}"
        <span className="author">— {d.author}</span>
      </div>
      <div className="boot-scroll-hint">
        <span>{d.hint}</span>
        <span className="line"></span>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 01 — ORIGIN
// ─────────────────────────────────────────────────────────────
function ChOrigin({ data, lang, active }) {
  const d = data[lang];
  return (
    <section id="origin" className={`chapter ${active ? 'is-active' : ''}`} data-screen-label="01 Origin">
      <div className="chapter-inner">
        <div className="origin-grid">
          <div className="fade-up">
            <div className="chapter-tag">
              <span>{d.tag}</span>
            </div>
            <h2 className="chapter-title">{renderTitle(d.title)}</h2>
            <p className="chapter-lead">{d.lead}</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px', maxWidth: 480 }}>
              {d.bullets.map(([l, v], i) => (
                <li key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr',
                  gap: 16,
                  padding: '10px 0',
                  borderBottom: '1px dashed var(--kv-hairline)',
                  fontFamily: 'var(--kv-font-mono)',
                  fontSize: 12,
                }}>
                  <span style={{ color: 'var(--kv-text-muted)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase' }}>{l}</span>
                  <span style={{ color: 'var(--kv-white)' }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-up d2">
            <div className="origin-photo-frame">
              <img src="assets/francesco.jpg" alt="Francesco Cesarano" />
              <span className="origin-photo-corner tl"></span>
              <span className="origin-photo-corner tr"></span>
              <span className="origin-photo-corner bl"></span>
              <span className="origin-photo-corner br"></span>
              <div className="origin-photo-meta">
                <span>{d.meta.left}</span>
                <span>{d.meta.right}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 02 — PIVOT  &  CHAPTER 03 — CLIMB
// ─────────────────────────────────────────────────────────────
function ChTimeline({ data, lang, active, id, label }) {
  const d = data[lang];
  return (
    <section id={id} className={`chapter ${active ? 'is-active' : ''}`} data-screen-label={label}>
      <div className="chapter-inner">
        <div className="fade-up">
          <div className="chapter-tag"><span>{d.tag}</span></div>
          <h2 className="chapter-title">{renderTitle(d.title)}</h2>
          <p className="chapter-lead">{d.lead}</p>
        </div>
        <div className="timeline">
          {d.items.map((it, i) => (
            <div key={i} className={`tl-item fade-up d${i + 1}`}>
              <div className="tl-year">
                <span>{it.year}</span>
                {it.month && <span className="month">{it.month}</span>}
              </div>
              <div className="tl-body">
                <h3>{it.title}</h3>
                <div className="tl-co">
                  <span className="badge">{it.co}</span>
                </div>
                <p>{it.body}</p>
                <div>
                  {it.tags.map((t, j) => <span key={j} className="tl-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 04 — NOW (ACCENTURE)
// ─────────────────────────────────────────────────────────────
function ChNow({ data, lang, active }) {
  const d = data[lang];
  return (
    <section id="now" className={`chapter ${active ? 'is-active' : ''}`} data-screen-label="04 Today">
      <div className="chapter-inner">
        <div className="fade-up">
          <div className="chapter-tag"><span>{d.tag}</span></div>
          <h2 className="chapter-title">{renderTitle(d.title)}</h2>
          <p className="chapter-lead">{d.lead}</p>
        </div>
        <div className="accenture-grid">
          <blockquote className="accenture-quote fade-up d2">{d.quote}</blockquote>
          <div className="accenture-side fade-up d3">
            {d.side.map((s, i) => (
              <div key={i} className="tag-strip">
                <span>{s.l}</span>
                <span className="val">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 05 — STATS
// ─────────────────────────────────────────────────────────────
function StatCard({ item, active, idx }) {
  const v = useCounter(item.n, active, 1500);
  return (
    <div className={`stat-card fade-up d${idx + 1}`}>
      <div className="stat-corner">{String(idx + 1).padStart(2, '0')}/04</div>
      <div className="stat-num">
        {v}<span className="unit">{item.unit}</span>
      </div>
      <div className="stat-label">{item.label}</div>
    </div>
  );
}

function ChStats({ data, lang, active }) {
  const d = data[lang];
  return (
    <section id="stats" className={`chapter ${active ? 'is-active' : ''}`} data-screen-label="05 Numbers">
      <div className="chapter-inner">
        <div className="fade-up">
          <div className="chapter-tag"><span>{d.tag}</span></div>
          <h2 className="chapter-title">{renderTitle(d.title)}</h2>
          <p className="chapter-lead">{d.lead}</p>
        </div>
        <div className="stats-grid">
          {d.items.map((it, i) => (
            <StatCard key={i} item={it} active={active} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 06 — STACK
// ─────────────────────────────────────────────────────────────
function SkillGroup({ group }) {
  return (
    <div className="skill-group">
      <h4>{group.title}</h4>
      {group.items.map((s, i) => (
        <div key={i} className="skill-row">
          <span className="skill-name">{s.name}</span>
          <span className="skill-dots">
            {[1, 2, 3, 4, 5].map(n => (
              <span key={n} className={`skill-dot ${n <= s.lvl ? 'on' : ''}`}></span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
function ChStack({ data, lang, active }) {
  const d = data[lang];
  return (
    <section id="stack" className={`chapter ${active ? 'is-active' : ''}`} data-screen-label="06 Stack">
      <div className="chapter-inner">
        <div className="fade-up">
          <div className="chapter-tag"><span>{d.tag}</span></div>
          <h2 className="chapter-title">{renderTitle(d.title)}</h2>
          <p className="chapter-lead">{d.lead}</p>
        </div>
        <div className="skill-grid">
          <div className="fade-up d1"><SkillGroup group={d.frontend} /></div>
          <div className="fade-up d2"><SkillGroup group={d.backend} /></div>
          <div className="fade-up d3"><SkillGroup group={d.ai} /></div>
          <div className="fade-up d4"><SkillGroup group={d.soft} /></div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 07 — PROJECTS
// ─────────────────────────────────────────────────────────────
function ChProjects({ data, lang, active }) {
  const d = data[lang];
  return (
    <section id="projects" className={`chapter ${active ? 'is-active' : ''}`} data-screen-label="07 Projects">
      <div className="chapter-inner">
        <div className="fade-up">
          <div className="chapter-tag"><span>{d.tag}</span></div>
          <h2 className="chapter-title">{renderTitle(d.title)}</h2>
          <p className="chapter-lead">{d.lead}</p>
        </div>
        <div className="proj-grid">
          {d.items.map((p, i) => (
            <article key={i} className={`proj-card fade-up d${i + 1}`}>
              <div className="proj-num">PROJECT · {p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="proj-stat">
                <span className="proj-stat-num">{p.stat}</span>
                <span className="proj-stat-label">{p.statLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 08 — MISSION
// ─────────────────────────────────────────────────────────────
function ChMission({ data, lang, active, onContact }) {
  const d = data[lang];
  return (
    <section id="mission" className={`chapter ${active ? 'is-active' : ''}`} data-screen-label="08 Mission">
      <div className="chapter-inner">
        <div className="fade-up">
          <div className="chapter-tag"><span>{d.tag}</span></div>
          <h2 className="chapter-title">{renderTitle(d.title)}</h2>
          <p className="chapter-lead">{d.lead}</p>
        </div>
        <div className="manifesto">
          <div className="manifesto-block fade-up d1">
            <h3>{d.manifestoTitle}</h3>
            <p>{d.manifesto}</p>
          </div>
          <div className="manifesto-block fade-up d2">
            <h3>{d.pillarsTitle}</h3>
            <ul className="manifesto-list">
              {d.pillars.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>
        <div className="cta-row fade-up d3">
          <button className="btn-ghost" onClick={onContact}>
            {d.cta1} {Icons.arrow}
          </button>
          <a className="btn-solid" href="#" onClick={(e) => { e.preventDefault(); alert(lang === 'it' ? 'CV in preparazione — scrivimi per averlo.' : 'CV in progress — message me for a copy.'); }}>
            {Icons.download} {d.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 09 — LETTERS / INFLUENCES
// ─────────────────────────────────────────────────────────────
function ChLetters({ data, lang, active }) {
  const d = data[lang];
  return (
    <section id="letters" className={`chapter ${active ? 'is-active' : ''}`} data-screen-label="09 Influences">
      <div className="chapter-inner">
        <div className="fade-up">
          <div className="chapter-tag"><span>{d.tag}</span></div>
          <h2 className="chapter-title">{renderTitle(d.title)}</h2>
          <p className="chapter-lead">{d.lead}</p>
        </div>
        <div className="letters">
          {d.items.map((l, i) => (
            <figure key={i} className={`letter fade-up d${i + 1}`}>
              <blockquote>{l.q}</blockquote>
              <cite>{l.a}</cite>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CHAPTER 10 — CONTACT
// ─────────────────────────────────────────────────────────────
function ChContact({ data, lang, active }) {
  const d = data[lang];
  const [sent, setSent] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };
  return (
    <section id="contact" className={`chapter ${active ? 'is-active' : ''}`} data-screen-label="10 Contact">
      <div className="chapter-inner">
        <div className="fade-up">
          <div className="chapter-tag"><span>{d.tag}</span></div>
          <h2 className="chapter-title">{renderTitle(d.title)}</h2>
          <p className="chapter-lead">{d.lead}</p>
        </div>
        <div className="contact">
          <div className="contact-info fade-up d1">
            {d.rows.map((r, i) => {
              const inner = (
                <>
                  <span className="contact-icon">{Icons[r.icon]}</span>
                  <span>
                    <div className="ci-label">{r.label}</div>
                    <div className="ci-val">{r.val}</div>
                  </span>
                </>
              );
              return r.href ? (
                <a key={i} className="contact-row" href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noopener">
                  {inner}
                </a>
              ) : (
                <div key={i} className="contact-row">{inner}</div>
              );
            })}
          </div>
          <form className="form fade-up d2" onSubmit={submit}>
            <div className="form-row split">
              <div className="form-row">
                <label>{d.form.name}</label>
                <input type="text" required />
              </div>
              <div className="form-row">
                <label>{d.form.email}</label>
                <input type="email" required />
              </div>
            </div>
            <div className="form-row split">
              <div className="form-row">
                <label>{d.form.company}</label>
                <input type="text" />
              </div>
              <div className="form-row">
                <label>{d.form.type}</label>
                <select>
                  {d.form.types.map((t, i) => <option key={i}>{t}</option>)}
                </select>
              </div>
            </div>
            <div className="form-row">
              <label>{d.form.msg}</label>
              <textarea placeholder={d.form.msgPlaceholder} required></textarea>
            </div>
            {sent ? (
              <div className="success">{d.form.success}</div>
            ) : (
              <button type="submit" className="submit">{d.form.submit} {Icons.arrow}</button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  ChBoot, ChOrigin, ChTimeline, ChNow, ChStats, ChStack, ChProjects, ChMission, ChLetters, ChContact,
});

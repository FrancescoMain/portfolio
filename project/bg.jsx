/* global React */
// Animated background: dot grid + drifting particles + occasional glyphs.
// Listens to scroll for parallax, mouse for a soft "light" that brightens nearby dots.

function BgCanvas({ density = 1, glyphs = true }) {
  const ref = React.useRef(null);
  const mouseRef = React.useRef({ x: -9999, y: -9999 });
  const scrollRef = React.useRef(0);

  React.useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    // particles
    const PARTICLES = Math.floor(60 * density);
    const particles = Array.from({ length: PARTICLES }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -Math.random() * 0.25 - 0.05,
      r: Math.random() * 1.2 + 0.3,
      hue: Math.random() < 0.3 ? 'green' : 'white',
      life: Math.random(),
    }));

    // floating glyphs (mono characters drifting up)
    const GLYPHS = glyphs ? Math.floor(14 * density) : 0;
    const glyphChars = ['{', '}', '(', ')', '<', '/>', '01', '10', '#', '*', '→', '·', 'λ', '∇', 'Σ'];
    const glyphArr = Array.from({ length: GLYPHS }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vy: -Math.random() * 0.18 - 0.06,
      c: glyphChars[Math.floor(Math.random() * glyphChars.length)],
      size: Math.random() * 10 + 9,
      op: Math.random() * 0.18 + 0.06,
      hue: Math.random() < 0.5 ? 'green' : 'gray',
    }));

    const onMouse = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const onLeave = () => { mouseRef.current.x = -9999; mouseRef.current.y = -9999; };
    const onScroll = () => { scrollRef.current = window.scrollY || 0; };
    const onResize = () => resize();

    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // grid params
    const grid = 38;

    function draw() {
      ctx.clearRect(0, 0, w, h);

      const parallax = (scrollRef.current * 0.04) % grid;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // dot grid
      const cols = Math.ceil(w / grid) + 1;
      const rows = Math.ceil(h / grid) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * grid;
          const y = j * grid - parallax;
          // distance to mouse for highlight
          let alpha = 0.08;
          let color = '255,255,255';
          if (mx > 0) {
            const dx = x - mx;
            const dy = y - my;
            const d = Math.hypot(dx, dy);
            if (d < 200) {
              const k = 1 - d / 200;
              alpha = 0.08 + k * 0.55;
              if (d < 100) color = '102,255,132';
            }
          }
          ctx.fillStyle = `rgba(${color},${alpha})`;
          ctx.fillRect(x, y, 1.2, 1.2);
        }
      }

      // intersecting axes near mouse — subtle cross
      if (mx > 0) {
        ctx.strokeStyle = 'rgba(76,175,80,0.06)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, my); ctx.lineTo(w, my);
        ctx.moveTo(mx, 0); ctx.lineTo(mx, h);
        ctx.stroke();
      }

      // particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.005;
        if (p.y < -10 || p.x < -10 || p.x > w + 10) {
          p.x = Math.random() * w;
          p.y = h + 10;
          p.life = 0;
        }
        const op = 0.15 + 0.35 * Math.abs(Math.sin(p.life * Math.PI));
        const color = p.hue === 'green' ? `rgba(102,255,132,${op})` : `rgba(255,255,255,${op * 0.7})`;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        // soft glow for greens
        if (p.hue === 'green') {
          ctx.beginPath();
          ctx.fillStyle = `rgba(76,175,80,${op * 0.18})`;
          ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // glyphs
      ctx.font = '500 11px JetBrains Mono, monospace';
      for (const g of glyphArr) {
        g.y += g.vy;
        if (g.y < -20) {
          g.y = h + 20;
          g.x = Math.random() * w;
        }
        const color = g.hue === 'green'
          ? `rgba(102,255,132,${g.op})`
          : `rgba(200,210,220,${g.op * 0.8})`;
        ctx.fillStyle = color;
        ctx.font = `500 ${g.size}px JetBrains Mono, monospace`;
        ctx.fillText(g.c, g.x, g.y);
      }

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [density, glyphs]);

  return (
    <div className="bg-layer">
      <canvas ref={ref} className="bg-canvas"></canvas>
    </div>
  );
}

window.BgCanvas = BgCanvas;

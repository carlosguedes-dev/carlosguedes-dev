import './style.css';

/* ═══════════════════════════════════════════
   CARLOS GUEDES — PORTFOLIO ENGINE v2.0
   Boot → Particles → Scroll → HUD → Parallax
   ═══════════════════════════════════════════ */

// ─── CONFIG ───
const CONFIG = {
  layerDepth: 1800,
  totalLayers: 6,
  scrollSmoothing: 0.055,
  particleCount: 100,
  connectionDist: 130,
  mouseParallax: 12,
  bootDuration: 2200,
} as const;

// ─── DOM CACHE ───
const $ = <T extends HTMLElement>(sel: string) => document.querySelector<T>(sel);
const $$ = <T extends HTMLElement>(sel: string) => document.querySelectorAll<T>(sel);

const canvas    = $<HTMLCanvasElement>('#particle-canvas')!;
const ctx       = canvas.getContext('2d')!;
const scene     = $('#scene')!;
const layers    = $$('.layer');
const scrollBox = $('#scroll-container')!;
const bootEl    = $('#boot-screen')!;

// HUD elements
const hudDepth      = $('#hud-depth')!;
const hudCoords     = $('#hud-coords')!;
const hudFps        = $('#hud-fps')!;
const hudTime       = $('#hud-time')!;
const scrollHint    = $('#scroll-indicator')!;
const railDots      = $$('.rail-dot');

// ─── STATE ───
let scrollCurrent = 0;
let scrollTarget  = 0;
let mx = 0.5, my = 0.5;       // mouse normalized
let smx = 0.5, smy = 0.5;     // smooth mouse
let lastFpsTime = performance.now();
let frameCount  = 0;
let fps         = 60;
// ─── SCROLL SETUP ───
const scrollPerLayer = window.innerHeight * 1.8;
const totalScroll    = scrollPerLayer * CONFIG.totalLayers;
scrollBox.style.height = `${totalScroll}px`;

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

/* ═══════════════════════════════════════════
   BOOT SEQUENCE
   ═══════════════════════════════════════════ */
function boot() {
  setTimeout(() => {
    bootEl.classList.add('hidden');
  }, CONFIG.bootDuration);
}

/* ═══════════════════════════════════════════
   PARTICLE SYSTEM
   ═══════════════════════════════════════════ */
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  opacity: number;
  hue: number; // 0 = cyan, 1 = green, 2 = dim
}

const particles: Particle[] = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}

function spawnParticles() {
  particles.length = 0;
  for (let i = 0; i < CONFIG.particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 1.6 + 0.4,
      opacity: Math.random() * 0.4 + 0.1,
      hue: Math.floor(Math.random() * 3),
    });
  }
}

const COLORS = [
  [0, 229, 255],   // cyan
  [57, 255, 20],   // neon
  [74, 90, 117],   // dim
];

function renderParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const mouseAbsX = smx * canvas.width;
  const mouseAbsY = smy * canvas.height;

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];

    // Mouse attraction
    const dx = mouseAbsX - p.x;
    const dy = mouseAbsY - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 280 && dist > 1) {
      const force = 0.00025 * (280 - dist);
      p.vx += dx * force;
      p.vy += dy * force;
    }

    p.vx *= 0.988;
    p.vy *= 0.988;
    p.x += p.vx;
    p.y += p.vy;

    // Wrap
    if (p.x < 0) p.x += canvas.width;
    if (p.x > canvas.width) p.x -= canvas.width;
    if (p.y < 0) p.y += canvas.height;
    if (p.y > canvas.height) p.y -= canvas.height;

    // Draw dot
    const c = COLORS[p.hue];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${p.opacity})`;
    ctx.fill();

    // Connections
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const ddx = p.x - q.x;
      const ddy = p.y - q.y;
      const dd = ddx * ddx + ddy * ddy;
      const limit = CONFIG.connectionDist * CONFIG.connectionDist;
      if (dd < limit) {
        const alpha = (1 - Math.sqrt(dd) / CONFIG.connectionDist) * 0.12;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }
    }
  }
}

/* ═══════════════════════════════════════════
   SMOOTHSTEP & LERP
   ═══════════════════════════════════════════ */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

/* ═══════════════════════════════════════════
   MAIN LOOP
   ═══════════════════════════════════════════ */
function tick() {
  // ─── Smooth scroll
  scrollCurrent = lerp(scrollCurrent, scrollTarget, CONFIG.scrollSmoothing);

  const maxScroll = totalScroll - window.innerHeight;
  const progress = Math.max(0, Math.min(1, scrollCurrent / maxScroll));
  const maxZ = (CONFIG.totalLayers - 1) * CONFIG.layerDepth;
  const zOffset = progress * maxZ;

  // ─── Smooth mouse
  smx = lerp(smx, mx, 0.04);
  smy = lerp(smy, my, 0.04);

  const px = (smx - 0.5) * CONFIG.mouseParallax;
  const py = (smy - 0.5) * CONFIG.mouseParallax;

  // ─── Scene transform
  scene.style.transform = `translateZ(${zOffset}px) translate(${-px}px, ${-py}px)`;

  // ─── Layer visibility
  let activeLayer = 0;

  layers.forEach((layer, idx) => {
    const realZ = -(idx * CONFIG.layerDepth) + zOffset;
    const content = layer.querySelector<HTMLElement>('.layer-content');

    let opacity = 0;
    const range = CONFIG.layerDepth * 1.15;

    if (realZ > 0) {
      opacity = Math.max(0, 1 - realZ / 300);
      if (content) {
        const s = 1 + realZ / 600;
        content.style.transform = `scale(${s})`;
      }
    } else {
      const d = Math.abs(realZ);
      if (d < range) {
        const t = 1 - d / range;
        opacity = smoothstep(t);
        if (content) {
          const s = 0.55 + 0.45 * t;
          content.style.transform = `scale(${s})`;
        }
      }
    }

    layer.style.opacity = opacity.toString();
    layer.style.pointerEvents = opacity > 0.3 ? 'auto' : 'none';

    if (opacity > 0.5) activeLayer = idx;
  });

  // ─── Rail dots
  railDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === activeLayer);
  });

  // ─── HUD
  hudDepth.textContent = `Z-DEPTH: ${(progress * 100).toFixed(1)}%`;
  hudCoords.textContent = `X:${pad4(smx)} Y:${pad4(smy)}`;

  // FPS
  frameCount++;
  const now = performance.now();
  if (now - lastFpsTime >= 1000) {
    fps = frameCount;
    frameCount = 0;
    lastFpsTime = now;
    hudFps.textContent = `${fps} FPS`;
  }

  // Time
  const d = new Date();
  hudTime.textContent = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // Scroll hint fade
  if (scrollHint) {
    const hintOpacity = Math.max(0, 1 - progress * 6);
    scrollHint.style.opacity = hintOpacity.toString();
  }

  // Particles (desktop only)
  if (!isTouchOnly) {
    renderParticles();
  }

  requestAnimationFrame(tick);
}

function pad4(v: number): string {
  return Math.round(v * 9999).toString().padStart(4, '0');
}

/* ═══════════════════════════════════════════
   TYPING EFFECT
   ═══════════════════════════════════════════ */
function initTypingEffects() {
  const typingEls = $$<HTMLElement>('.typing-text');
  typingEls.forEach(el => {
    const text = el.getAttribute('data-text') || el.textContent || '';
    el.textContent = '';
    el.style.visibility = 'visible';
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 50);
  });
}

/* ═══════════════════════════════════════════
   EVENTS
   ═══════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  scrollTarget = window.scrollY;
}, { passive: true });

window.addEventListener('mousemove', (e) => {
  mx = e.clientX / window.innerWidth;
  my = e.clientY / window.innerHeight;
}, { passive: true });

window.addEventListener('resize', resizeCanvas, { passive: true });

/* ═══════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════ */

// ─── Detect touch-only devices (mobile/tablet) ───
// On these devices there's no mouse to interact with, and the canvas is hidden
// via CSS anyway, so we skip particle setup entirely to save CPU/battery.
const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

resizeCanvas();

if (!isTouchOnly) {
  spawnParticles();
}

boot();

// Start typing after boot finishes
setTimeout(() => {
  initTypingEffects();
}, CONFIG.bootDuration + 200);

tick();

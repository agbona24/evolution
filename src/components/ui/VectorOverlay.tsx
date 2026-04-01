'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { TargetAndTransition } from 'framer-motion';

interface VectorOverlayProps {
  variant: 'light' | 'dark';
  className?: string;
}

const LIGHT_STROKE = 'rgba(13,148,136,0.12)';
const LIGHT_FILL   = 'rgba(13,148,136,0.05)';
const DARK_STROKE  = 'rgba(255,255,255,0.07)';
const DARK_ACCENT  = 'rgba(13,148,136,0.18)';

export default function VectorOverlay({ variant, className = '' }: VectorOverlayProps) {
  const reduce = useReducedMotion();
  const isLight = variant === 'light';
  const stroke  = isLight ? LIGHT_STROKE : DARK_STROKE;
  const fill    = isLight ? LIGHT_FILL   : 'rgba(255,255,255,0.03)';
  const accent  = isLight ? LIGHT_STROKE : DARK_ACCENT;

  const anim = (a: TargetAndTransition): TargetAndTransition | undefined =>
    reduce ? undefined : a;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
    >
      {/* ── Full-width wave path (bottom) ─────────────────────────── */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 90"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,55 C240,20 480,80 720,45 C960,10 1200,70 1440,40 L1440,90 L0,90 Z"
          fill={fill}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        />
        <motion.path
          d="M0,55 C240,20 480,80 720,45 C960,10 1200,70 1440,40"
          stroke={stroke}
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>

      {/* ── Rotating ring — top-right ──────────────────────────────── */}
      <motion.div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full"
        style={{ border: `1px solid ${stroke}` }}
        animate={anim({ rotate: 360 })}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute -top-12 -right-12 w-44 h-44 rounded-full"
        style={{ border: `1px solid ${stroke}` }}
        animate={anim({ rotate: -360 })}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Dashed ring — bottom-left ──────────────────────────────── */}
      <svg
        className="absolute -bottom-16 -left-16 w-56 h-56 opacity-70"
        viewBox="0 0 200 200"
        fill="none"
      >
        <motion.circle
          cx="100" cy="100" r="90"
          stroke={stroke}
          strokeWidth="1"
          strokeDasharray="6 8"
          animate={anim({ rotate: 360 })}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '100px', originY: '100px' }}
        />
      </svg>

      {/* ── Floating diamond — left mid ────────────────────────────── */}
      <motion.div
        className="absolute top-[35%] left-[6%] w-10 h-10"
        style={{ border: `1.5px solid ${accent}`, rotate: '45deg' }}
        animate={anim({ y: [0, -12, 0], rotate: ['45deg', '90deg', '45deg'] })}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Floating plus — right mid ──────────────────────────────── */}
      <motion.svg
        className="absolute top-[45%] right-[8%] w-7 h-7"
        viewBox="0 0 28 28"
        fill="none"
        animate={anim({ y: [0, 10, 0] })}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <line x1="14" y1="2" x2="14" y2="26" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="14" x2="26" y2="14" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
      </motion.svg>

      {/* ── Small dots cluster — top-left ──────────────────────────── */}
      {[
        { cx: 40,  cy: 60,  r: 3,   delay: 0   },
        { cx: 60,  cy: 44,  r: 2,   delay: 0.8 },
        { cx: 80,  cy: 68,  r: 1.5, delay: 1.6 },
        { cx: 55,  cy: 80,  r: 2.5, delay: 2.4 },
      ].map((d, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left:   d.cx,
            top:    d.cy,
            width:  d.r * 2,
            height: d.r * 2,
            background: stroke,
          }}
          animate={anim({ opacity: [0.4, 1, 0.4] })}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: d.delay }}
        />
      ))}

      {/* ── Hexagon outline (dark only) ────────────────────────────── */}
      {!isLight && (
        <motion.svg
          className="absolute right-[5%] top-[20%] w-36 h-36 opacity-60"
          viewBox="0 0 120 120"
          fill="none"
          animate={anim({ y: [0, 14, 0] })}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <polygon
            points="60,8 104,32 104,88 60,112 16,88 16,32"
            stroke={DARK_ACCENT}
            strokeWidth="1.2"
            fill="none"
          />
          <polygon
            points="60,22 92,40 92,80 60,98 28,80 28,40"
            stroke={DARK_STROKE}
            strokeWidth="0.8"
            fill="none"
          />
        </motion.svg>
      )}

      {/* ── Corner bracket accents (light only) ───────────────────── */}
      {isLight && (
        <>
          <motion.svg
            className="absolute top-6 left-6 w-8 h-8"
            viewBox="0 0 32 32"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <path d="M2,18 L2,2 L18,2" stroke={accent} strokeWidth="2" strokeLinecap="round" fill="none" />
          </motion.svg>
          <motion.svg
            className="absolute bottom-6 right-6 w-8 h-8"
            viewBox="0 0 32 32"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <path d="M30,14 L30,30 L14,30" stroke={accent} strokeWidth="2" strokeLinecap="round" fill="none" />
          </motion.svg>
        </>
      )}
    </div>
  );
}

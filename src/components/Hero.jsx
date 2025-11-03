import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Rocket } from 'lucide-react';

const accent = '#D7F600';

export default function Hero({ onExploreClick }) {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon vignette + grid overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 40%, rgba(215,246,0,0.25) 0%, rgba(12,92,145,0.12) 35%, rgba(0,0,0,0.85) 100%)',
          }}
        />
        <div
          className="absolute inset-0 mix-blend-soft-light opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(transparent 95%, rgba(215,246,0,0.15) 95%), linear-gradient(90deg, transparent 95%, rgba(12,92,145,0.15) 95%)',
            backgroundSize: '24px 24px, 24px 24px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-widest text-white/80 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Rocket size={14} color={accent} />
            DAPROMEX — I+D en estado puro
          </motion.span>

          <motion.h1
            className="mx-auto max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ textShadow: '0 0 18px rgba(215,246,0,0.08)' }}
          >
            No seguimos tendencias.
            <br />
            <span style={{ color: accent }}>Redefinimos industrias.</span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            Diseñamos, desarrollamos y operamos soluciones de alto impacto
            basadas en estrategia, tecnología y creatividad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 flex items-center justify-center gap-3"
          >
            <button
              onClick={onExploreClick}
              className="group relative overflow-hidden rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <span className="relative z-10">Explorar capacidades</span>
              <span
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(120% 120% at 10% 10%, rgba(215,246,0,0.25) 0%, rgba(12,92,145,0.2) 50%, transparent 70%)',
                }}
              />
            </button>
            <a
              href="#cta"
              className="rounded-full border border-[rgba(12,92,145,0.4)] px-5 py-3 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Agenda una consultoría
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={onExploreClick}
            aria-label="Scroll"
            className="group flex items-center gap-2 text-white/70"
          >
            <ArrowDown className="transition-transform group-hover:translate-y-1" />
            <span className="text-xs">Sigue bajando</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

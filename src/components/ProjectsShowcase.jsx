import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const accent = '#D7F600';

const projects = [
  {
    title: 'Plataforma de monitoreo cuántico',
    desc: 'Visualización en tiempo real de estados cuánticos para investigación aplicada.',
    badge: 'Deep Tech',
  },
  {
    title: 'Gemelo digital para logística',
    desc: 'Optimización predictiva y simulaciones con IA para cadenas de suministro.',
    badge: 'AI + IoT',
  },
  {
    title: 'Arquitectura de datos de confianza',
    desc: 'Data mesh con gobernanza automática y trazabilidad criptográfica.',
    badge: 'Data & Security',
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="proyectos" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Proyectos clave</h2>
            <p className="mt-2 text-white/70">
              Casos que combinan ciencia, ingeniería y diseño para mover métricas reales.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white/70">
            <Sparkles size={16} color={accent} />
            <span className="text-xs">Microinteracciones en cada detalle</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur"
            >
              <div className="mb-10">
                <span
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80"
                >
                  {p.badge}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>

              {/* Motion preview slab */}
              <motion.div
                initial={{ rotate: -2 }}
                whileHover={{ rotate: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                className="relative h-40 rounded-xl border border-white/10 bg-black/60 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]"
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(215,246,0,0.12) 0%, rgba(0,0,0,0) 55%), radial-gradient(120% 80% at 80% 20%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 60%)',
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  layout
                  style={{ backgroundColor: accent }}
                />
              </motion.div>

              {/* Hover glow */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
                style={{ background: `radial-gradient(60% 60% at 50% 50%, ${accent}33, transparent 70%)` }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

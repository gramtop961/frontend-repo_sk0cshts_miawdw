import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const accent = '#D7F600';
const blue = '#0C5C91';

export default function StoryScroller() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const y1 = useTransform(scrollYProgress, [0, 0.5], ['0%', '-20%']);
  const y2 = useTransform(scrollYProgress, [0.2, 0.9], ['30%', '-10%']);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.35], [0, 1, 0.4]);
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.6, 0.85], [0, 1, 0.4]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.9, 1], [0, 1, 1]);

  return (
    <section ref={ref} className="relative bg-black text-white">
      <div className="sticky top-0 h-[120vh] overflow-hidden">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-32 top-10 h-80 w-80 rounded-full blur-3xl opacity-30"
            style={{ background: `radial-gradient(circle, ${accent}33, transparent 60%)` }}
          />
          <div
            className="absolute bottom-10 -right-32 h-96 w-96 rounded-full blur-3xl opacity-30"
            style={{ background: `radial-gradient(circle, ${blue}66, transparent 60%)` }}
          />
        </div>

        {/* Layers that move at different speeds */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <motion.h2
              style={{ opacity: opacity1 }}
              className="text-4xl font-semibold sm:text-5xl"
            >
              Consultoría I+D integral
            </motion.h2>
            <motion.p
              style={{ opacity: opacity1 }}
              className="mt-4 text-white/70"
            >
              Estrategia rigurosa + ejecución impecable. De la hipótesis al escalado,
              alineamos negocio, tecnología y diseño.
            </motion.p>
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              style={{ opacity: opacity2 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {[
                {
                  title: 'Estrategia y foresight',
                  desc: 'Roadmaps de innovación, diseño de portafolio, business design.',
                },
                {
                  title: 'Ingeniería aplicada',
                  desc: 'Arquitecturas, IA/ML, edge, data platforms, seguridad.',
                },
                {
                  title: 'Experiencias y producto',
                  desc: 'Prototipado, UX investigativo, diseño conversacional y XR.',
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <div
                    className="mb-3 h-1 w-10 rounded-full"
                    style={{ background: i === 1 ? blue : accent }}
                  />
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="absolute inset-x-0 bottom-10">
          <motion.div
            style={{ opacity: opacity3 }}
            className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-center backdrop-blur"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Métodos y tecnologías implementadas
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-white/70">
              {[
                'Design Sprints',
                'MLOps',
                'Kubernetes',
                'Serverless',
                'Data Mesh',
                'Zero-Trust',
                'LLMs',
                'WebGL/XR',
                'Edge AI',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* spacer to allow scrolling through sticky area */}
      <div className="h-[160vh]" />
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const accent = '#D7F600';
const blue = '#0C5C91';

export default function CTAManifesto() {
  return (
    <section id="cta" className="relative overflow-hidden bg-black py-24 text-white">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-10 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{ background: `radial-gradient(60% 60% at 50% 50%, ${accent}22, transparent 70%)` }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <h3 className="text-2xl font-semibold">Agenda una consultoría</h3>
          <p className="mt-2 text-white/70">
            Conversemos sobre tu próximo salto estratégico. 45 minutos, cero humo, sólo valor accionable.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            <input
              type="text"
              required
              placeholder="Nombre"
              className="rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/30"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/30"
            />
            <input
              type="text"
              placeholder="Empresa"
              className="sm:col-span-2 rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/30"
            />
            <textarea
              rows={4}
              placeholder="Reto a resolver"
              className="sm:col-span-2 rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-white/30"
            />
            <button
              type="submit"
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-[rgba(215,246,0,0.2)] to-[rgba(12,92,145,0.25)] px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:from-[rgba(215,246,0,0.3)] hover:to-[rgba(12,92,145,0.35)]"
            >
              Enviar solicitud
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Manifiesto</p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight">
              Precisión científica.
              <br />
              Estética funcional.
              <br />
              <span style={{ color: accent }}>Impacto medible.</span>
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/70">
              <li>Medimos antes de idear. Validamos antes de escalar.</li>
              <li>La creatividad es un sistema, no una ocurrencia.</li>
              <li>Automatizamos lo repetible para enfocarnos en lo irrepetible.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Casos de éxito</p>
            <p className="mt-2 text-white/70">
              Motion design y narrativas técnicas para explicar lo complejo con elegancia.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-28 overflow-hidden rounded-lg border border-white/10 bg-black/60"
                >
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(12,92,145,0.2) 0%, rgba(0,0,0,0) 55%), radial-gradient(120% 80% at 80% 20%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 60%)',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: blue }} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

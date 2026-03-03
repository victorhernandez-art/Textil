import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

const WEAVER_IMG = `${import.meta.env.BASE_URL}bl.jpg`;

function AnimLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '100%' }}
        animate={inView ? { y: 0 } : { y: '100%' }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ManifiestoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#FAF8F3', padding: 'clamp(80px, 12vw, 140px) 0' }}
    >
      {/* Decorative background text */}
      <div
        className="absolute -top-10 right-0 select-none pointer-events-none opacity-[0.04] leading-none"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          fontWeight: 700,
          color: '#B8342A',
          lineHeight: 1,
        }}
      >
        Maya
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image with accent */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Accent border */}
              <div
                className="absolute -top-4 -left-4 w-full h-full border-2 border-[#D4A034]/30"
                style={{ zIndex: 0 }}
              />
              <div className="relative overflow-hidden" style={{ zIndex: 1 }}>
                <img
                  src={WEAVER_IMG}
                  alt="Artesana tejiendo en telar"
                  className="w-full object-cover"
                  style={{ height: 'clamp(360px, 55vw, 560px)' }}
                />
                {/* Color wash */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(89,12,138,0.4))' }}
                />
              </div>
              {/* Label */}
              <div
                className="absolute bottom-6 left-6 px-4 py-2"
                style={{ background: 'rgba(89,12,138,0.55)', backdropFilter: 'blur(8px)' }}
              >
                <p
                  className="text-[#D4A034] uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.25em' }}
                >
                  Telar de Cintura · Zinacantán, Chiapas
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Manifesto text */}
          <div ref={ref}>
            <div className="mb-6 flex items-center gap-4">
              <div className="w-10 h-px bg-[#B8342A]" />
              <span
                className="text-[#B8342A] uppercase tracking-[0.35em]"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem' }}
              >
                Nuestro Manifiesto
              </span>
            </div>

            <AnimLine delay={0.1}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: '#590C8A',
                }}
              >
                Tradición que
              </h2>
            </AnimLine>
            <AnimLine delay={0.18}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: '#590C8A',
                  fontStyle: 'italic',
                }}
              >
                vive en cada puntada
              </h2>
            </AnimLine>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p
                className="mt-8 text-[#4A3728]/80"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9 }}
              >
                En las montañas de Chiapas, mujeres tzeltales, tzotziles y tojolabales han preservado por siglos el arte del bordado a mano. Cada pieza es un mapa de su cultura: colores que representan la tierra, el maíz, el cielo y el corazón de sus comunidades.
              </p>
              <p
                className="mt-5 text-[#4A3728]/80"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', lineHeight: 1.9 }}
              >
                Trabajamos directamente con cooperativas de artesanas, garantizando comercio justo, salarios dignos y la preservación de estas técnicas ancestrales para las generaciones futuras.
              </p>

              {/* Values row */}
              <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-[#B8342A]/15">
                {[
                  { n: 'Comercio', s: 'Justo' },
                  { n: 'Hecho', s: 'a Mano' },
                  { n: 'Arte', s: 'Ancestral' },
                ].map((v) => (
                  <div key={v.n} className="flex flex-col">
                    <span
                      style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#B8342A', fontWeight: 600 }}
                    >
                      {v.n}
                    </span>
                    <span
                      className="text-[#4A3728]/60 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em' }}
                    >
                      {v.s}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

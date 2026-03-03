import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const IMG_ARTESANA = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Sumidero_1.jpg/1280px-Sumidero_1.jpg';

const artesanas = [
  { name: 'Doña Rosa López', pueblo: 'Zinacantán', specialty: 'Bordado floral en seda', years: '35 años de oficio' },
  { name: 'María Guzmán', pueblo: 'San Cristóbal', specialty: 'Tejido en telar de cintura', years: '28 años de oficio' },
  { name: 'Lucía Pérez Ramos', pueblo: 'Chamula', specialty: 'Bordado geométrico maya', years: '40 años de oficio' },
  { name: 'Esperanza Díaz', pueblo: 'Tenejapa', specialty: 'Teñido natural con índigo', years: '22 años de oficio' },
];

export function ArtesanasSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="artesanas"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: '85vh' }}
    >
      {/* Full background image */}
      <motion.div
        style={{ scale: imgScale }}
        className="absolute inset-0"
      >
        <img
          src={IMG_ARTESANA}
          alt="Cañón del Sumidero, Chiapas, México"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient overlays — strong on left (text side), fades to transparent on right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(20,8,60,0.93) 0%, rgba(97,43,189,0.80) 35%, rgba(97,43,189,0.35) 65%, rgba(97,43,189,0.05) 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, #FAF8F3, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col justify-center" style={{ minHeight: '85vh', paddingTop: '120px', paddingBottom: '100px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div style={{ y: textY }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#D4A034]" />
              <span
                className="text-[#D4A034] uppercase tracking-[0.35em]"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem' }}
              >
                Las Guardianas del Arte
              </span>
            </div>
            <div className="overflow-hidden mb-1">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                  fontWeight: 600,
                  lineHeight: 1,
                  color: '#FAF8F3',
                  textShadow: '0 2px 16px rgba(0,0,0,0.5)',
                }}
              >
                Nuestras
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-6">
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 5.5vw, 5rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1,
                  color: '#D4A034',
                }}
              >
                Artesanas
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/90 mb-10"
              style={{ fontFamily: 'var(--font-body)', fontSize: '0.98rem', lineHeight: 1.9, maxWidth: 420, textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
            >
              Más de 200 mujeres de 12 comunidades indígenas forman nuestra red de artesanas. Cada una es dueña de su arte, su tiempo y el precio justo de su trabajo.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              {[
                { n: '12', label: 'Comunidades' },
                { n: '200+', label: 'Artesanas activas' },
                { n: '100%', label: 'Comercio justo' },
                { n: '3', label: 'Grupos étnicos' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="px-4 py-4"
                  style={{ border: '1px solid rgba(212,160,52,0.2)', background: 'rgba(97,43,189,0.4)', backdropFilter: 'blur(8px)' }}
                >
                  <div
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 600, color: '#D4A034', lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="text-white/50 uppercase mt-1"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.18em' }}
                  >
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Artisans list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4"
          >
            {artesanas.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.1 }}
                className="flex items-center justify-between px-6 py-5 group hover:border-[#D4A034]/50 transition-colors cursor-pointer"
                style={{
                  background: 'rgba(97,43,189,0.55)',
                  backdropFilter: 'blur(12px)',
                  borderLeft: '2px solid rgba(212,160,52,0.2)',
                }}
              >
                <div>
                  <p
                    className="text-white"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 600 }}
                  >
                    {a.name}
                  </p>
                  <p
                    className="text-[#D4A034]/80 uppercase"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', marginTop: 2 }}
                  >
                    {a.pueblo}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className="text-white/60 italic"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem' }}
                  >
                    {a.specialty}
                  </p>
                  <p
                    className="text-white/40"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', marginTop: 2 }}
                  >
                    {a.years}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-2 px-7 py-3.5 uppercase tracking-widest cursor-pointer border-none transition-all duration-300 hover:opacity-90 self-start"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                background: '#D4A034',
                color: '#612BBD',
              }}
            >
              Conocer a Todas las Artesanas
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

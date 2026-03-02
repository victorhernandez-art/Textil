import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';

const IMG_EMBROIDERY_THREAD = '/img/ver.png';

const steps = [
  {
    num: '01',
    title: 'Selección de Hilos',
    desc: 'Se seleccionan hilos de seda, algodón y lana teñidos con colorantes naturales: cochinilla para rojos, índigo para azules, cempasúchil para amarillos. Un proceso que puede tomar días enteros.',
    accent: '#B8342A',
    lightAccent: '#E8756A',
  },
  {
    num: '02',
    title: 'Diseño del Patrón',
    desc: 'Las artesanas diseñan los patrones de memoria, heredados de madres y abuelas. Cada símbolo tiene un significado: flores para la vida, serpientes para la sabiduría, maíz para la abundancia.',
    accent: '#1B4B6D',
    lightAccent: '#6BAED6',
  },
  {
    num: '03',
    title: 'El Bordado a Mano',
    desc: 'Usando agujas finas, cada puntada se coloca con precisión milimétrica. Una blusa tradicional puede requerir más de 200 horas de trabajo continuo a lo largo de semanas.',
    accent: '#2D5D3F',
    lightAccent: '#6BBF87',
  },
  {
    num: '04',
    title: 'Control de Calidad',
    desc: 'Cada pieza es revisada por las maestras artesanas de la cooperativa. Se verifica la uniformidad del bordado, la resistencia del tejido y la autenticidad del diseño tradicional.',
    accent: '#D4A034',
    lightAccent: '#E8C46A',
  },
  {
    num: '05',
    title: 'Certificación Justa',
    desc: 'La pieza recibe su certificado de autenticidad con el nombre de la artesana, su comunidad y el tiempo de elaboración. El precio refleja el valor real de este arte.',
    accent: '#B8342A',
    lightAccent: '#E8756A',
  },
];

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex gap-6 md:gap-10 items-start group cursor-pointer"
    >
      {/* Number + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-12 h-12 flex items-center justify-center flex-shrink-0"
          style={{
            border: `2px solid ${step.lightAccent}`,
            backgroundColor: `${step.lightAccent}18`,
          }}
          whileHover={{
            boxShadow: `0 0 20px 6px ${step.lightAccent}80, 0 0 8px 2px ${step.lightAccent}50`,
            backgroundColor: `${step.lightAccent}35`,
            borderColor: step.lightAccent,
            scale: 1.08,
          }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <span
            style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: step.lightAccent, fontWeight: 700 }}
          >
            {step.num}
          </span>
        </motion.div>
        {index < steps.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="w-px flex-1 mt-2 origin-top"
            style={{ background: `linear-gradient(to bottom, ${step.lightAccent}60, transparent)`, minHeight: 60 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <h3
          className="mb-3 transition-colors duration-200 group-hover:text-white"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            fontWeight: 600,
            color: '#FAF8F3',
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </h3>
        <p
          className="text-[#FAF8F3]/70 transition-colors duration-200 group-hover:text-[#FAF8F3]/90"
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.9 }}
        >
          {step.desc}
        </p>
        <motion.div
          className="mt-4 h-px"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          style={{ background: `linear-gradient(to right, ${step.lightAccent}60, transparent)`, transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  );
}

export function ProcesoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#612BBD', padding: 'clamp(80px, 12vw, 140px) 0' }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(212,160,52,0.5) 20px, rgba(212,160,52,0.5) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(212,160,52,0.5) 20px, rgba(212,160,52,0.5) 21px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Steps */}
          <div>
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-px bg-[#D4A034]" />
                <span
                  className="text-[#D4A034] uppercase tracking-[0.35em]"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem' }}
                >
                  Cómo Hacemos
                </span>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 600,
                    lineHeight: 1.05,
                    color: '#FAF8F3',
                  }}
                >
                  El Proceso
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    lineHeight: 1.05,
                    color: '#D4A034',
                  }}
                >
                  Artesanal
                </motion.h2>
              </div>
            </div>

            <div>
              {steps.map((step, i) => (
                <StepItem key={step.num} step={step} index={i} />
              ))}
            </div>
          </div>

          {/* Right: Sticky image */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative overflow-hidden"
              >
                <motion.img
                  src={IMG_EMBROIDERY_THREAD}
                  alt="Bordado de flores con hilos de colores"
                  style={{ y: imgY, height: '600px' }}
                  className="w-full object-cover"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(97,43,189,0.4) 0%, transparent 60%)',
                  }}
                />
                {/* Accent border */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ border: '1px solid rgba(212,160,52,0.2)' }}
                />

                {/* Info card */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: 'linear-gradient(to top, rgba(97,43,189,0.65), transparent)' }}
                >
                  <p
                    className="text-[#D4A034] uppercase tracking-widest mb-1"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.25em' }}
                  >
                    Tiempo Promedio de Elaboración
                  </p>
                  <p
                    className="text-white"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600 }}
                  >
                    80 – 200 horas
                  </p>
                  <p
                    className="text-white/50 mt-1"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem' }}
                  >
                    por pieza bordada a mano
                  </p>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-6 border-l-2 border-[#D4A034]"
              >
                <p
                  className="text-white/70 italic"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', lineHeight: 1.6 }}
                >
                  "Mi madre me enseñó que el bordado es una conversación entre el hilo y el alma."
                </p>
                <cite
                  className="mt-3 block text-[#D4A034] not-italic"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}
                >
                  — Doña Rosa López, Maestra Artesana · Zinacantán
                </cite>
              </motion.blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
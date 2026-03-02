import { motion } from 'motion/react';
import { Lightbulb, LineChart, Users2, Zap, Globe, Shield } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Lightbulb,
    title: 'Innovación Estratégica',
    description: 'Design Thinking y metodologías ágiles para crear soluciones disruptivas',
    stats: '150+ innovaciones',
  },
  {
    icon: LineChart,
    title: 'Análisis Financiero',
    description: 'Modelado financiero, proyecciones y estrategias de rentabilidad',
    stats: '92% ROI promedio',
  },
  {
    icon: Users2,
    title: 'Desarrollo Organizacional',
    description: 'Estructuras empresariales, cultura y gestión del talento humano',
    stats: '300+ equipos formados',
  },
  {
    icon: Zap,
    title: 'Transformación Digital',
    description: 'Digitalización de procesos y estrategias de e-commerce',
    stats: '200+ empresas digitalizadas',
  },
  {
    icon: Globe,
    title: 'Expansión de Mercados',
    description: 'Estrategias de internacionalización y crecimiento sostenible',
    stats: '50+ mercados nuevos',
  },
  {
    icon: Shield,
    title: 'Gestión de Riesgos',
    description: 'Análisis de riesgos, compliance y sostenibilidad empresarial',
    stats: '100% compliance',
  },
];

export function Expertise() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-[#D4A373] rounded-full text-sm font-semibold mb-4 border border-white/20">
            EXPERTISE DE CLASE MUNDIAL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Áreas de Especialización
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Consultoría integral con expertos certificados en cada área del negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#004B87]/0 to-[#D4A373]/0 group-hover:from-[#004B87]/10 group-hover:to-[#D4A373]/10 rounded-2xl transition-all duration-300" />

              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#004B87] to-[#D4A373] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {area.title}
                </h3>

                <p className="text-purple-200 text-sm mb-4 leading-relaxed">
                  {area.description}
                </p>

                <div className="inline-block px-3 py-1 bg-[#D4A373]/20 rounded-full">
                  <span className="text-xs text-[#D4A373] font-semibold">
                    {area.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-purple-300 mb-6">Certificaciones y Alianzas Estratégicas</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            <div className="text-white font-bold text-lg">ISO 9001:2015</div>
            <div className="text-white font-bold text-lg">Harvard Innovation Lab</div>
            <div className="text-white font-bold text-lg">Stanford Venture Studio</div>
            <div className="text-white font-bold text-lg">Y Combinator Partner</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

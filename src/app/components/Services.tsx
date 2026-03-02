import { motion } from 'motion/react';
import { FileText, Users, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Planes y Modelos de Negocios',
    description: 'Desarrollo de planes de negocios estratégicos con metodologías probadas. Análisis de mercado, proyecciones financieras y estrategias de crecimiento.',
    features: ['Business Model Canvas', 'Plan financiero detallado', 'Análisis de viabilidad', 'Estrategia de mercado'],
  },
  {
    icon: Users,
    title: 'Consultoría Empresarial',
    description: 'Acompañamiento profesional en gestión empresarial, optimización de procesos y desarrollo organizacional para alcanzar tus objetivos.',
    features: ['Diagnóstico empresarial', 'Optimización de procesos', 'Gestión del cambio', 'Desarrollo organizacional'],
  },
  {
    icon: TrendingUp,
    title: 'Gestión de Recursos',
    description: 'Identificación y gestión de recursos financieros, humanos y tecnológicos. Acceso a redes de inversión y programas de financiamiento.',
    features: ['Búsqueda de financiamiento', 'Gestión de capital', 'Redes de inversión', 'Recursos tecnológicos'],
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 text-[#004B87] rounded-md mb-4 text-sm font-semibold">
            NUESTROS SERVICIOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#004B87] mb-4">
            Soluciones Integrales para tu Negocio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Servicios especializados diseñados para impulsar el crecimiento de tu emprendimiento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-xl p-8 hover:shadow-xl hover:border-[#004B87]/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#004B87] to-[#D4A373] rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#004B87] mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-[#D4A373] mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-[#004B87] font-medium group-hover:gap-3 transition-all"
              >
                Más información
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
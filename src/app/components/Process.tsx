import { motion } from 'motion/react';
import { Target, Users, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Diagnóstico',
    description: 'Evaluamos tu idea de negocio, analizamos el mercado y definimos estrategias.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Planificación',
    description: 'Desarrollamos tu modelo de negocio y plan estratégico personalizado.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Implementación',
    description: 'Acompañamos la ejecución con seguimiento continuo y ajustes.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Escalamiento',
    description: 'Facilitamos el crecimiento y acceso a redes de inversión.',
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 text-[#004B87] rounded-md mb-4 text-sm font-semibold">
            NUESTRO PROCESO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#004B87] mb-4">
            Metodología Comprobada
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un proceso estructurado para transformar tu idea en un negocio exitoso
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white border border-slate-200 rounded-xl p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#004B87] to-[#D4A373] rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-slate-200">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#004B87] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
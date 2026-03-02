import { motion } from 'motion/react';
import { Building2, Users, Briefcase, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    number: '150+',
    label: 'Empresas Creadas',
  },
  {
    icon: Users,
    number: '500+',
    label: 'Emprendedores Asesorados',
  },
  {
    icon: Briefcase,
    number: '200+',
    label: 'Proyectos Activos',
  },
  {
    icon: TrendingUp,
    number: '92%',
    label: 'Tasa de Éxito',
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-[#004B87]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Resultados que nos Respaldan
          </h2>
          <p className="text-xl text-white/80">
            Cifras que demuestran nuestro compromiso con el emprendimiento
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="w-16 h-16 bg-[#D4A373] rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              
              <div className="text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María Rodríguez',
    role: 'CEO - TechStart Solutions',
    image: '👩‍💼',
    content: 'IGNITE UNACH transformó completamente mi visión de negocio. Su metodología y acompañamiento fueron claves para conseguir $500K en financiamiento.',
    rating: 5,
    result: 'Financiamiento de $500K',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Fundador - EcoInnovate',
    image: '👨‍💼',
    content: 'La consultoría estratégica me ayudó a estructurar mi empresa de forma profesional. En 6 meses pasamos de idea a una empresa con 20 empleados.',
    rating: 5,
    result: '20 empleados en 6 meses',
  },
  {
    name: 'Ana Jiménez',
    role: 'Co-fundadora - Digital Hub',
    image: '👩‍💻',
    content: 'El programa de incubación superó mis expectativas. El networking con otros emprendedores y mentores fue invaluable para el crecimiento de mi startup.',
    rating: 5,
    result: '300% crecimiento anual',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Director - AgriTech Pro',
    image: '👨‍🌾',
    content: 'Gracias al modelo de negocio que desarrollamos juntos, logramos escalar operaciones a 3 estados en menos de un año. Resultados extraordinarios.',
    rating: 5,
    result: 'Expansión a 3 estados',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-[#004B87] text-white rounded-full text-sm font-semibold mb-4">
            CASOS DE ÉXITO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#004B87] mb-4">
            Lo Que Dicen Nuestros Emprendedores
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Historias reales de transformación y éxito empresarial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#004B87] to-[#D4A373] rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-600 text-sm mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg px-3 py-2 mb-6">
                <span className="text-xs font-semibold text-[#004B87]">
                  ✨ {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-[#004B87] text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#004B87] mb-2">4.9/5</div>
              <div className="text-sm text-slate-600">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4A373] mb-2">500+</div>
              <div className="text-sm text-slate-600">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#004B87] mb-2">92%</div>
              <div className="text-sm text-slate-600">Tasa de Éxito</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4A373] mb-2">$50M+</div>
              <div className="text-sm text-slate-600">Capital Levantado</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

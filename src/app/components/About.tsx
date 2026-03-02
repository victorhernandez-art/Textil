import { motion } from 'motion/react';
import { Award, Users, Target, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Compromiso con la calidad en cada proyecto',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Trabajo en equipo con emprendedores',
  },
  {
    icon: Target,
    title: 'Resultados',
    description: 'Enfoque en objetivos medibles',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Soluciones creativas y actuales',
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-[#004B87] rounded-md mb-4 text-sm font-semibold">
              QUIÉNES SOMOS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#004B87] mb-6">
              Impulsando el Emprendimiento en Chiapas
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              La Incubadora de Negocios IGNITE UNACH es una iniciativa de la Universidad 
              Autónoma de Chiapas dedicada a fomentar el desarrollo empresarial en la región.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ofrecemos servicios especializados de consultoría empresarial, desarrollo de 
              planes de negocio y gestión de recursos, dirigidos tanto a la comunidad 
              universitaria como al público en general.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border-l-4 border-[#D4A373] pl-4">
                <div className="text-3xl font-bold text-[#004B87] mb-1">15+</div>
                <div className="text-sm text-slate-600">Años de Experiencia</div>
              </div>
              <div className="border-l-4 border-[#D4A373] pl-4">
                <div className="text-3xl font-bold text-[#004B87] mb-1">500+</div>
                <div className="text-sm text-slate-600">Emprendedores</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765020553734-2c050ddb9494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc3MDkxMTc3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="IGNITE UNACH - Consultoría Empresarial"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#004B87] to-[#D4A373] rounded-lg flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-[#004B87] mb-2">{value.title}</h4>
              <p className="text-sm text-slate-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
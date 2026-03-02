import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1634547487344-c3aa2e1aacdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMG9mZmljZSUyMHNreXNjcmFwZXJ8ZW58MXx8fHwxNzcxMDAwMjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="IGNITE UNACH Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#004B87]/95 via-[#004B87]/90 to-[#004B87]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-md mb-6 border border-white/20">
                <span className="text-white/90 text-sm font-medium">UNIVERSIDAD AUTÓNOMA DE CHIAPAS</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Incubadora de Negocios
              <span className="block text-[#D4A373] mt-2">IGNITE UNACH</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
            >
              Impulsamos el desarrollo empresarial a través de consultoría estratégica, 
              desarrollo de planes de negocio y gestión integral de recursos.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {[
                'Asesoría personalizada con expertos certificados',
                'Acceso a redes de inversión y financiamiento',
                'Acompañamiento continuo en cada etapa'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A373] flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4A373] text-white rounded-lg hover:bg-[#B8885A] transition-all font-medium"
              >
                <span>Solicitar Asesoría</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all font-medium"
              >
                Conocer Servicios
              </a>
            </motion.div>
          </div>

          {/* Right side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Resultados que nos respaldan</h3>
              <div className="space-y-6">
                {[
                  { number: '500+', label: 'Emprendedores Asesorados' },
                  { number: '150+', label: 'Empresas Creadas' },
                  { number: '92%', label: 'Tasa de Éxito' },
                  { number: '$50M+', label: 'Capital Levantado' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0">
                    <span className="text-white/80">{stat.label}</span>
                    <span className="text-3xl font-bold text-[#D4A373]">{stat.number}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

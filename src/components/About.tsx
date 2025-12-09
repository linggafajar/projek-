import { Award, Shield, Users, Clock } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Berpengalaman',
      description: 'Lebih dari 10 tahun melayani wisatawan dengan profesional',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Aman & Terpercaya',
      description: 'Armada terawat dan driver berpengalaman di medan Dieng',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: '5000+ Pelanggan',
      description: 'Dipercaya ribuan wisatawan dari berbagai kota',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Layanan 24/7',
      description: 'Siap melayani kapan saja untuk pengalaman terbaik Anda',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
              Tentang Kami
            </span>
          </div>
          <h2 className="mt-2 text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold">
            Mitra Terpercaya Petualangan Dieng Anda
          </h2>
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Kami menyediakan layanan persewaan jeep terbaik untuk menjelajahi keindahan Dieng Plateau. 
            Dengan armada lengkap dan driver profesional, kepuasan Anda adalah prioritas kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-5 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 md:w-7 h-6 md:h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2 md:mb-3 text-lg md:text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
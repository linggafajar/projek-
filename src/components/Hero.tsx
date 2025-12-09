import { ArrowRight, Star, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1612441822281-778c7b2d4f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwbW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzY1MTQ5OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dieng Mountain Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-cyan-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-40 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 md:mb-8 border border-white/20">
            <MapPin className="w-3 md:w-4 h-3 md:h-4 text-cyan-400" />
            <span className="text-white/90 text-xs md:text-sm">Dataran Tinggi Dieng, Jawa Tengah</span>
          </div>
          
          <h1 className="text-white mb-4 md:mb-6 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Petualangan Menakjubkan di <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Dieng Plateau</span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Jelajahi keajaiban alam Dieng dengan armada jeep modern kami. Nikmati sunrise spektakuler, 
            kawah vulkanik, dan telaga warna yang memesona.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white text-sm md:text-base font-semibold">5.0</span>
            <span className="text-white/70 text-xs md:text-sm">• 5000+ wisatawan puas</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-0">
            <button
              onClick={scrollToContact}
              className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base font-medium"
            >
              Mulai Petualangan
              <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('packages');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white rounded-xl hover:bg-white/20 transition-all border border-white/30 hover:border-white/50 text-sm md:text-base font-medium"
            >
              Lihat Paket Wisata
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 pb-6 md:pb-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: '10+', label: 'Tahun Pengalaman' },
                { value: '5000+', label: 'Wisatawan' },
                { value: '15+', label: 'Armada Jeep' },
                { value: '4.9', label: 'Rating Pelanggan' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-white text-xl md:text-2xl lg:text-3xl mb-1 font-bold">{stat.value}</div>
                  <div className="text-white/70 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
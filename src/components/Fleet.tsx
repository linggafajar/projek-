import { Users, Cog, CheckCircle, Sparkles } from 'lucide-react';

export function Fleet() {
  const jeeps = [
    {
      name: 'Jeep CJ7 Classic',
      image: 'https://images.unsplash.com/photo-1547233598-6891e69da46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWVwJTIwbW91bnRhaW4lMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY1MTkwNTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: '4-6 Orang',
      transmission: 'Manual 4WD',
      features: ['AC', 'Audio System', 'Safety Belt', 'Roof Canvas'],
      badge: 'Populer'
    },
    {
      name: 'Jeep Wrangler',
      image: 'https://images.unsplash.com/photo-1715066961738-7bb171dd8ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmYtcm9hZCUyMGplZXB8ZW58MXx8fHwxNzY1MTkwNTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: '4-5 Orang',
      transmission: 'Automatic 4WD',
      features: ['AC', 'Premium Audio', 'Safety Belt', 'LED Lights'],
      badge: 'Premium'
    },
    {
      name: 'Hardtop FJ40',
      image: 'https://images.unsplash.com/photo-1609861517208-e5b7b4cd4b87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRvdXJpc218ZW58MXx8fHwxNzY1MTkwNTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: '6-8 Orang',
      transmission: 'Manual 4WD',
      features: ['Heater', 'Sound System', 'Safety Belt', 'Spacious'],
      badge: 'Keluarga'
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
              Armada Kami
            </span>
          </div>
          <h2 className="mt-2 text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold">
            Pilihan Jeep Terbaik untuk Petualangan Anda
          </h2>
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Semua armada kami terawat dengan baik dan siap membawa Anda menjelajahi setiap sudut Dieng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jeeps.map((jeep, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={jeep.image}
                  alt={jeep.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-sm flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    {jeep.badge}
                  </div>
                </div>
                
                <h3 className="absolute bottom-4 left-4 text-white">{jeep.name}</h3>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-cyan-50 rounded-lg">
                      <Users className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{jeep.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Cog className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{jeep.transmission}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {jeep.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105">
                  Pilih Jeep Ini
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
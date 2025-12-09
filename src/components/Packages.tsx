import { Check, Star, Zap } from 'lucide-react';

export function Packages() {
  const packages = [
    {
      name: 'Paket Sunrise',
      price: 'Rp 350.000',
      duration: '4-5 Jam',
      popular: false,
      features: [
        'Penjemputan Hotel (02:30 - 03:00)',
        'Sunrise di Bukit Sikunir',
        'Telaga Warna & Telaga Pengilon',
        'Kawah Sikidang',
        'Driver berpengalaman',
        'BBM included'
      ]
    },
    {
      name: 'Paket Full Day',
      price: 'Rp 550.000',
      duration: '10-12 Jam',
      popular: true,
      features: [
        'Penjemputan Hotel (02:30 - 03:00)',
        'Sunrise di Bukit Sikunir',
        'Telaga Warna & Telaga Pengilon',
        'Kawah Sikidang',
        'Candi Arjuna',
        'Dieng Plateau Theatre',
        'Batu Ratapan Angin',
        'Driver berpengalaman',
        'BBM included'
      ]
    },
    {
      name: 'Paket Custom',
      price: 'Mulai Rp 400.000',
      duration: 'Fleksibel',
      popular: false,
      features: [
        'Tentukan destinasi sendiri',
        'Waktu fleksibel',
        'Driver berpengalaman',
        'BBM included',
        'Konsultasi rute gratis',
        'Rekomendasi spot foto terbaik'
      ]
    }
  ];

  return (
    <section id="packages" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
              Paket Wisata
            </span>
          </div>
          <h2 className="mt-2 text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold">
            Pilih Paket Sesuai Kebutuhan Anda
          </h2>
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Harga sudah termasuk driver, BBM, dan parkir. Belum termasuk tiket masuk wisata
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-cyan-500 relative' : 'border border-gray-100'
              }`}
            >
              {pkg.popular && (
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Paling Populer</span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-gray-900 mb-3">{pkg.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{pkg.price}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6">
                  <span className="text-gray-600 text-sm">{pkg.duration}</span>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full px-6 py-3.5 rounded-xl transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Pesan Paket Ini
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-50 border border-cyan-100 rounded-xl">
            <Star className="w-5 h-5 text-cyan-600" />
            <p className="text-gray-700">
              *Harga untuk 1 unit jeep (kapasitas 4-6 orang). Hubungi kami untuk group besar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
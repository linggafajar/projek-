import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      location: 'Jakarta',
      rating: 5,
      text: 'Pengalaman yang luar biasa! Driver sangat ramah dan tahu semua spot foto terbaik. Jeepnya juga bersih dan nyaman. Highly recommended!',
      date: 'November 2024',
      avatar: 'BS'
    },
    {
      name: 'Siti Nurhaliza',
      location: 'Bandung',
      rating: 5,
      text: 'Sunrise di Sikunir dengan jeep mereka benar-benar magical. Pelayanan profesional, tepat waktu, dan harga sangat worth it. Pasti balik lagi!',
      date: 'Oktober 2024',
      avatar: 'SN'
    },
    {
      name: 'Andi Wijaya',
      location: 'Surabaya',
      rating: 5,
      text: 'Sewa jeep untuk rombongan keluarga 3 unit. Semua driver kompak dan kooperatif. Perjalanan jadi lebih menyenangkan. Terima kasih!',
      date: 'September 2024',
      avatar: 'AW'
    },
    {
      name: 'Rina Kusuma',
      location: 'Yogyakarta',
      rating: 5,
      text: 'Paket full day sangat lengkap! Bisa keliling semua tempat wisata Dieng dalam sehari. Jeepnya terawat, driver berpengalaman. Top!',
      date: 'Agustus 2024',
      avatar: 'RK'
    },
    {
      name: 'Denny Pratama',
      location: 'Semarang',
      rating: 5,
      text: 'Booking mudah, respon cepat, dan pelayanan memuaskan. Jeepnya keren banget buat foto-foto. Next trip ke Dieng pasti pakai jasa mereka lagi!',
      date: 'Juli 2024',
      avatar: 'DP'
    },
    {
      name: 'Maya Sari',
      location: 'Malang',
      rating: 5,
      text: 'Driver ramah dan informatif, kasih banyak tips wisata Dieng. Jeepnya nyaman meski jalannya menanjak. Pengalaman yang tak terlupakan!',
      date: 'Juni 2024',
      avatar: 'MS'
    }
  ];

  const gradients = [
    'from-cyan-500 to-blue-600',
    'from-blue-500 to-indigo-600',
    'from-indigo-500 to-purple-600',
    'from-purple-500 to-pink-600',
    'from-pink-500 to-rose-600',
    'from-rose-500 to-orange-600'
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
              Testimoni
            </span>
          </div>
          <h2 className="mt-2 text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Kepuasan pelanggan adalah kebanggaan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-cyan-100" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradients[index]} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
                <span className="text-xs text-gray-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div>
              <div className="text-2xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">4.9/5.0</div>
              <div className="text-sm text-gray-600">dari 500+ review</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
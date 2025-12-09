import { Mountain, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl">Dieng Jeep</span>
                <span className="block text-xs text-cyan-400">Adventure Tours</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Mitra terpercaya Anda untuk petualangan tak terlupakan di Dataran Tinggi Dieng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-white">Menu Cepat</h4>
            <ul className="space-y-3">
              {['Beranda', 'Tentang Kami', 'Armada', 'Paket Wisata', 'Testimoni', 'Kontak'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="mb-6 text-white">Destinasi Populer</h4>
            <ul className="space-y-3">
              {[
                'Bukit Sikunir',
                'Telaga Warna',
                'Kawah Sikidang',
                'Candi Arjuna',
                'Dieng Theatre',
                'Batu Ratapan Angin'
              ].map((dest) => (
                <li key={dest}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all" />
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-white/5 rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                </div>
                <span className="text-gray-400 text-sm">
                  Jl. Raya Dieng No. 123<br />
                  Wonosobo, Jawa Tengah
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                </div>
                <a href="tel:+6281234567890" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                </div>
                <a href="mailto:info@diengjeep.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  info@diengjeep.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Dieng Jeep Adventure. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Kebijakan Privasi
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    package: 'sunrise',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format WhatsApp message
    const message = `Halo, saya ingin booking jeep:\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo HP: ${formData.phone}\nTanggal: ${formData.date}\nPaket: ${formData.package}\nPesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
              Kontak Kami
            </span>
          </div>
          <h2 className="mt-2 text-gray-900 text-2xl md:text-3xl lg:text-4xl font-bold">
            Siap Membantu Perjalanan Anda
          </h2>
          <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Hubungi kami untuk booking atau informasi lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-gray-900 mb-8">Informasi Kontak</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 mb-2">Telepon / WhatsApp</p>
                  <a href="tel:+6281234567890" className="text-gray-600 hover:text-cyan-600 transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 mb-2">Email</p>
                  <a href="mailto:info@diengjeep.com" className="text-gray-600 hover:text-cyan-600 transition-colors">
                    info@diengjeep.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 mb-2">Alamat</p>
                  <p className="text-gray-600">
                    Jl. Raya Dieng No. 123<br />
                    Dieng, Wonosobo, Jawa Tengah
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-8 rounded-2xl border border-cyan-100">
              <h4 className="text-gray-900 mb-6">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all shadow-sm hover:shadow-lg hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all shadow-sm hover:shadow-lg hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all shadow-sm hover:shadow-lg hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-gray-900 mb-8">Form Booking</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    No. HP *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white transition-all"
                    placeholder="08xxx"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Tanggal *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="package" className="block text-gray-700 mb-2">
                    Pilih Paket *
                  </label>
                  <select
                    id="package"
                    name="package"
                    required
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white transition-all"
                  >
                    <option value="sunrise">Paket Sunrise</option>
                    <option value="fullday">Paket Full Day</option>
                    <option value="custom">Paket Custom</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Pesan Tambahan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white resize-none transition-all"
                  placeholder="Tulis pesan atau pertanyaan Anda..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Kirim via WhatsApp
              </button>

              <p className="text-sm text-gray-500 text-center">
                Dengan mengirim form ini, Anda akan diarahkan ke WhatsApp kami
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
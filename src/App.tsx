import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Menu, 
  X, 
  CheckCircle,
  Users,
  Trophy,
  Clock,
  ArrowRight,
  Home,
  Palette,
  Trees,
  HardHat,
  Star,
  Quote
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <HardHat className="w-12 h-12" />,
      title: "General Contractor",
      description: "Layanan konstruksi menyeluruh dari perencanaan hingga penyelesaian proyek dengan standar kualitas tinggi dan tepat waktu.",
      features: ["Manajemen Proyek", "Quality Control", "Timeline Management"]
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Architecture",
      description: "Desain arsitektur inovatif yang memadukan estetika modern dengan fungsionalitas optimal sesuai kebutuhan klien.",
      features: ["Desain Konseptual", "Gambar Kerja", "3D Visualization"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Interior Design",
      description: "Solusi desain interior yang menciptakan ruang yang nyaman, fungsional, dan estetis dengan sentuhan modern.",
      features: ["Space Planning", "Material Selection", "Furniture Design"]
    },
    {
      icon: <Trees className="w-12 h-12" />,
      title: "Landscape",
      description: "Desain dan implementasi landscape yang harmonis dengan lingkungan sekitar untuk menciptakan ruang hijau yang indah.",
      features: ["Garden Design", "Hardscape", "Plant Selection"]
    }
  ];

  const stats = [
    { number: "100+", label: "Proyek Selesai", icon: <Trophy className="w-6 h-6" /> },
    { number: "5+", label: "Tahun Pengalaman", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Klien Puas", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Dukungan Layanan", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const projects = [
    {
      title: "Rumah Tinggal Modern Minimalis",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&h=600",
      description: "Desain rumah modern dengan konsep minimalis yang elegan"
    },
    {
      title: "Kantor Perusahaan",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600",
      description: "Bangunan kantor modern dengan fasilitas lengkap"
    },
    {
      title: "Taman Kota Hijau",
      category: "Landscape",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&h=600",
      description: "Penataan landscape untuk ruang publik yang asri"
    },
    {
      title: "Interior Restoran Mewah",
      category: "Interior",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=600",
      description: "Desain interior restoran dengan nuansa mewah dan modern"
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      position: "CEO PT Maju Bersama",
      content: "PT Arta Persada Construction memberikan layanan terbaik untuk proyek kantor kami. Hasil sangat memuaskan dan sesuai timeline.",
      rating: 5
    },
    {
      name: "Siti Rahayu",
      position: "Pemilik Rumah",
      content: "Desain rumah yang dibuat sangat sesuai dengan keinginan keluarga. Tim sangat profesional dan responsif.",
      rating: 5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo.jpeg" alt="Logo" className="w-44 h-full rounded-lg" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#006e77] transition-colors">
                Beranda
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#006e77] transition-colors">
                Tentang
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#006e77] transition-colors">
                Layanan
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-[#006e77] transition-colors">
                Proyek
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#006e77] transition-colors">
                Kontak
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-[#006e77] transition-colors">
                  Beranda
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-[#006e77] transition-colors">
                  Tentang
                </button>
                <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-700 hover:text-[#006e77] transition-colors">
                  Layanan
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-gray-700 hover:text-[#006e77] transition-colors">
                  Proyek
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700 hover:text-[#006e77] transition-colors">
                  Kontak
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Membangun Masa Depan dengan
                <span className="text-[#006e77] block">Kualitas Terbaik</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                PT Arta Persada Construction adalah pilihan terpercaya untuk layanan konstruksi, arsitektur, interior, dan landscape di Jepara, Jawa Tengah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#006e77] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Konsultasi Gratis</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="border-2 border-[#006e77] text-[#006e77] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Lihat Proyek Kami
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=800&h=600" 
                alt="Construction site" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">100+ Proyek</p>
                    <p className="text-gray-600">Berhasil Diselesaikan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#006e77]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang PT Arta Persada Construction
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dengan pengalaman lebih dari 5 tahun di industri konstruksi, kami telah membantu berbagai klien mewujudkan impian mereka melalui layanan konstruksi yang berkualitas tinggi dan terpercaya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600" 
                alt="Construction team" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Memilih Kami?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kualitas Terjamin</h4>
                    <p className="text-gray-600">Menggunakan material berkualitas tinggi dan standar konstruksi internasional</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tim Profesional</h4>
                    <p className="text-gray-600">Didukung oleh tim ahli berpengalaman dan bersertifikat</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tepat Waktu</h4>
                    <p className="text-gray-600">Komitmen menyelesaikan proyek sesuai timeline yang disepakati</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Harga Kompetitif</h4>
                    <p className="text-gray-600">Penawaran harga yang transparan dan sesuai dengan kualitas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi yang lengkap untuk memenuhi kebutuhan proyek Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#006e77] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proyek Terbaik Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Lihat berbagai proyek yang telah kami selesaikan dengan kualitas terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="bg-[#006e77] text-xs px-3 py-1 rounded-full inline-block mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Testimoni Klien
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dengarkan apa yang dikatakan klien kami tentang layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#006e77]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hubungi Kami
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Siap membantu mewujudkan proyek impian Anda. Konsultasi gratis!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Alamat</h4>
                    <p className="text-blue-100">
                      Jl Mengarang, Ds. Doreng, Kec. Nalumsari<br />
                      Kab. Jepara - Jawa Tengah
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Telepon</h4>
                    <p className="text-blue-100">
                      <a href="tel:0895364374949" className="hover:underline">0895364374949</a><br />
                      <a href="tel:085234125031" className="hover:underline">085234125031</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-blue-100">
                      <a href="mailto:pt.artapersadacontruction@gmail.com" className="hover:underline">
                        pt.artapersadacontruction@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Instagram</h4>
                    <p className="text-blue-100">
                      <a href="https://instagram.com/pt.artapersada" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        @pt.artapersada
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nomor telepon"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ceritakan tentang proyek Anda..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#006e77] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-[#006e77] p-2 rounded-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-lg font-bold">PT Arta Persada</span>
                  <p className="text-sm text-gray-400">Construction</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Membangun masa depan dengan kualitas terbaik. Spesialis dalam general contractor, 
                arsitektur, interior, dan landscape.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/pt.artapersada" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>General Contractor</li>
                <li>Architecture</li>
                <li>Interior Design</li>
                <li>Landscape</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>Jl Mengarang, Ds. Doreng</p>
                <p>Kec. Nalumsari, Kab. Jepara</p>
                <p>Jawa Tengah</p>
                <p>0895364374949</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT Arta Persada Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
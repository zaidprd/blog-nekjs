// src/app/page.tsx
import type { Metadata } from 'next';
import Container from '../../components/container';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website Profesional Terbaik | CuriousByte',
  description: 'Layanan jasa pembuatan website profesional dengan harga terjangkau. Kami membuat website responsif, SEO-friendly, dan berkualitas tinggi untuk bisnis Anda.',
  keywords: 'jasa pembuatan website, jasa buat website, website profesional, desain website, website bisnis, website murah, jasa web developer',
  robots: 'index, follow',
  openGraph: {
    title: 'Jasa Pembuatan Website Profesional Terbaik | CuriousByte',
    description: 'Layanan jasa pembuatan website profesional dengan harga terjangkau. Website responsif dan SEO-friendly.',
    type: 'website',
    url: 'https://curiousbyte.com/',
  },
  alternates: {
    canonical: 'https://curiousbyte.com/',
  },
};

export default function Home() {
  return (
    <>
      {/* Bagian Hero */}
     <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white pt-32 pb-32">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-4">
              Jasa Pembuatan Website Profesional
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
              Kami menawarkan layanan jasa pembuatan website yang cepat, modern, dan dirancang khusus untuk meningkatkan bisnis Anda dengan teknologi terdepan.
            </p>
            <a href="#harga" className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
              Lihat Paket Harga
            </a>
          </div>
        </Container>
      </div>

      {/* Section: Butuh Website dan Saya... */}
      <div className="bg-white py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
              Butuh Website dan Saya...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Sudah siap dengan materinya */}
              <div className="text-center p-6">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Sudah siap dengan materinya
                </h3>
                <p className="text-gray-600">
                  Kirimkan materi atau rujukan website yang anda inginkan ke tim kami. Website Anda akan online paling lama dalam 3 hari.
                </p>
              </div>

              {/* Punya brosur atau materi lain */}
              <div className="text-center p-6">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Punya brosur atau materi lain
                </h3>
                <p className="text-gray-600">
                  Tim kami akan membantu mengkonversi materi website sesuai dengan rujukan yang anda inginkan.
                </p>
              </div>

              {/* Belum punya materi */}
              <div className="text-center p-6">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Belum punya materi
                </h3>
                <p className="text-gray-600">
                  Tim kami akan membantu anda penyelesaian untuk website yang akan dibuat.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <a href="#harga" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Buat Website Sekarang
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Bagian Harga Layanan */}
      <div id="harga" className="bg-gray-50 py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Harga
            </h2>
            <p className="text-gray-600">
              Miliki segera website company profile anda hanya dengan Rp. 69.000 per bulan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kartu Paket Basic */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-blue-500 text-white p-4 text-center relative">
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-bold transform rotate-12">
                  HEMAT
                </div>
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-sm opacity-90">setahun</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-sm text-gray-500">Rp</span>
                  <span className="text-4xl font-extrabold text-blue-600">800</span>
                  <span className="text-sm text-gray-500">ribu</span>
                </div>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    5 Halaman
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    4 Hari Kerja
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Entry 1 GB
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Gratis Domain .com
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Gratis SSL
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    5 Image Plus Logo
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Tombol WhatsApp
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    1 Artikel SEO
                  </li>
                </ul>
                <a href="#" className="mt-8 block text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  Pesan
                </a>
              </div>
            </div>

            {/* Kartu Paket Pro */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-pink-500 text-white p-4 text-center relative">
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-bold transform rotate-12">
                  POPULER
                </div>
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-sm opacity-90">setahun</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-sm text-gray-500">Rp</span>
                  <span className="text-4xl font-extrabold text-pink-600">1500</span>
                  <span className="text-sm text-gray-500">ribu</span>
                </div>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    5 Halaman
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    4 Hari Kerja
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Unlimited Small
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Gratis Domain dot com
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Gratis SSL
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    10 Image Plus Logo
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Tombol WhatsApp
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    5 Artikel SEO
                  </li>
                </ul>
                <a href="#" className="mt-8 block text-center bg-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300">
                  Pesan
                </a>
              </div>
            </div>

            {/* Kartu Paket Business */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center relative">
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm font-bold transform rotate-12">
                  PREMIUM
                </div>
                <h3 className="text-2xl font-bold">Business</h3>
                <p className="text-sm opacity-90">setahun</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-sm text-gray-500">Rp</span>
                  <span className="text-4xl font-extrabold text-blue-600">2500</span>
                  <span className="text-sm text-gray-500">ribu</span>
                </div>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    5 Halaman +
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    6 Hari Kerja
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Unlimited Small
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Gratis Domain dot com
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Gratis SSL
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    15 Image Plus Logo
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    Tombol WhatsApp
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    10 Artikel SEO
                  </li>
                </ul>
                <a href="#" className="mt-8 block text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                  Pesan
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Section Portfolio */}
      <div className="bg-white py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Portfolio Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat berbagai website profesional yang telah kami buat untuk klien-klien kami. Setiap project dibuat dengan dedikasi tinggi dan teknologi terdepan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold">Website Bisnis</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">E-Commerce Modern</h3>
                <p className="text-gray-600 mb-4">Website toko online dengan fitur lengkap dan design modern untuk meningkatkan penjualan.</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition duration-300">
                  Lihat Detail →
                </a>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold">Company Profile</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Profil Perusahaan</h3>
                <p className="text-gray-600 mb-4">Website company profile profesional yang menampilkan kredibilitas dan layanan perusahaan.</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition duration-300">
                  Lihat Detail →
                </a>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold">Website Layanan</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Platform Layanan</h3>
                <p className="text-gray-600 mb-4">Website untuk penyedia jasa dengan sistem booking dan manajemen pelanggan terintegrasi.</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition duration-300">
                  Lihat Detail →
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Lihat Semua Portfolio
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
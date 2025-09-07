// src/components/header.tsx
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from './container';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Menggunakan usePathname

  const isHomePage = pathname === '/';

  // Fungsi untuk mendeteksi posisi gulir dan halaman
  useEffect(() => {
    // Jika tidak di halaman Home, pastikan header selalu aktif (hitam)
    if (!isHomePage) {
      setIsScrolled(true);
      return; // Berhenti di sini, tidak perlu mendengarkan scroll
    }
    
    // Hanya untuk halaman Home, tambahkan event listener untuk scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Tentukan warna teks dan ukuran logo secara dinamis
  const textColor = isScrolled || !isHomePage ? 'text-black' : 'text-white';
  const logoSize = isScrolled || !isHomePage ? 'text-xl' : 'text-2xl';

  return (
    <>
      {/* Navbar Desktop */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled || !isHomePage ? 'bg-white bg-opacity-90 shadow-md backdrop-blur-sm' : 'bg-transparent'}
        `}
      >
        <Container>
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            {/* Logo atau Judul Situs */}
            <div className="flex justify-start lg:w-0 lg:flex-1 transition-all duration-300">
              <h2
                className={`
                  font-bold tracking-tighter leading-tight
                  ${logoSize} ${textColor}
                `}
              >
                <Link href="/" className="hover:text-gray-900 transition duration-300">
                  Yajodoh
                </Link>
              </h2>
            </div>

            {/* Tautan Navigasi (Desktop) */}
            <nav className="hidden md:flex space-x-10">
              <Link
                href="/"
                className={`text-base font-medium transition duration-300 ${isScrolled || !isHomePage ? 'text-black hover:text-blue-600' : 'text-white hover:text-gray-300'}`}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className={`text-base font-medium transition duration-300 ${isScrolled || !isHomePage ? 'text-black hover:text-blue-600' : 'text-white hover:text-gray-300'}`}
              >
                Blog
              </Link>
              <Link
                // Perbaikan: Mengubah href dari "/kontak" menjadi "/contact"
                href="/kontak"
                className={`text-base font-medium transition duration-300 ${isScrolled || !isHomePage ? 'text-black hover:text-blue-600' : 'text-white hover:text-gray-300'}`}
              >
                Kontak
              </Link>
              <Link
                href="/company"
                className={`text-base font-medium transition duration-300 ${isScrolled || !isHomePage ? 'text-black hover:text-blue-600' : 'text-white hover:text-gray-300'}`}
              >
                Company
              </Link>
            </nav>

            {/* Tombol Login dan Hamburger (Desktop) */}
            <div className="hidden md:flex items-center justify-end lg:w-0 lg:flex-1">
              <Link href="/login" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
                Login
              </Link>
            </div>

            {/* Tombol Hamburger (Mobile) */}
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className={`rounded-md p-2 inline-flex items-center justify-center transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-gray-400 hover:text-gray-500' : 'text-white hover:text-gray-200'}`}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Buka menu utama</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Backdrop Transparan (Mobile) */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-40"
          aria-hidden="true"
        ></div>
      )}

      {/* Menu Mobile (Slide-in) */}
      <div
        className={`
          md:hidden fixed top-0 right-0 z-50 w-4/5 h-[70vh] transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="bg-white bg-opacity-90 h-full shadow-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-end">
              <button
                onClick={toggleMenu}
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Tutup menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="mt-6 flex flex-col space-y-4">
              {/* Teks menu mobile ini akan selalu hitam karena background-nya putih */}
              <Link href="/" onClick={toggleMenu} className="text-lg font-medium text-black hover:text-blue-600 transition duration-300">
                Home
              </Link>
              <Link href="/blog" onClick={toggleMenu} className="text-lg font-medium text-black hover:text-blue-600 transition duration-300">
                Blog
              </Link>
              <Link href="/kontak" onClick={toggleMenu} className="text-lg font-medium text-black hover:text-blue-600 transition duration-300">
                Kontak
              </Link>
              <Link href="/company" onClick={toggleMenu} className="text-lg font-medium text-black hover:text-blue-600 transition duration-300">
                Company
              </Link>
            </nav>
          </div>

          {/* Bagian Bawah Menu (Teks & Tombol) */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link href="/login" onClick={toggleMenu} className="block text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              Login
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Dapatkan website modern dan profesional untuk bisnis Anda.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

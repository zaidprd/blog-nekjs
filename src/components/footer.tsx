import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-between">
          {/* Logo dan Slogan */}
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 lg:w-1/2">
            <h3 className="text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left">
              Yajodoh
            </h3>
            <p className="text-lg text-gray-600 mt-2 text-center lg:text-left">
              Bikin website jadi mudah.
            </p>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:w-1/2 lg:pl-4">
            <a
              href="#harga"
              className="mx-3 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded-full"
            >
              Lihat Paket Harga
            </a>
            <a
              href="mailto:email@yajodoh.com"
              className="mx-3 font-bold text-gray-700 hover:underline"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="mt-8 pt-6 text-center border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-1">
            © 2024 Ya Jodoh | All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
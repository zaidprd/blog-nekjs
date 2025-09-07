// src/app/contact/page.tsx

import Container from "@/components/container";

// ... tambahkan import lain yang Anda butuhkan

export default async function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* Bagian Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white pt-48 pb-32">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Hubungi Kami
            </h1>
            <p className="mt-4 max-w-lg text-lg opacity-80">
              Kami siap membantu. Kirimkan pesan atau pertanyaan Anda kepada kami.
            </p>
          </div>
        </Container>
      </div>

      {/* Konten Halaman Contact */}
      <Container>
        {/* Tambahkan konten halaman kontak Anda di sini, misalnya formulir */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center">Formulir Kontak</h2>
          {/* ... kode formulir kontak ... */}
        </div>
      </Container>
    </div>
  );
}

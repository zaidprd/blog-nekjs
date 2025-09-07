// src/app/company/page.tsx

import Container from "@/components/container";

export default function CompanyPage() {
  return (
    <div className="overflow-hidden">
      {/* Bagian Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white pt-48 pb-32">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Tentang Kami
            </h1>
            <p className="mt-4 max-w-lg text-lg opacity-80">
              Mengenal lebih dekat tim dan visi kami.
            </p>
          </div>
        </Container>
      </div>

      {/* Konten Halaman Company */}
      <Container>
        {/* Tambahkan konten tentang perusahaan Anda di sini */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Siapa Kami?</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Kami adalah tim yang berdedikasi untuk menciptakan solusi digital terbaik. Visi kami adalah membantu setiap bisnis untuk berkembang melalui kehadiran online yang kuat dan profesional.
          </p>
          {/* Anda bisa menambahkan bagian lain seperti tim, misi, atau cerita perusahaan di sini */}
        </div>
      </Container>
    </div>
  );
}
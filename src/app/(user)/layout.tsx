// src/app/(user)/layout.tsx

// Hapus import Header dan Footer
// import Header from "@/components/header";
// import Footer from "@/components/footer";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Tidak perlu div atau komponen tambahan, cukup kembalikan children
    <>{children}</>
  );
}
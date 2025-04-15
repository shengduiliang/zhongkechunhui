'use client'


import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  if (pathname.startsWith("/article")) {
    return children;
  }

  return <div>
    <Navbar />
    {children}
    <Footer />
  </div>
}
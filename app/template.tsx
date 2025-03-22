import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>
    <Navbar />
    {children}
    <Footer />
  </div>
}
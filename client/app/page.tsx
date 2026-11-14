import { CapabilityPage } from "./_components/CapabilityPage";
import { Footer } from "./_components/Footer";
import { HomePage } from "./_components/HomePage";
import { Navbar } from "./_components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#f5f0e5] text-[#0b3328]">
      <Navbar />
      <CapabilityPage />
      <HomePage />
      <Footer />
    </main>
  );
}

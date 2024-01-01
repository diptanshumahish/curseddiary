import About from "@/components/Home/About";
import Header from "@/components/Home/Header";
import RealLife from "@/components/Home/RealLife";
import TrendingSection from "@/components/Home/TrendingSection";

export default function Home() {
  return (
    <main>
      <Header />
      <TrendingSection />
      <RealLife />
      <About />
    </main>
  );
}

import About from "@/components/Home/About";
import Header from "@/components/Home/Header";
import RealLife from "@/components/Home/RealLife";
import TrendingSection from "@/components/Home/TrendingSection";
import { revalidatePath } from "next/cache";

export default function Home() {
  revalidatePath("/");
  return (
    <main>
      <Header />
      <TrendingSection />
      <RealLife />
      <About />
    </main>
  );
}

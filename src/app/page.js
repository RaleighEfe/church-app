import NavBar from "@/components/molecules/NavBar";
import HeroSection from "@/components/organisms/HeroSection";
import Ebook from "@/components/organisms/Ebook";
import StartYourJourney from "@/components/organisms/StartYourJourney";
import Audiobook from "@/components/organisms/Audiobook";
import Footer from "@/components/organisms/Footer";
import DigitalPligrim from "@/components/molecules/DigitalPligrim";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Ebook />
      <Audiobook />
      <StartYourJourney />
      <DigitalPligrim />
      <Footer />
    </div>
  );
}

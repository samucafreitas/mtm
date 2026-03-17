import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import CatalogSection from "@/components/CatalogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <PartnershipsSection />
      <CatalogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

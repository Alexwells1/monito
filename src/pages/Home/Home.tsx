import Header from "@/components/ui/navigation/Header";
import Hero from "./sections/Hero";
import PetsSection from "./sections/PetsSection";
import Banner from "./sections/Banner";
import ProductsSection from "./sections/ProductsSection";
import AdoptionBanner from "./sections/AdoptionBanner";
import PetKnowledgeSection from "./sections/PetKnowledgeSection";
import Footer from "@/components/ui/navigation/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PetsSection />
      <Banner />
      <ProductsSection />
      <AdoptionBanner/>
      <PetKnowledgeSection/>
      <Footer/>

    </>
  );
}

import HeroSlider from "@/components/HeroSlider";
import BrandTabs from "@/components/BrandTabs";
import ShowroomBlock from "@/components/ShowroomBlock";
import SpecialOfferSlider from "@/components/SpecialOfferSlider";
import NewsSection from "@/components/NewsSection";
import ContactBlock from "@/components/ContactBlock";
import { getFeaturedCars } from "@/lib/cars";
import { news } from "@/lib/news";

export default function HomePage() {
  const featuredCars = getFeaturedCars();

  return (
    <main>
      <HeroSlider slides={featuredCars} />
      <BrandTabs />
      <ShowroomBlock />
      <SpecialOfferSlider />
      <NewsSection articles={news} />
      <ContactBlock />
    </main>
  );
}

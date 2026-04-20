import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import ClassesSection from '../sections/ClassesSection';
import FeaturesSection from '../sections/FeaturesSection';
import PopularChaptersSection from '../sections/PopularChaptersSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FAQSection from '../sections/FAQSection';
import BlogSection from '../sections/BlogSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4f6f8]">
      <Navbar />
      <main>
        <HeroSection />
        <ClassesSection />
        <FeaturesSection />
        <PopularChaptersSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

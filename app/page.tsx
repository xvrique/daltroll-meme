import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';
import Roadmap from '@/components/Roadmap';
import Tokenomics from '@/components/Tokenomics';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background GIF */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/background.gif)' }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutUs />
        <Roadmap />
        <Tokenomics />
        <Footer />
      </div>
    </main>
  );
}

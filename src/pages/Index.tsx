
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Roadmap from '@/components/Roadmap';
import Projects from '@/components/Projects';
import GetInvolved from '@/components/GetInvolved';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Roadmap />
      <Projects />
      <GetInvolved />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

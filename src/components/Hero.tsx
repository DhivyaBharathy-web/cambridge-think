import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinMovement = () => {
    scrollToSection('#get-involved');
  };

  const handleViewRoadmap = () => {
    scrollToSection('#roadmap');
  };

  const handleSubscribe = () => {
    scrollToSection('#contact');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100/30 to-blue-200/10">
      {/* Professional background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 via-transparent to-blue-50/40"></div>
      </div>

      {/* Subtle geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center container-padding max-w-6xl mx-auto pt-20">
        {/* Headlines with professional typography */}
        <div className="space-y-8 animate-slide-up">
          <h1 className="heading-1 text-slate-800">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Cambridge Think Big
            </span>
          </h1>
          
          <div className="space-y-4">
            <h2 className="heading-3 text-slate-600 max-w-4xl mx-auto font-medium">
              Open Source Think Tank for Global Britain's Entrepreneurial Future
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <p className="body-large text-slate-600 max-w-4xl mx-auto">
            Cambridge Think Big leverages the city's intellectual capital and deeptech ecosystem to inspire 
            a new model for national growth. Join thinkers, builders, investors, and policymakers in 
            co-creating a future where Britain leads global innovation.
          </p>
        </div>

        {/* Professional CTA section */}
        <div className="mt-16 space-y-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Button 
              size="lg" 
              onClick={handleJoinMovement}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-12 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[240px] transform hover:scale-105"
            >
              Join the Movement
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleViewRoadmap}
              className="border-2 border-blue-400 text-blue-600 hover:bg-blue-50 hover:border-blue-500 font-semibold px-12 py-6 text-lg rounded-xl transition-all duration-300 min-w-[240px] transform hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              View Our Roadmap
            </Button>
          </div>

          <div>
            <Button 
              size="lg" 
              variant="ghost" 
              onClick={handleSubscribe}
              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 font-medium px-8 py-4 text-base rounded-xl transition-all duration-300"
            >
              Subscribe for Updates →
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
      
      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;

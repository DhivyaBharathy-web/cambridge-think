
const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="heading-2 text-foreground mb-8">
              About Cambridge Think Big
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="heading-3 text-foreground">
                  Harnessing Cambridge's Intellectual Capital
                </h3>
                <p className="body-large text-foreground font-medium">
                  Cambridge Think Big is an open-source think tank that harnesses the city's world-class 
                  academic and entrepreneurial resources to drive Britain's future as a global innovation leader.
                </p>
              </div>
              
              <div className="space-y-6 body-text text-muted-foreground">
                <p>
                  We serve as a strategic and operational nucleus, rallying academia, government, investors, 
                  and entrepreneurs under one unified banner. Our mission is to leverage Cambridge's 
                  intellectual capital and deeptech ecosystem to inspire a new model for national growth.
                </p>
                
                <p>
                  Through evidence-based policy recommendations, innovative pilot programs, and collaborative 
                  initiatives, we work to position Britain at the forefront of global innovation and 
                  entrepreneurship.
                </p>
              </div>

              <div className="pt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="text-2xl font-bold text-primary mb-2">Open Source</div>
                    <div className="text-sm text-muted-foreground">Transparent and collaborative approach</div>
                  </div>
                  <div className="p-6 rounded-xl bg-accent/5 border border-accent/10">
                    <div className="text-2xl font-bold text-accent mb-2">Evidence-Based</div>
                    <div className="text-sm text-muted-foreground">Data-driven policy recommendations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div className="relative z-10 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary-foreground rounded"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Strategic Impact</div>
                      <div className="text-sm text-muted-foreground">Bridging research and policy</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <div className="w-6 h-6 bg-accent-foreground rounded"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Innovation Focus</div>
                      <div className="text-sm text-muted-foreground">Deeptech commercialization</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary-foreground rounded"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Global Leadership</div>
                      <div className="text-sm text-muted-foreground">Britain's innovation future</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-2xl opacity-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

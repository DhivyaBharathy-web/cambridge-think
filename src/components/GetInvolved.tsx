
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GetInvolved = () => {
  const opportunities = [
    {
      title: "Think Tank Contributor",
      description: "Join our community of researchers and policy makers to create actionable insights.",
      action: "Apply Now"
    },
    {
      title: "Launch a Pilot Project", 
      description: "Propose and lead an innovative project that aligns with our roadmap initiatives.",
      action: "Submit Proposal"
    },
    {
      title: "Smart Fund Investment",
      description: "Fund or co-invest in our £100M Smart Fund supporting early-stage DeepTech innovation.",
      action: "Get Details"
    },
    {
      title: "Host Cambridge Forum",
      description: "Sponsor or host one of our monthly public forums and innovation roundtables.",
      action: "Learn More"
    },
    {
      title: "DeepTech Fellowship",
      description: "Apply for our 6-month fellowship program connecting researchers with industry.",
      action: "Coming Soon"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in open participation. Whether you're a researcher, policymaker, 
            student, investor, or founder—there's a role for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {opportunity.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {opportunity.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={opportunity.action === "Coming Soon"}
                >
                  {opportunity.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">Let's Think Big Together 🚀</h3>
          <p className="text-xl mb-6">
            Ready to be part of Cambridge's transformation into the global innovation epicenter?
          </p>
          <Button size="lg" className="bg-background text-primary hover:bg-background/90">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;

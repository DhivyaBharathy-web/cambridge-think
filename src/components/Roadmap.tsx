
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Roadmap = () => {
  const initiatives = [
    {
      title: "Cambridge Think Tank 🚀",
      description: "Harness world-class academic and entrepreneurial resources to produce open, actionable insights for deeptech development.",
      features: [
        "Monthly public forums",
        "Community-led policy papers", 
        "Innovation roundtables",
        "Open-source policy toolkits"
      ],
      impact: "Democratizes policy influence and enables Cambridge-based solutions to national challenges."
    },
    {
      title: "Cambridge APPG 🏛️",
      description: "Institutionalize Cambridge's leadership in Parliament through an All-Party Parliamentary Group.",
      features: [
        "Legislative briefings",
        "MP campus demos",
        "Innovation-focused bills",
        "Bipartisan tech policy reports"
      ],
      impact: "Ensure that innovation policy in Britain is informed by evidence and entrepreneurship."
    },
    {
      title: "Cambridge Freezone 🌐",
      description: "Make Cambridge the most startup-friendly zone in Europe.",
      features: [
        "0% capital gains tax for early-stage investors",
        "Fast-track visas for researchers and founders",
        "Regulatory sandbox for fintech, biotech, and AI",
        "Streamlined business registration"
      ],
      impact: "Incentivizes high-risk, high-reward innovation and reduces time-to-impact for emerging technologies."
    },
    {
      title: "Cambridge Investment Bank 💷",
      description: "Launch a £100M 'Smart Fund' to support early-stage DeepTech innovation.",
      features: [
        "Pre-seed to Series A focus",
        "AI, biotech, climate tech priority",
        "AI-powered deal sourcing",
        "Milestone-based tranches"
      ],
      impact: "Provides smart capital with founder mentorship programs and strategic guidance."
    },
    {
      title: "Cambridge Stock Exchange 📈",
      description: "Build a regional exchange tailored for high-growth, founder-led companies.",
      features: [
        "Simplified listing requirements",
        "Local and international capital access",
        "Founder-focused governance model",
        "Innovation-first metrics"
      ],
      impact: "Create liquidity, incentivize reinvestment, and retain top talent in the ecosystem."
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The 5-Year Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five bold initiatives designed to build infrastructure, community, and national impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {initiative.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {initiative.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {initiative.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-2">Impact:</h4>
                    <p className="text-sm text-muted-foreground">{initiative.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

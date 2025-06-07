import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    description: "Former research lead at Cambridge Innovation Lab with 15+ years in technology policy.",
    expertise: ["Technology Policy", "Research Leadership", "Strategic Planning"]
  },
  {
    name: "James Wilson",
    role: "Head of Research",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    description: "PhD in Computer Science with focus on AI ethics and policy implications.",
    expertise: ["AI Ethics", "Policy Research", "Data Science"]
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Policy Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    description: "Former government advisor specializing in technology regulation and innovation policy.",
    expertise: ["Policy Development", "Government Relations", "Regulatory Affairs"]
  },
  {
    name: "Alex Thompson",
    role: "Technology Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    description: "Full-stack developer with expertise in emerging technologies and their societal impact.",
    expertise: ["Software Development", "Emerging Tech", "Technical Strategy"]
  },
  {
    name: "Dr. Emily Park",
    role: "Research Fellow",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    description: "Specialist in quantum computing and its implications for future policy.",
    expertise: ["Quantum Computing", "Research", "Policy Analysis"]
  },
  {
    name: "Michael O'Connor",
    role: "Community Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    description: "Expert in building and managing technology communities and partnerships.",
    expertise: ["Community Building", "Partnership Development", "Stakeholder Engagement"]
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the experts driving innovation and policy research at Cambridge Think.
            Our diverse team brings together decades of experience in technology, policy, and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-lg text-primary">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join our growing team of experts and help shape the future of technology policy.
            We're always looking for passionate individuals who share our vision.
          </p>
          <button className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team; 
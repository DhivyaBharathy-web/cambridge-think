
const Projects = () => {
  const projects = [
    {
      title: "Freezone Sandbox",
      description: "Invite 10 startups into a pilot regulatory program"
    },
    {
      title: "Smart Fund Deal Day", 
      description: "Public pitch day with investors and academia"
    },
    {
      title: "Policy Blueprint Hackathon",
      description: "48-hour hackathon to draft tech-first legislation"
    },
    {
      title: "AI for Parliament",
      description: "Deploy an AI-powered dashboard to track policy outcomes and innovation inputs"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Initiatives & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            These are living pilots and activations launched under each roadmap theme. 
            Each project serves as a proof of concept for a larger vision. We invite 
            collaborations and public contributions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <div>
                  <span className="font-semibold text-foreground">"{project.title}"</span>
                  <span className="text-muted-foreground">: {project.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;

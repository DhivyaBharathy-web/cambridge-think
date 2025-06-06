import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Why Cambridge Needs a Freezone",
      excerpt: "Exploring how regulatory sandboxes can accelerate deeptech innovation and position Cambridge as Europe's startup capital.",
      category: "Policy Insights",
      date: "Dec 15, 2023",
      readTime: "5 min read"
    },
    {
      title: "Building the Smart Fund: AI-Powered Venture Capital", 
      excerpt: "How artificial intelligence can revolutionize early-stage investment decisions and support breakthrough technologies.",
      category: "Investment",
      date: "Dec 10, 2023", 
      readTime: "7 min read"
    },
    {
      title: "From Lab to Parliament: The Policy Pipeline",
      excerpt: "Bridging the gap between academic research and legislative action through strategic partnerships and evidence-based advocacy.",
      category: "Research Spotlight",
      date: "Dec 5, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-20">
          <h2 className="heading-2 text-foreground mb-8">
            Blog & Updates
          </h2>
          <p className="body-large text-muted-foreground max-w-3xl mx-auto">
            The pulse of our ecosystem—featuring policy insights, ecosystem builder stories, 
            research spotlights, and startup features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card">
              <CardHeader className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Blog;

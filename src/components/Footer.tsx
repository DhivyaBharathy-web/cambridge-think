
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Get Involved', href: '#get-involved' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto container-padding section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/c2d2b366-3fc5-4c37-9582-3e041dd4a417.png" 
                alt="Cambridge Think Big" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold">Cambridge Think Big</span>
            </div>
            <p className="text-background/80 body-text max-w-md leading-relaxed">
              An open-source think tank leveraging Cambridge's intellectual capital 
              to inspire Britain's entrepreneurial future and global innovation leadership.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Stay Connected</h4>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60 focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-background">Connect</h4>
            <div className="space-y-3">
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Twitter / X
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                LinkedIn
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                GitHub
              </a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors text-sm">
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2023 Cambridge Think Big. Open-source movement for the public good.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                Media Kit
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      title: "General Enquiries",
      email: "hello@cambridgethinkbig.org",
      description: "For general questions and partnership opportunities"
    },
    {
      title: "Strategic Partnerships", 
      email: "partnerships@cambridgethinkbig.org",
      description: "For collaboration and strategic alliance discussions"
    },
    {
      title: "Media and Speaking",
      email: "media@cambridgethinkbig.org", 
      description: "For press inquiries and speaking engagements"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are eager to connect with partners and community members. 
            Let's build the future of innovation together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            {contactInfo.map((contact, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {contact.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {contact.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href={`mailto:${contact.email}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {contact.email}
                  </a>
                </CardContent>
              </Card>
            ))}

            <div className="pt-8">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Location</h4>
              <p className="text-gray-600">Cambridge, United Kingdom</p>
              <p className="text-sm text-gray-500 mt-4">
                Cambridge Think Big is an open-source movement for the public good.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Have a specific question or proposal? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={5} />
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

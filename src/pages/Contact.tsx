import { useState } from "react";
import { Mail, Phone, Linkedin, Send, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "andrew@andrewvrodriguez.com",
    href: "mailto:andrew@andrewvrodriguez.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(720) 409-7992",
    href: "tel:7204097992",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/andrewvrodriguez",
    href: "https://linkedin.com/in/andrewvrodriguez",
    external: true,
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen dark">
      <Navbar />

      <main className="pt-24">
        {/* Header */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl animate-slide-up">
              Whether you're looking for a strategic finance partner, have 
              questions about my work, or just want to chat about startups 
              and AI, I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl font-semibold mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-6 mb-8">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="p-3 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            className="font-medium hover:text-primary transition-colors flex items-center gap-1"
                          >
                            {item.value}
                            {item.external && (
                              <ExternalLink className="h-3 w-3" />
                            )}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resume Download */}
                <div className="p-6 rounded-2xl glass glow">
                  <h3 className="font-display text-xl font-semibold mb-3">
                    Download My Resume
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get a comprehensive overview of my experience, skills, and 
                    qualifications in PDF format.
                  </p>
                  <Button asChild className="w-full">
                    <a href="/Andrew-Rodriguez-Resume.pdf" download>
                      Download Resume (PDF)
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-semibold mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full glow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl font-semibold mb-4">
              Prefer to schedule a call?
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, collaborations, 
              or just having a conversation about finance and technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline">
                <a
                  href="https://linkedin.com/in/andrewvrodriguez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn <Linkedin className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:andrew@andrewvrodriguez.com">
                  Send an Email <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

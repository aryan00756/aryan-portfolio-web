import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportOptions } from '@/lib/animations';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const EMAILJS_SERVICE_ID = 'service_6jknjpa';
  const EMAILJS_TEMPLATE_ID = 'template_h5pk4jr';
  const EMAILJS_PUBLIC_KEY = 'wpvdVVFH-PNfrOip5';

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "ay6033756@gmail.com", href: "mailto:ay6033756@gmail.com", copyable: true },
    { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "India", href: "#", copyable: false }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "http://github.com/aryan00756", color: "hover:text-primary" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/aryan0203", color: "hover:text-neural" }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setEmailCopied(true);
      toast({ title: "Copied to clipboard!", description: "Email address has been copied." });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({ title: "Failed to send message", description: "Please try again or contact me directly via email.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Ready to bring your ideas to life? I'm always excited to discuss new projects, 
            opportunities, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              Get in <span className="text-gradient-neural">Touch</span>
            </h3>
            <motion.div
              className="space-y-4 sm:space-y-6 mb-6 sm:mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {contactInfo.map((info) => (
                <motion.div key={info.label} variants={fadeInUp}>
                  <Card className="hover-lift transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex-shrink-0 p-1.5 sm:p-2 bg-primary/10 text-primary rounded-lg">
                          <div className="w-4 h-4 sm:w-6 sm:h-6">{info.icon}</div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium text-sm sm:text-base truncate">{info.value}</p>
                        </div>
                        {info.copyable && (
                          <Button variant="ghost" size="icon" onClick={() => copyToClipboard(info.value)} className="text-muted-foreground hover:text-primary h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
                            {emailCopied ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Follow Me</h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <Button key={social.label} variant="outline" size="icon" className={`transition-all duration-300 ${social.color} border-primary/20 hover:border-primary/50 h-10 w-10 sm:h-12 sm:w-12`} asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <div className="w-5 h-5 sm:w-6 sm:h-6">{social.icon}</div>
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <Card className="mt-6 sm:mt-8 bg-gradient-glow border-primary/20">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse" />
                  <span className="font-semibold text-sm sm:text-base">Available for Projects</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Currently accepting new projects and collaboration opportunities. 
                  Let's build something amazing together!
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Name</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="bg-background/50 border-border focus:border-primary text-sm" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="bg-background/50 border-border focus:border-primary text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Message</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or idea..." rows={5} required className="bg-background/50 border-border focus:border-primary resize-none text-sm" />
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground glow-primary disabled:opacity-50">
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

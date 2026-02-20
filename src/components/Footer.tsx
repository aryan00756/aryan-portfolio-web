import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "http://github.com/aryan00756",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/aryan0203",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:aryan.yadav@example.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left mb-4 sm:mb-6 md:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary mb-1 sm:mb-2">
              Aryan Yadav
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Building the future with AI & innovative web solutions
            </p>
          </div>

          {/* Center - Navigation Links */}
          <nav className="hidden md:flex gap-4 lg:gap-8 mb-4 sm:mb-6 md:mb-0">
            {['Home', 'About', 'Skills', 'Services', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right side - Social links */}
          <div className="flex gap-2 sm:gap-3">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 h-9 w-9 sm:h-10 sm:w-10"
                asChild
              >
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5">
                    {social.icon}
                  </div>
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <p className="mb-2 sm:mb-4 md:mb-0">
              © {currentYear} Aryan Yadav. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
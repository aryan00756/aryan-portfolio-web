import { useEffect, useRef, useState } from 'react';
import { Bot, Zap, Globe, ArrowRight, Brain, Code, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Chatbot Development",
      description: "Custom AI chatbots powered by advanced language models for customer service, support, and engagement.",
      features: [
        "GPT-powered conversational AI",
        "Natural language understanding",
        "Multi-platform integration",
        "Custom training on your data"
      ],
      color: "primary",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart System Integrations",
      description: "Intelligent automation solutions that streamline workflows and enhance business operations.",
      features: [
        "ML-powered automation",
        "Real-time data processing",
        "API integrations",
        "Performance optimization"
      ],
      color: "neural",
      gradient: "bg-gradient-neural"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Web Services",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: [
        "React & Next.js development",
        "Backend API development",
        "Database design & optimization",
        "Cloud deployment & hosting"
      ],
      color: "secondary",
      gradient: "bg-secondary"
    }
  ];

  const additionalServices = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning Models",
      description: "Custom ML solutions for classification, prediction, and data analysis"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Image recognition, face detection, and gesture-based applications"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Development",
      description: "Scalable RESTful APIs and microservices architecture"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gradient-to-b from-background to-card/50"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into intelligent solutions through cutting-edge technology 
            and innovative development practices.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group hover-lift transition-all duration-500 bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="relative">
                <div className={`inline-flex p-3 rounded-lg mb-4 text-${service.color} border border-${service.color}/20 bg-${service.color}/5`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  variant="outline"
                  onClick={scrollToContact}
                >
                  Request Service
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Additional <span className="text-gradient-neural">Expertise</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card
                key={service.title}
                className="hover-lift transition-all duration-300 bg-card/30 backdrop-blur-sm border-primary/10"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-2 rounded-lg mb-3 text-primary bg-primary/10">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-glow rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to bring your ideas to life with intelligent, scalable solutions.
            </p>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground glow-primary"
              onClick={scrollToContact}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
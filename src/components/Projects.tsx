import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Brain, Eye, Shield, Film } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "GPT-2 Chatbot",
      description: "An intelligent conversational AI system built using GPT-2 architecture, capable of understanding context and providing meaningful responses across various domains.",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "Transformers", "PyTorch", "Flask", "React"],
      features: [
        "Context-aware conversations",
        "Multi-turn dialogue support",
        "Custom fine-tuning capabilities",
        "Web interface integration"
      ],
      color: "primary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Face Recognition & Gesture Detection",
      description: "Advanced computer vision system combining face recognition and real-time gesture detection for interactive applications and security systems.",
      icon: <Eye className="w-8 h-8" />,
      technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "NumPy"],
      features: [
        "Real-time face recognition",
        "Hand gesture classification",
        "Multi-person tracking",
        "Privacy-focused design"
      ],
      color: "neural",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Machine learning-powered anomaly detection system that identifies fraudulent transactions with high accuracy using advanced algorithms.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Streamlit"],
      features: [
        "Real-time fraud detection",
        "Ensemble learning models",
        "Imbalanced data handling",
        "Interactive dashboard"
      ],
      color: "secondary",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Movie Recommendation System",
      description: "Content-based filtering system that analyzes user preferences and movie characteristics to provide personalized recommendations.",
      icon: <Film className="w-8 h-8" />,
      technologies: ["Python", "Pandas", "Scikit-learn", "NLTK", "Streamlit"],
      features: [
        "Content-based filtering",
        "Similarity calculations",
        "User preference analysis",
        "Interactive recommendations"
      ],
      color: "primary",
      demoUrl: "#",
      githubUrl: "#"
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

  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'text-primary border-primary/20 bg-primary/5';
      case 'neural': return 'text-neural border-neural/20 bg-neural/5';
      case 'secondary': return 'text-secondary border-secondary/20 bg-secondary/5';
      default: return 'text-primary border-primary/20 bg-primary/5';
    }
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-b from-card/50 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Showcasing innovative solutions that demonstrate the intersection of 
            machine learning, artificial intelligence, and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover-lift transition-all duration-500 bg-card/50 backdrop-blur-sm border-primary/10 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`inline-flex p-2 sm:p-3 rounded-lg ${getColorClass(project.color)}`}>
                    <div className="w-6 h-6 sm:w-8 sm:h-8">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary h-8 w-8 sm:h-10 sm:w-10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary h-8 w-8 sm:h-10 sm:w-10"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardTitle className="text-lg sm:text-xl mb-2 sm:mb-3">{project.title}</CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  <h4 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2">Key Features:</h4>
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 group-hover:border-primary group-hover:text-primary transition-all duration-300 text-xs sm:text-sm"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 group-hover:border-neural group-hover:text-neural transition-all duration-300 text-xs sm:text-sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Section */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-glow rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">More Projects Coming Soon!</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              I'm constantly working on new projects and experimenting with cutting-edge technologies. 
              Follow my GitHub to stay updated with the latest developments.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm"
              asChild
            >
              <a href="http://github.com/aryan00756" target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
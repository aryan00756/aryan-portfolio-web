import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Brain, Code, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/aryan-profile.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const timeline = [
    {
      year: '2023-Present',
      title: 'Engineering Student',
      description: 'Pursuing Engineering with focus on AI/ML and Software Development',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: '2023',
      title: 'Frontend Development',
      description: 'Mastered modern web development technologies',
      icon: <Code className="w-6 h-6" />,
    },
    {
      year: '2024',
      title: 'Computer Vision',
      description: 'Explored computer vision applications and implementations',
      icon: <Eye className="w-6 h-6" />,
    },
    {
      year: '2025',
      title: 'ML Journey Begins',
      description: 'Started deep dive into Machine Learning and Generative AI',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      year: '2026',
      title: 'Gen AI',
      description: 'Exploring Generative AI models, LLMs and building intelligent applications',
      icon: <Brain className="w-6 h-6" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-background to-card/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Passionate about creating intelligent solutions that bridge the gap between 
            cutting-edge AI technology and practical real-world applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          {/* Profile and Bio */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="relative flex-shrink-0">
                <img
                  src={profileImage}
                  alt="Aryan Yadav"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover border-2 border-primary/30"
                />
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full border-2 sm:border-4 border-background" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Aryan Yadav</h3>
                <p className="text-primary font-medium mb-1 sm:mb-2">ML & AI Engineer</p>
                <p className="text-sm sm:text-base text-muted-foreground">Currently Engineering Student</p>
              </div>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover-lift">
              <CardContent className="p-4 sm:p-6">
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  I am a passionate <span className="text-primary font-semibold">Machine Learning and Generative AI Engineer</span>, 
                  with a strong foundation in <span className="text-neural font-semibold">Frontend Web Development</span>. 
                  I am driven by a curiosity to build intelligent systems and user-friendly digital experiences.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  My journey combines the analytical rigor of machine learning with the creative 
                  problem-solving of web development, allowing me to create comprehensive solutions 
                  that are both technically sophisticated and user-centric.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center lg:text-left">
              Journey <span className="text-gradient-neural">Timeline</span>
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 sm:gap-4 transition-all duration-500`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                    <div className="w-5 h-5 sm:w-6 sm:h-6">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <h4 className="text-base sm:text-lg font-semibold">{item.title}</h4>
                      <span className="text-xs sm:text-sm text-primary bg-primary/10 px-2 py-1 rounded-full w-fit">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
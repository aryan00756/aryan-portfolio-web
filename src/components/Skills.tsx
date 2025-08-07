import { useEffect, useRef, useState } from 'react';
import { Code, Brain, Eye, Database, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning & AI",
      color: "primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Generative AI", level: 80 },
        { name: "Deep Learning", level: 75 },
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "neural",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 },
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Development",
      color: "secondary",
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Express", level: 80 },
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision",
      color: "primary",
      skills: [
        { name: "OpenCV", level: 80 },
        { name: "Face Recognition", level: 85 },
        { name: "Gesture Detection", level: 75 },
        { name: "Image Processing", level: 80 },
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Algorithms",
      color: "neural",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 80 },
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tools & Frameworks",
      color: "secondary",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Firebase", level: 75 },
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate progress bars
          setTimeout(() => {
            const newProgressValues: { [key: string]: number } = {};
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
                newProgressValues[`${category.title}-${skill.name}`] = skill.level;
              });
            });
            setProgressValues(newProgressValues);
          }, 500);
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
      id="skills"
      className="py-20 bg-gradient-to-b from-card/50 to-background"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning machine learning, web development, 
            and emerging technologies to build innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`hover-lift transition-all duration-500 bg-card/50 backdrop-blur-sm border-primary/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${getColorClass(category.color)}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={progressValues[`${category.title}-${skill.name}`] || 0}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div
          className={`mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technologies I <span className="text-gradient-neural">Work With</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'React', 'TypeScript', 'TensorFlow', 'Node.js', 'OpenCV', 'Java', 'MongoDB'].map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 bg-muted/50 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
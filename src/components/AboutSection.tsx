import { Code, Users, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Passionate about writing maintainable, scalable code following best practices and design patterns."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experience mentoring junior developers and leading frontend development initiatives."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Always exploring new technologies, particularly interested in AI integration and chatbot development."
    },
    {
      icon: Target,
      title: "Performance Driven",
      description: "Committed to delivering high-performance applications with excellent user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Senior Frontend Engineer with strong Angular expertise and a drive to 
              deliver clean, modular, and performant code. I specialize in building enterprise-grade 
              SaaS platforms and have led feature development across several business-critical modules.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I contribute to architecture discussions, mentor junior developers, and enjoy working on 
              AI/chatbot integrations. I'm highly adaptable, detail-oriented, and always pushing for 
              better UI/UX and developer experience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey began as an intern at WideBot, where I discovered my passion for frontend 
              development and quickly progressed through junior to senior roles, consistently delivering 
              high-impact solutions that enhance both user experience and business outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="project-card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Code, Database, Wrench, Layers } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code,
      skills: [
        "Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
        "Tailwind CSS", "Bootstrap", "Angular Material"
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        "Node.js", "Express.js", "NestJS", "MongoDB", "Mongoose", "RESTful APIs"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Git", "GitHub", "Figma", "AWS S3", "AWS CodeCommit"
      ]
    },
    {
      title: "Core Foundations",
      icon: Layers,
      skills: [
        "Object-Oriented Programming", "Design Patterns", "Data Structures", 
        "Algorithms"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="project-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="skill-badge text-center transform transition-transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-muted-foreground">Stories & Tasks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-muted-foreground">Developers Mentored</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
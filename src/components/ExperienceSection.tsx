import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "WideBot",
      role: "Senior Frontend Engineer",
      period: "2023 - Present",
      location: "Cairo, Egypt",
      type: "Full-time",
      achievements: [
        "Led frontend development for Bot Builder platform using Angular and TypeScript",
        "Architected scalable chat widget solution integrated across multiple client websites",
        "Improved application performance by 40% through code optimization and lazy loading",
        "Mentored 3 junior developers and established coding standards for the team",
        "Implemented advanced analytics integration for user behavior tracking"
      ]
    },
    {
      company: "WideBot",
      role: "Frontend Engineer",
      period: "2022 - 2023",
      location: "Cairo, Egypt",
      type: "Full-time",
      achievements: [
        "Developed responsive web applications using Angular and modern CSS frameworks",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Integrated RESTful APIs and implemented real-time chat functionality",
        "Contributed to component library development for design system consistency",
        "Participated in code reviews and maintained high code quality standards"
      ]
    },
    {
      company: "WideBot",
      role: "Junior Frontend Developer",
      period: "2022",
      location: "Cairo, Egypt",
      type: "Full-time",
      achievements: [
        "Built interactive user interfaces using Angular and TypeScript",
        "Implemented responsive designs with CSS Grid and Flexbox",
        "Worked on bug fixes and feature enhancements for existing applications",
        "Learned advanced Angular concepts including RxJS and state management",
        "Collaborated effectively with backend developers on API integration"
      ]
    },
    {
      company: "WideBot",
      role: "Frontend Development Intern",
      period: "2022",
      location: "Cairo, Egypt",
      type: "Internship",
      achievements: [
        "Gained hands-on experience with Angular framework and TypeScript",
        "Assisted in developing user interface components and features",
        "Learned version control with Git and collaborative development practices",
        "Participated in daily standups and agile development processes",
        "Contributed to testing and quality assurance activities"
      ]
    },
    {
      company: "Information Technology Institute (ITI)",
      role: "Full Stack Development Trainee",
      period: "2022",
      location: "Cairo, Egypt",
      type: "Training Program",
      achievements: [
        "Completed intensive full-stack development program (MEARN stack)",
        "Built end-to-end web applications using MongoDB, Express, Angular, and Node.js",
        "Learned database design and RESTful API development",
        "Worked on team projects applying agile methodologies",
        "Achieved excellent performance in all program modules"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block"></div>
                
                <div className="lg:ml-20">
                  <div className="project-card p-8">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-lg font-semibold mb-2">
                          <Building size={18} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="skill-badge text-xs px-2 py-1">
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
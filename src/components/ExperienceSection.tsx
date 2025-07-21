import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "WideBot",
      role: "Senior Frontend Engineer",
      period: "Mar 2024 - Present",
      location: "Cairo, Egypt",
      type: "Full-time",
      achievements: [
        "Led Bot Builder platform development",
        "Integrated APIs and improved performance significantly",
        "Boosted platform analytics & cross-platform integration",
        "Architected scalable frontend solutions for enterprise clients"
      ]
    },
    {
      company: "WideBot",
      role: "Junior Frontend Engineer",
      period: "Jun 2022 - Mar 2024",
      location: "Cairo, Egypt",
      type: "Full-time",
      achievements: [
        "Migrated legacy code to Angular framework",
        "Built chat widget plugin with enhanced functionality",
        "Mentored interns and junior developers",
        "Improved codebase maintainability and performance"
      ]
    },
    {
      company: "WideBot",
      role: "Frontend Development Intern",
      period: "Mar 2022 - Jun 2022",
      location: "Cairo, Egypt",
      type: "Internship",
      achievements: [
        "Built UI components for wallet & broadcast modules",
        "Collaborated closely with design team",
        "Learned Angular and modern frontend practices",
        "Contributed to multiple platform features"
      ]
    },
    {
      company: "Information Technology Institute (ITI)",
      role: "Fullstack Trainee",
      period: "Jan 2022 - Mar 2022",
      location: "Cairo, Egypt",
      type: "Training Program",
      achievements: [
        "Trained in MEAN stack technologies",
        "Built real-world web applications",
        "Learned full-stack development fundamentals",
        "Participated in collaborative team projects"
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
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "Information Technology Institute (ITI)",
      degree: "Diploma in Fullstack Development",
      specialization: "MEARN Stack (MongoDB, Express.js, Angular, React, Node.js)",
      period: "2022",
      location: "Cairo, Egypt",
      type: "Professional Training",
      highlights: [
        "Intensive fullstack development program",
        "Hands-on experience with MEAN stack technologies",
        "Built real-world web applications",
        "Team-based project development",
        "Industry-standard development practices"
      ],
      icon: BookOpen,
      gradient: "from-emerald-500 to-green-600"
    },
    {
      institution: "Al-Azhar University",
      degree: "Bachelor's Degree",
      specialization: "Islamic & Arabic Studies",
      period: "2019",
      location: "Cairo, Egypt", 
      type: "University Education",
      highlights: [
        "Strong foundation in analytical thinking",
        "Research and critical analysis skills",
        "Communication and presentation abilities",
        "Cultural and linguistic expertise",
        "Academic writing and documentation skills"
      ],
      icon: GraduationCap,
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const certifications = [
    "Angular Advanced Concepts",
    "TypeScript Expert Level",
    "Modern JavaScript (ES6+)",
    "Responsive Web Design",
    "Git & Version Control",
    "Agile Development Methodologies"
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="project-card overflow-hidden">
              {/* Education Header */}
              <div className={`bg-gradient-to-r ${edu.gradient} p-6 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <edu.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-white/80">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-white/90">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} />
                    <span>{edu.specialization}</span>
                  </div>
                </div>
              </div>

              {/* Education Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="skill-badge text-xs px-3 py-1">
                    {edu.type}
                  </span>
                </div>

                <div className="space-y-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Skills */}
        <div className="project-card p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional Certifications</h3>
            <p className="text-muted-foreground">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-muted/50 rounded-lg p-4 text-center hover:bg-muted transition-colors"
              >
                <div className="text-sm font-medium">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
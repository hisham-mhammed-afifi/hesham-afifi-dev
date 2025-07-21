import { ExternalLink, Github, Zap, MessageCircle, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bot Builder",
      company: "WideBot",
      description: "SaaS platform for building smart chatbots with integrated advanced AI training and analytics modules that significantly improved UX and performance.",
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB"],
      achievements: [
        "Integrated advanced AI training modules",
        "Built comprehensive analytics dashboard", 
        "Improved platform performance significantly",
        "Enhanced overall user experience"
      ],
      icon: Zap,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Chat Widget Plugin",
      company: "WideBot",
      description: "Developed customizable website chat plugin with enhanced interactivity, responsiveness, and optimized load times with cross-platform support.",
      technologies: ["Angular", "TypeScript", "CSS3", "JavaScript"],
      achievements: [
        "Created customizable design options",
        "Enhanced interactivity across all devices",
        "Optimized load times for better performance",
        "Ensured cross-platform compatibility"
      ],
      icon: MessageCircle,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Audience Manager & Log Manager",
      company: "WideBot",
      description: "Delivered comprehensive modules to track user data and system logs, enabling better insights and operational control for business intelligence.",
      technologies: ["Angular", "TypeScript", "Express.js", "MongoDB"],
      achievements: [
        "Built user data tracking system",
        "Developed system log management",
        "Created analytics insights dashboard",
        "Enabled better operational control"
      ],
      icon: BarChart3,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my contributions to cutting-edge web applications, 
            focusing on performance, scalability, and exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card overflow-hidden group">
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <project.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-white/80">{project.company}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="font-semibold mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    View Project
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Github size={16} />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
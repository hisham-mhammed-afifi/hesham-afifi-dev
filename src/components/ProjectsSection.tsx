import { ExternalLink, Github, Zap, MessageCircle, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Bot Builder Platform",
      company: "WideBot",
      description: "A comprehensive drag-and-drop chatbot builder that enables non-technical users to create sophisticated conversational AI experiences. Built with Angular and TypeScript for optimal performance and scalability.",
      technologies: ["Angular", "TypeScript", "RxJS", "NgRx", "SCSS", "RESTful APIs"],
      achievements: [
        "Led frontend architecture design for scalable component system",
        "Implemented real-time collaboration features for team building",
        "Integrated advanced analytics for bot performance tracking",
        "Reduced build time by 35% through code optimization"
      ],
      icon: Zap,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Chat Widget SDK",
      company: "WideBot",
      description: "A lightweight, embeddable chat widget that integrates seamlessly into any website. Features real-time messaging, file sharing, and customizable UI themes to match brand identity.",
      technologies: ["Angular", "TypeScript", "Socket.io", "CSS3", "Webpack"],
      achievements: [
        "Created modular architecture for easy client customization",
        "Optimized bundle size to under 50KB for fast loading",
        "Implemented responsive design for all device types",
        "Added multi-language support for global deployment"
      ],
      icon: MessageCircle,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Analytics Dashboard",
      company: "WideBot",
      description: "Advanced analytics platform providing deep insights into chatbot performance, user engagement, and conversation flow analysis. Features interactive charts and real-time data visualization.",
      technologies: ["Angular", "TypeScript", "Chart.js", "RxJS", "Material Design"],
      achievements: [
        "Designed intuitive data visualization components",
        "Implemented real-time data streaming with WebSockets",
        "Created custom filtering and export functionality",
        "Improved user retention by 25% through UX enhancements"
      ],
      icon: BarChart3,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Team Collaboration Suite",
      company: "WideBot",
      description: "Internal collaboration platform for managing bot development workflows, team communication, and project tracking. Streamlines the entire bot creation process from concept to deployment.",
      technologies: ["Angular", "TypeScript", "Node.js", "MongoDB", "JWT"],
      achievements: [
        "Architected role-based access control system",
        "Integrated real-time notifications and updates",
        "Developed project timeline and milestone tracking",
        "Increased team productivity by 40% through workflow automation"
      ],
      icon: Users,
      gradient: "from-indigo-500 to-blue-600"
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
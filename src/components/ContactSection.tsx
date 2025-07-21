import { Mail, MessageCircle, Github, Linkedin, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hish.abdelshafouk@gmail.com",
      link: "mailto:hish.abdelshafouk@gmail.com",
      description: "For professional inquiries and collaboration"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "hisham-abd-elshafouk",
      link: "https://linkedin.com/in/hisham-abd-elshafouk",
      description: "Connect with me professionally"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "hisham-mhammed-afifi",
      link: "https://github.com/hisham-mhammed-afifi",
      description: "Check out my code repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Let's Work Together</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full mb-6"></div>
           <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
             Open to exciting frontend challenges. Let's build something amazing together!
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <method.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                      <p className="text-blue-100 font-medium">{method.value}</p>
                      <p className="text-blue-200 text-sm">{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center gap-3 text-white">
                <MapPin size={20} className="text-blue-200" />
                <span>Based in Cairo, Egypt (Remote-friendly)</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Calendar size={20} className="text-blue-200" />
                <span>Available for new opportunities</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <MessageCircle size={20} className="text-blue-200" />
                <span>Responds within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                I'm passionate about creating exceptional web experiences with modern technologies. 
                Whether you need a new application, want to improve an existing one, or are looking 
                for a team member who brings both technical expertise and collaborative spirit, 
                I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-blue-50 shadow-glow"
                >
                  <a href="mailto:hish.abdelshafouk@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send me an email
                  </a>
                </Button>
                
                <div className="text-sm text-blue-200">
                  or connect with me on social media
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-100">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
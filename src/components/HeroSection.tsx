import { ArrowDown, MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroAvatar from '@/assets/hero-avatar.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 order-2 lg:order-1">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Hesham Mohammed 
              <br />
              <span className="text-primary-glow">Afifi</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-primary-glow font-medium">
              Senior Frontend Engineer | Angular & TypeScript Expert
            </h2>
            
            <div className="space-y-2 text-lg text-blue-100">
              <p>Building modern web experiences with performance</p>
              <p>and scale in mind.</p>
            </div>

            <div className="flex items-center gap-2 text-blue-100">
              <MapPin size={20} />
              <span>Cairo, Egypt (Remote-friendly)</span>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 shadow-glow"
              >
                Let's Connect
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <div className="flex items-center gap-3">
                <a 
                  href="mailto:hish.abdelshafouk@gmail.com"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Mail size={20} className="text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/hisham-abd-elshafouk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a 
                  href="https://github.com/hisham-mhammed-afifi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Github size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow border-4 border-white/20">
                <img 
                  src={heroAvatar} 
                  alt="Hesham Mohammed Afifi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            Built with <Heart size={16} className="text-red-400" fill="currentColor" /> using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted mt-2">
            © 2024 Hesham Mohammed Afifi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
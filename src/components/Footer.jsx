import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} MentorConnect. Empowering mentorships worldwide.</p>
          <div className="flex items-center gap-3 text-gray-500">
            <a href="#" aria-label="GitHub" className="hover:text-gray-900"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Linkedin size={18} /></a>
            <a href="#" aria-label="Email" className="hover:text-gray-900"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

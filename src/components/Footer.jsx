import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, MessageCircle } from 'lucide-react'; // Using MessageCircle in place of Pinterest as Lucide lacks Pinterest

const Footer = () => {
  return (
    <footer className="bg-[var(--color-deep-contrast)] text-[var(--color-secondary-bg)] py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6">
        
        {/* Left: Logo + Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: 'var(--font-h1)' }}>
            ✦ Arcana
          </h2>
          <p className="text-sm text-[var(--color-accent-2)]">
            Ancient wisdom. Modern clarity.
          </p>
        </div>

        {/* Center: Nav links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-[var(--color-accent-1)] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[var(--color-accent-1)] transition-colors">About</Link>
          <Link to="/consultation" className="hover:text-[var(--color-accent-1)] transition-colors">Consultations</Link>
          <Link to="/blog" className="hover:text-[var(--color-accent-1)] transition-colors">Blog</Link>
        </div>

        {/* Right: Socials */}
        <div className="flex space-x-4">
          <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-accent-2)] hover:border-[var(--color-accent-1)] hover:text-[var(--color-accent-1)] transition-all interactive">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-accent-2)] hover:border-[var(--color-accent-1)] hover:text-[var(--color-accent-1)] transition-all interactive">
            <Twitter size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-accent-2)] hover:border-[var(--color-accent-1)] hover:text-[var(--color-accent-1)] transition-all interactive">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-[var(--color-accent-2)] border-t border-[rgba(196,181,253,0.2)] pt-6">
        &copy; {new Date().getFullYear()} Arcana Tarot. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

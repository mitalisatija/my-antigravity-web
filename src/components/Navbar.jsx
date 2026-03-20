import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Consultation', path: '/consultation' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(245,240,255,0.85)] backdrop-blur-md border-b border-[var(--color-secondary-bg)] py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold" style={{ fontFamily: 'var(--font-h1)', color: 'var(--color-deep-contrast)' }}>
          ✦ Arcana
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-wide font-medium transition-colors hover:text-[var(--color-accent-1)] ${
                location.pathname === link.path ? 'text-[var(--color-accent-1)]' : 'text-[var(--color-text-secondary)]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/consultation" className="btn-gradient interactive">
            Get a Reading
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[var(--color-deep-contrast)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-primary-bg)] border-b border-[var(--color-secondary-bg)] flex flex-col items-center py-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-1)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/consultation"
            className="btn-gradient mt-4 inline-block interactive"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get a Reading
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

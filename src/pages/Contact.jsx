import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, Instagram, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen">
      
      {/* Header */}
      <section className="bg-[var(--gradient-hero)] py-16 border-bottom">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl mb-4 text-[var(--color-text-primary)] font-serif">Let's Connect</h1>
            <p className="subtitle text-[var(--color-text-secondary)]">Whether an inquiry or simply a moment of shared energy.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Info Cards */}
          <div className="space-y-6">
            <ScrollReveal className="glass-panel p-6 flex items-start gap-4">
              <div className="p-3 bg-[var(--color-primary-bg)] rounded-full text-[var(--color-accent-1)] mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-deep-contrast)] font-serif mb-1">Email</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-2">For direct inquiries, collaborations, and private events.</p>
                <a href="mailto:guidance@arcana.com" className="text-[var(--color-accent-1)] hover:underline interactive font-semibold">guidance@arcana.com</a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} className="glass-panel p-6 flex items-start gap-4">
              <div className="p-3 bg-[var(--color-primary-bg)] rounded-full text-[var(--color-accent-1)] mt-1">
                <Instagram size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-deep-contrast)] font-serif mb-1">Socials</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-2">Follow our daily card pulls and cosmic insights.</p>
                <a href="#" className="text-[var(--color-accent-1)] hover:underline interactive font-semibold">@arcana_tarot</a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="glass-panel p-6 flex items-start gap-4">
              <div className="p-3 bg-[var(--color-primary-bg)] rounded-full text-[var(--color-accent-1)] mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-deep-contrast)] font-serif mb-1">Response Time</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-2">We typically reply to all messages within 24-48 business hours. Thank you for your patience.</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal delay={150} className="glass-panel p-8 bg-white border-[var(--color-accent-2)] shadow-xl rounded-3xl">
            <h2 className="text-2xl font-serif text-[var(--color-deep-contrast)] mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-tight">Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all interactive" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-tight">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all interactive" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-tight">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all interactive text-[var(--color-text-secondary)]">
                  <option>General Inquiry</option>
                  <option>Reading Support</option>
                  <option>Collaboration</option>
                  <option>Press / Media</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-tight">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all resize-none interactive"></textarea>
              </div>

              <button type="button" className="btn-gradient w-full py-3 interactive mt-2">
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Decorative Final Section */}
      <section className="bg-[var(--color-primary-bg)] py-12 border-t border-[var(--color-secondary-bg)]">
        <ScrollReveal className="flex justify-center items-center gap-3 text-[var(--color-text-secondary)]">
          <Globe className="text-[var(--color-soft-gold)]" size={20} />
          <span className="font-medium">Sessions available worldwide via high-quality video call</span>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Contact;

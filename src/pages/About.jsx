import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import TarotCard from '../components/TarotCard';
import { Sparkles, Glasses, Lock, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 min-h-screen">
      
      {/* Hero Section */}
      <section className="section bg-[var(--gradient-hero)] relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative inline-block p-2 border-2 border-[var(--color-accent-2)] rounded-2xl bg-white/30 backdrop-blur-sm shadow-[0_0_30px_rgba(196,181,253,0.4)]">
              <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tarot Reader" className="rounded-xl w-full h-[500px] object-cover filter contrast-125 brightness-90 grayscale-[20%]" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-4xl md:text-5xl mb-6 leading-tight">The Reader Behind <br /><span className="text-[var(--color-accent-1)] italic">The Cards</span></h1>
            <p className="text-[var(--color-text-secondary)] mb-6 text-lg leading-relaxed">
              For over a decade, I have been translating the whispers of the universe into actionable clarity. Tarot isn't about predicting an unchangeable future—it's about illuminating the paths available to you right now.
            </p>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
              By combining ancient symbology with modern psychological insight, I provide readings that empower, rather than fear-monger. Whether you're navigating love, career, or spiritual awakening, the cards serve as a mirror to your highest self.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl">Our Approach to Tarot</h2>
            <div className="w-16 h-1 bg-[var(--color-soft-gold)] mx-auto mt-6" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
            <ScrollReveal className="md:text-right">
              <h3 className="text-2xl mb-4 font-serif text-[var(--color-deep-contrast)]">Empowerment First</h3>
              <p className="text-[var(--color-text-secondary)]">You hold the pen to your own story. The cards simply show the current trajectory. We focus on how you can actively shape your destiny.</p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="flex justify-center h-full items-center">
              <TarotCard 
                frontImage="/cards/card_star_1773910539356.png"
                backTitle="The Star" 
                backDescription="Hope, healing, and profound spiritual guidance." 
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h3 className="text-2xl mb-4 font-serif text-[var(--color-deep-contrast)]">Practical Mysticism</h3>
              <p className="text-[var(--color-text-secondary)]">While our methods draw from deep esoteric traditions, our advice is always grounding, actionable, and tailored to the modern world.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-[var(--color-secondary-bg)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles size={40} className="text-[var(--color-soft-gold)]" />, label: "Intuition" },
              { icon: <Glasses size={40} className="text-[var(--color-soft-gold)]" />, label: "Clarity" },
              { icon: <Lock size={40} className="text-[var(--color-soft-gold)]" />, label: "Confidentiality" },
              { icon: <Zap size={40} className="text-[var(--color-soft-gold)]" />, label: "Empowerment" }
            ].map((val, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="flex flex-col items-center text-center">
                <div className="mb-4">{val.icon}</div>
                <h4 className="text-xl text-[var(--color-deep-contrast)] font-semibold">{val.label}</h4>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import ScrollReveal from '../components/ScrollReveal';
import TarotCard from '../components/TarotCard';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, Layers } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <ParticleBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-70 z-[-1]" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              Unveil Your <br />
              <span className="text-[var(--color-accent-1)] italic">Path</span>
            </h1>
            <p className="subtitle mb-2" style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
              Ancient wisdom. Modern clarity. Your tarot journey begins here.
            </p>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg leading-relaxed text-lg">
              Explore the profound symbolism of the cards to discover deep personal insights. Whether you're seeking clarity on a tough decision, looking for spiritual guidance, or simply connecting with your inner intuition, the Arcana deck offers a timeless mirror for your soul's journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/consultation" className="btn-gradient interactive">
                Start Your Reading
              </Link>
              <Link to="/about" className="btn-ghost interactive">
                Learn More
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal className="flex justify-center md:justify-end">
            <div className="relative animate-[float_6s_ease-in-out_infinite]">
              {/* Fake Keyframes for float would be defined in index.css, adding inline wrapper for float effect */}
              <div style={{ transform: 'translateY(-10px)', animation: 'float 6s ease-in-out infinite' }}>
                <TarotCard
                  frontImage="/cards/card_sun_1773910523184.png"
                  backTitle="The Sun"
                  backDescription="Positivity, fun, warmth, success, vitality."
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="section bg-[var(--color-secondary-bg)] relative">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--color-primary-bg)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--color-primary-bg)] to-transparent" />

        <div className="container mx-auto px-6 z-10 relative">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl">The Cards Speak</h2>
            <div className="w-24 h-1 bg-[var(--color-soft-gold)] mx-auto mt-6" />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { title: "The High Priestess", desc: "Intuition, sacred knowledge, divine feminine, the subconscious mind.", img: "/cards/card_moon_1773910556635.png" },
              { title: "The Empress", desc: "Femininity, beauty, nature, nurturing, abundance.", img: "/cards/card_star_1773910539356.png" },
              { title: "The Star", desc: "Hope, faith, purpose, renewal, spirituality.", img: "/cards/card_star_1773910539356.png" },
              { title: "The Sun", desc: "Positivity, fun, warmth, success, vitality.", img: "/cards/card_sun_1773910523184.png" },
              { title: "The World", desc: "Completion, integration, accomplishment, travel.", img: "/cards/card_moon_1773910556635.png" }
            ].map((card, idx) => (
              <ScrollReveal key={idx} className="transition-transform duration-500 hover:-translate-y-5 cursor-pointer">
                <div style={{ transform: `rotate(${(idx - 2) * 4}deg) translateY(${Math.abs(idx - 2) * 10}px)` }}>
                  <TarotCard frontImage={card.img} backTitle={card.title} backDescription={card.desc} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-bg)] via-white to-[#fcfbff] opacity-80" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl">Your Journey</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Choose Your Spread", desc: "Select a reading style that aligns with your current questions.", icon: <Sparkles size={32} /> },
              { step: "02", title: "Draw Your Cards", desc: "Connect your energy and select the cards that call to you.", icon: <Layers size={32} /> },
              { step: "03", title: "Receive Insights", desc: "Dive deep into the meanings and find the clarity you seek.", icon: <MessageCircle size={32} /> }
            ].map((item, idx) => (
              <ScrollReveal key={idx} className="glass-panel p-8 text-center relative group">
                <div className="absolute top-4 left-4 text-4xl font-serif text-[var(--color-soft-gold)] opacity-30 group-hover:opacity-60 transition-opacity">
                  {item.step}
                </div>
                <div className="text-[var(--color-accent-1)] flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-4 font-semibold">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;
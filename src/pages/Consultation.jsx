import React from 'react';
import ParticleBackground from '../components/ParticleBackground';
import ScrollReveal from '../components/ScrollReveal';

const Consultation = () => {
  return (
    <div>
      <ParticleBackground />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-[var(--gradient-hero)] border-bottom relative">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl mb-4">Book Your Reading</h1>
            <p className="subtitle">Connect with the cards. Discover what awaits.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <ScrollReveal className="glass-panel p-8 md:p-12 bg-white shadow-[0_8px_40px_rgba(167,139,250,0.15)] rounded-3xl border border-[var(--color-accent-2)]">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-wide">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all interactive" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-wide">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all interactive" placeholder="jane@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-wide">Date of Birth</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all interactive" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-wide">Reading Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all interactive">
                      <option>Single Card</option>
                      <option>Three Card Spread</option>
                      <option>Celtic Cross</option>
                      <option>Full Year Spread</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-wide">Preferred Date & Time</label>
                  <input type="datetime-local" className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all interactive" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[var(--color-deep-contrast)] mb-2 uppercase tracking-wide">Question or Intention</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-[var(--color-secondary-bg)] bg-[var(--color-primary-bg)] focus:outline-none focus:border-[var(--color-accent-1)] focus:ring-2 focus:ring-[var(--color-accent-2)] transition-all resize-none interactive" placeholder="What would you like guidance on?"></textarea>
                </div>

                <button type="button" className="btn-gradient w-full py-4 text-lg interactive mt-4">
                  Reserve My Reading
                </button>
              </form>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <ScrollReveal delay={100} className="glass-panel p-6 border-[var(--color-accent-2)]">
              <h3 className="text-xl mb-3 text-[var(--color-deep-contrast)]">What to Expect</h3>
              <p className="text-sm">A 45-minute video call exploring the energies surrounding your intention. You'll receive a photo of your spread and a written summary.</p>
            </ScrollReveal>
            <ScrollReveal delay={200} className="glass-panel p-6 border-[var(--color-accent-2)]">
              <h3 className="text-xl mb-3 text-[var(--color-deep-contrast)]">Preparation Tips</h3>
              <p className="text-sm">Find a quiet space, light a candle if you wish, and take a few deep breaths before we begin. Openness is key.</p>
            </ScrollReveal>
            <ScrollReveal delay={300} className="glass-panel p-6 border-[var(--color-accent-2)]">
              <h3 className="text-xl mb-3 text-[var(--color-deep-contrast)]">Our Promise</h3>
              <p className="text-sm">Complete confidentiality. We hold space for whatever comes up and provide empowering, non-judgmental guidance.</p>
            </ScrollReveal>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Consultation;

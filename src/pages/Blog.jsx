import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Blog = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Major Arcana', 'Minor Arcana', 'Spreads', 'Astrology'];

  const posts = [
    { id: 1, category: 'Major Arcana', title: "Understanding The Fool's Journey", excerpt: "The sequence of the Major Arcana tells a profound story of spiritual evolution from innocence to worldly integration.", date: "Oct 12, 2026", author: "Elara Moon", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 2, category: 'Spreads', title: "The 3-Card Spread for Daily Clarity", excerpt: "Learn how to start your morning with a simple Past, Present, Future spread to align your energy for the day.", date: "Oct 10, 2026", author: "Elara Moon", img: "https://images.unsplash.com/photo-1608681283307-2856db745037?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 3, category: 'Astrology', title: "Tarot and the Zodiac: Finding Your Birth Card", excerpt: "Every zodiac sign corresponds to a Major Arcana card. Discover what yours reveals about your soul's purpose.", date: "Oct 05, 2026", author: "Elara Moon", img: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 4, category: 'Minor Arcana', title: "Navigating the Suit of Swords", excerpt: "Often misunderstood, the Swords represent intellect, conflict, and ultimately, absolute clarity and truth.", date: "Sep 28, 2026", author: "Elara Moon", img: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 5, category: 'Spreads', title: "A Custom Spread for the Full Moon", excerpt: "Harness lunar energy with a spread designed specifically for releasing what no longer serves you.", date: "Sep 22, 2026", author: "Elara Moon", img: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { id: 6, category: 'Major Arcana', title: "Demystifying The Death Card", excerpt: "Why the most feared card in the deck is actually the most beautiful harbinger of transformation.", date: "Sep 15, 2026", author: "Elara Moon", img: "https://images.unsplash.com/photo-1506744626753-ce830be628dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  const filteredPosts = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div className="pt-24 min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-[var(--gradient-hero)] py-16 mb-12 border-bottom">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl mb-4">Arcana Journal</h1>
            <p className="subtitle">Insights, spreads, and stories from the cards</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="container mx-auto px-6">
        
        {/* Featured Post (only show if 'All' is selected for demo purposes) */}
        {filter === 'All' && (
          <ScrollReveal className="mb-16">
            <div className="relative rounded-3xl overflow-hidden h-[400px] group interactive cursor-pointer">
              <div className="absolute inset-0 bg-[#a78bfa] mix-blend-multiply opacity-40 z-10 transition-opacity group-hover:opacity-20" />
              <img src="https://images.unsplash.com/photo-1608681283307-2856db745037?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Featured" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1240] to-transparent z-20" />
              
              <div className="absolute bottom-0 left-0 p-8 z-30">
                <span className="inline-block px-3 py-1 bg-[var(--color-primary-bg)] text-[var(--color-deep-contrast)] text-xs font-bold tracking-wider uppercase mb-4 rounded-full">Guides</span>
                <h2 className="text-3xl md:text-4xl text-white font-serif mb-2 group-hover:text-[var(--color-accent-2)] transition-colors">How to Cleanse and Connect With Your First Deck</h2>
                <p className="text-[#ede8fa] mb-4 max-w-2xl">Establishing a deep bond with your tools is the crucial first step to accurate intuition. Here's our definitive guide.</p>
                <span className="text-white hover:underline interactive font-medium">Read Article &rarr;</span>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Filters */}
        <ScrollReveal className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all interactive ${
                filter === cat 
                ? 'bg-[var(--color-deep-contrast)] text-white shadow-md' 
                : 'bg-white text-[var(--color-text-secondary)] border border-[var(--color-accent-2)] hover:border-[var(--color-accent-1)] hover:text-[var(--color-accent-1)]'
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 100} className="glass-panel p-6 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(167,139,250,0.2)] hover:border-[var(--color-accent-1)] group">
              <div className="h-48 bg-[var(--color-secondary-bg)] rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-[var(--color-accent-1)] mix-blend-hue z-10 opacity-30" />
                <img src={post.img} alt="Post Cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-accent-1)] mb-2 block">{post.category}</span>
              <h3 className="text-xl text-[var(--color-deep-contrast)] mb-3 font-serif line-clamp-2">{post.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-3">{post.excerpt}</p>
              
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--color-primary-bg)]">
                <div className="text-xs text-gray-500">{post.author} &bull; {post.date}</div>
                <span className="text-[var(--color-accent-1)] text-sm font-semibold hover:text-[var(--color-deep-contrast)] transition-colors interactive cursor-pointer">Read &rarr;</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;

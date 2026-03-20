import React, { useState, useRef } from 'react';

const TarotCard = ({ frontImage, backTitle, backDescription }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (isFlipped || !cardRef.current) return;
    
    // Calculate tilt
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    // -15 to +15 degree tilt
    const rotateY = ((x / rect.width) - 0.5) * 30; 
    const rotateX = ((0.5 - (y / rect.height))) * 30; 

    requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale3d(1.05, 1.05, 1.05)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (isFlipped || !cardRef.current) return;
    requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
      }
    });
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && cardRef.current) {
      // When flipping, ensure it transforms to exactly 180deg instead of retaining mouse hover tilt
      cardRef.current.style.transform = 'rotateY(180deg)';
    } else if (isFlipped && cardRef.current) {
      cardRef.current.style.transform = 'rotateY(0deg)';
    }
  };

  return (
    <div 
      className="relative w-64 h-96 perspective-[1000px] cursor-pointer interactive outline-none"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex="0"
    >
      {/* Aura background glow behind the card */}
      <div className="absolute inset-0 bg-[var(--gradient-card-aura)] rounded-2xl opacity-50 blur-xl z-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100" />
      
      <div 
        ref={cardRef}
        className="w-full h-full relative preserve-3d transition-transform duration-500 ease-out shadow-2xl rounded-2xl z-10"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-[var(--color-soft-gold)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontImage ? (
            <img src={frontImage} alt="Tarot Card Front" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-[var(--color-deep-contrast)] flex items-center justify-center p-4">
              <div className="border border-[var(--color-soft-gold)] w-full h-full rounded-xl flex items-center justify-center">
                <span className="text-[var(--color-soft-gold)] font-serif italic">Arcana</span>
              </div>
            </div>
          )}
        </div>

        {/* Back Face */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl bg-[#fdfbf6] border-2 border-[var(--color-soft-gold)] p-6 flex flex-col items-center justify-center text-center shadow-inner"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-2xl font-semibold text-[var(--color-deep-contrast)] mb-2" style={{ fontFamily: 'var(--font-h1)' }}>
            {backTitle || "The Fool"}
          </h3>
          <div className="w-12 h-px bg-[var(--color-soft-gold)] mb-4" />
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {backDescription || "Beginnings, innocence, spontaneity, a free spirit."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TarotCard;

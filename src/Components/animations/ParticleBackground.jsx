import { memo, useMemo } from "react";

/**
 * Lightweight particle background using pure CSS animations
 */
const ParticleBackground = memo(({ particleCount = 15 }) => {
  const particles = useMemo(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 8 : particleCount;
    
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 4,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, [particleCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-sky-400 to-cyan-300 animate-float"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: 0.3,
            filter: 'blur(1px)',
            mixBlendMode: 'screen',
            animation: `float ${particle.duration}s infinite ease-in-out`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
});

ParticleBackground.displayName = "ParticleBackground";

export default ParticleBackground;

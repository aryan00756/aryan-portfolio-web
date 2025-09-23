import React, { useEffect, useState } from 'react';

const TechyCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px) scale(${isClicking ? 1.5 : 1})`,
        }}
      />
      
      {/* Trailing ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px) scale(${isClicking ? 1.2 : 1})`,
          boxShadow: isClicking ? '0 0 20px hsl(var(--primary) / 0.3)' : '0 0 10px hsl(var(--primary) / 0.2)',
        }}
      />
      
      {/* Outer glow ring */}
      <div
        className="fixed top-0 left-0 w-12 h-12 border border-primary/10 rounded-full pointer-events-none z-[9997] transition-all duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 24}px, ${mousePosition.y - 24}px) scale(${isClicking ? 0.8 : 1})`,
          opacity: isClicking ? 0.8 : 0.4,
        }}
      />
    </>
  );
};

export default TechyCursor;
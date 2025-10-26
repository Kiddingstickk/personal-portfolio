import React, { useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
}

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  // Theme-aware colors
  const colors = {
    background: theme === 'dark' ? 'rgba(17, 24, 39, 0.05)' : 'rgba(255, 255, 255, 0.1)',
    initialBackground: theme === 'dark' ? '#111827' : '#f9fafb',
    lineMain: theme === 'dark' ? '0, 255, 255' : '99, 102, 241',
    lineAccent: theme === 'dark' ? '64, 224, 255' : '139, 146, 255',
    particleOuter: theme === 'dark' ? '0, 255, 255' : '99, 102, 241',
    particleInnerMain: theme === 'dark' ? '255, 255, 255' : '139, 146, 255',
    particleInnerAccent: theme === 'dark' ? '0, 255, 255' : '99, 102, 241',
    particleInnerEnd: theme === 'dark' ? '0, 200, 255' : '79, 70, 229'
  };

  const createParticle = useCallback((width: number, height: number): Particle => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: 0.3 + Math.random() * 0.4,
      baseOpacity: 0.3 + Math.random() * 0.4,
    };
  }, []);

  const initParticles = useCallback((width: number, height: number) => {
    const particleCount = Math.min(150, Math.floor((width * height) / 8000));
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle(width, height));
    }
  }, [createParticle]);

  const updateParticles = useCallback((width: number, height: number, mouseX: number, mouseY: number) => {
    const mouseInfluenceRadius = 120;
    const mouseAttraction = 0.0008;
    
    particlesRef.current.forEach(particle => {
      // Mouse interaction
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouseInfluenceRadius) {
        const force = (mouseInfluenceRadius - distance) / mouseInfluenceRadius;
        particle.vx += dx * mouseAttraction * force;
        particle.vy += dy * mouseAttraction * force;
        particle.opacity = Math.min(1, particle.baseOpacity + force * 0.5);
      } else {
        particle.opacity = Math.max(particle.baseOpacity * 0.7, particle.opacity - 0.01);
      }
      
      // Apply velocity with damping
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Add subtle drift
      particle.vx += (Math.random() - 0.5) * 0.01;
      particle.vy += (Math.random() - 0.5) * 0.01;
      
      // Boundary wrapping
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;
      
      // Velocity limits
      const maxVelocity = 2;
      particle.vx = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vx));
      particle.vy = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vy));
    });
  }, []);

  const drawConnections = useCallback((ctx: CanvasRenderingContext2D, mouseX: number, mouseY: number) => {
    const maxDistance = 100;
    const mouseInfluenceRadius = 150;
    
    for (let i = 0; i < particlesRef.current.length; i++) {
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p1 = particlesRef.current[i];
        const p2 = particlesRef.current[j];
        
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // Calculate mouse influence on connection
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          const mouseDistance = Math.sqrt(
            Math.pow(mouseX - midX, 2) + Math.pow(mouseY - midY, 2)
          );
          
          const mouseInfluence = mouseDistance < mouseInfluenceRadius 
            ? (mouseInfluenceRadius - mouseDistance) / mouseInfluenceRadius 
            : 0;
          
          const baseOpacity = (1 - distance / maxDistance) * 0.15;
          const opacity = baseOpacity + mouseInfluence * 0.4;
          const lineWidth = 0.5 + mouseInfluence * 1.5;
          
          // Create gradient for the line
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          gradient.addColorStop(0, `rgba(${colors.lineMain}, ${opacity * p1.opacity})`);
          gradient.addColorStop(0.5, `rgba(${colors.lineAccent}, ${opacity})`);
          gradient.addColorStop(1, `rgba(${colors.lineMain}, ${opacity * p2.opacity})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
  }, [colors.lineMain, colors.lineAccent]);

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D, mouseX: number, mouseY: number, time: number) => {
    const mouseInfluenceRadius = 100;
    
    particlesRef.current.forEach(particle => {
      // Calculate mouse influence
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const mouseDistance = Math.sqrt(dx * dx + dy * dy);
      const mouseInfluence = mouseDistance < mouseInfluenceRadius 
        ? (mouseInfluenceRadius - mouseDistance) / mouseInfluenceRadius 
        : 0;
      
      // Subtle pulsing effect
      const pulse = Math.sin(time * 0.003 + particle.x * 0.01) * 0.2 + 0.8;
      const size = particle.size * (1 + mouseInfluence * 0.5) * pulse;
      const glowSize = size * (2 + mouseInfluence * 2);
      
      // Outer glow
      const outerGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, glowSize
      );
      outerGradient.addColorStop(0, `rgba(${colors.particleOuter}, ${particle.opacity * 0.3})`);
      outerGradient.addColorStop(0.4, `rgba(${colors.lineAccent}, ${particle.opacity * 0.1})`);
      outerGradient.addColorStop(1, `rgba(${colors.particleOuter}, 0)`);
      
      ctx.fillStyle = outerGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner particle
      const innerGradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, size
      );
      innerGradient.addColorStop(0, `rgba(${colors.particleInnerMain}, ${particle.opacity})`);
      innerGradient.addColorStop(0.3, `rgba(${colors.particleInnerAccent}, ${particle.opacity * 0.8})`);
      innerGradient.addColorStop(1, `rgba(${colors.particleInnerEnd}, ${particle.opacity * 0.4})`);
      
      ctx.fillStyle = innerGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [colors.particleOuter, colors.lineAccent, colors.particleInnerMain, colors.particleInnerAccent, colors.particleInnerEnd]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = canvas.width / window.devicePixelRatio;
    const height = canvas.height / window.devicePixelRatio;
    
    // Clear canvas with subtle fade effect
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, width, height);
    
    timeRef.current += 16;
    
    updateParticles(width, height, mouseRef.current.x, mouseRef.current.y);
    drawConnections(ctx, mouseRef.current.x, mouseRef.current.y);
    drawParticles(ctx, mouseRef.current.x, mouseRef.current.y, timeRef.current);
    
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawConnections, drawParticles, colors.background]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      // Set initial background
      ctx.fillStyle = colors.initialBackground;
      ctx.fillRect(0, 0, rect.width, rect.height);
    }
    
    initParticles(rect.width, rect.height);
  }, [initParticles, colors.initialBackground]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -200, y: -200 };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleResize, handleMouseMove, handleMouseLeave, animate, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto ${className}`}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default ParticleBackground;
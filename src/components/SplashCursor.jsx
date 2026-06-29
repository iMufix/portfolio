import { useEffect, useRef } from "react";

export default function SplashCursor() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -100, y: -100 });
  const requestRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "#BBCCD7",
      "#D7E2EA",
      "#646973",
      "#B600A8",
      "#7621B0",
    ];

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
          decay: Math.random() * 0.02 + 0.01,
        });
      }
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      mouse.current.x = touch.clientX;
      mouse.current.y = touch.clientY;
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: touch.clientX + (Math.random() - 0.5) * 10,
          y: touch.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
          decay: Math.random() * 0.02 + 0.01,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => p.life > 0);

      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        p.vx *= 0.98;
        p.vy *= 0.98;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life * 0.5;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}

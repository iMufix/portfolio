import { useRef, useState, useCallback } from "react";

export default function Magnet({ children, padding = 150, strength = 3 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < maxDistance) {
        setIsActive(true);
        setPosition({
          x: distX / strength,
          y: distY / strength,
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    },
    [padding, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

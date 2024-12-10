import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

const CustomCursor = ({ size = 10 }) => {
  const [hovering, setHovering] = useState(false);
  const isMobile = useIsMobile();

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 20 });

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    };

    const handleHover = (e) => {
      const isHoverable = e.target.closest("a, button, .clickable");
      setHovering(!!isHoverable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [isMobile, size, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 bg-accent dark:bg-darkAccent"
      style={{
        width: hovering ? size * 2 : size, 
        height: hovering ? size * 2 : size, 
        borderRadius: "50%",
        translateX: springX,
        translateY: springY,
      }}
      animate={{
        scale: hovering ? 1.5 : 1,
        opacity: hovering ? 0.6 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    />
  );
};

export default CustomCursor;

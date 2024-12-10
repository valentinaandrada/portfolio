import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = ({ size = 10 }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Motion values for cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring animations for smooth cursor movement
  const springX = useSpring(cursorX, { stiffness: 300, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 20 });

  useEffect(() => {
    // Check if the screen width is desktop
    const checkScreenSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize); // Listen for screen resize

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {

    if (!isDesktop) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    };

    const handleHover = (e) => {
      // Look for parent elements with the "clickable" class or tagName "a" or "button"
      const isHoverable = e.target.closest("a, button, .clickable");
      setHovering(!!isHoverable);
    };

    // Event listeners
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [isDesktop, size, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 bg-accent dark:bg-darkAccent"
      style={{
        width: hovering ? size * 2 : size, // Scaled size when hovering
        height: hovering ? size * 2 : size, // Scaled size when hovering
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

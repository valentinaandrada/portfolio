import { motion } from "motion/react";
import { useState } from "react";

const HeroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  return (
    <>
      {/* Phase 1: Line enters */}
      {phase === 0 && (
        <motion.div
          className="absolute top-1/2 w-full h-[4px] bg-secondary"
          initial={{ x: "-100%" }}
          animate={{ x: "0%", transition: { duration: 2, ease: "easeOut" } }}
          onAnimationComplete={() => setPhase(1)} // Trigger next phase
        />
      )}

      {/* Phase 2: Line expands */}
      {phase === 1 && (
        <motion.div
          className="absolute top-1/2 w-full bg-secondary"
          initial={{ height: "5px" }}
          animate={{
            height: "50%",
            top: "0%",
            transition: { duration: 1.5, ease: "easeOut" },
          }}
          onAnimationComplete={() => setPhase(2)} // Trigger next phase
        />
      )}

      {/* Phase 3: Line moves up and fades out */}
      {phase === 2 && (
        <motion.div
          className="absolute w-full bg-secondary"
          initial={{ height: "50%", top: "0%" }}
          animate={{
            y: "-100%",
            transition: { duration: 1, ease: "easeIn" },
          }}
          onAnimationComplete={onComplete} // Notify parent when complete
        />
      )}
    </>
  );
};

export default HeroAnimation;

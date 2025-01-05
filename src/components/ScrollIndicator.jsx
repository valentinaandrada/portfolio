// import { motion } from "motion";
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ScrollIndicator = ({ isAtTop, isAtBottom }) => {
  
  if (isAtTop) {
    return (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 8 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
      >
        <div className="flex items-center justify-center">
          <IoIosArrowDown
            className="text-secondary dark:text-primary"
            size={16}
          />
        </div>
      </motion.div>
    );
  }

  if (isAtBottom) {
    return (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
      >
        <div className="flex items-center justify-center">
          <IoIosArrowUp
            className="text-secondary dark:text-primary"
            size={16}
          />
        </div>
      </motion.div>
    );
  }

  return null;
};

export default ScrollIndicator;

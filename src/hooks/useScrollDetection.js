import { useState, useEffect } from "react";

const useScrollDetection = (ref, threshold = 20) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const element = ref.current;
        const scrollPosition = element.scrollTop;
        const maxScroll = element.scrollHeight - element.clientHeight;

        // Check if the user is at the top or bottom
        setIsAtTop(scrollPosition <= maxScroll - threshold);
        setIsAtBottom(scrollPosition >= maxScroll - threshold);
      }
    };

    const element = ref.current;

    if (element) {
      element.addEventListener("scroll", handleScroll);

      // Trigger initial state update
      handleScroll();

      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ref, threshold]);

  return { isAtTop, isAtBottom };
};

export default useScrollDetection;

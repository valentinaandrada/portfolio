import { useEffect } from "react";

const useCloseOnClickOrEsc = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
          callback();
        }
      };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, callback]);
};

export default useCloseOnClickOrEsc;

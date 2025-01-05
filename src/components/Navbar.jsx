import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useCloseOnClickOrEsc from "../hooks/useCloseOnClickOrEsc";
import LanguageSwitcher from "./LanguageSwitcher";
import ModeSwitcher from "./ModeSwitcher";
import CloseButton from "./CloseButton";
import useIsMobile from "../hooks/useIsMobile";

const Navbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  useCloseOnClickOrEsc(navRef, () => setIsOpen(false));

  useEffect(() => {
    const firstVisit = localStorage.getItem("navbarFirstVisit");
    if (!firstVisit) {
      setHasAnimated(true);
      localStorage.setItem("navbarFirstVisit", "true");
    }
  }, []);

  // Framer motion variants
  const variants = {
    open: {
      width: "300px",
      padding: "60px 30px",
      transition: { duration: 0.5 },
    },
    closed: {
      width: isMobile ? "40px" : "60px",
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Blur Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-neutral/30 backdrop-blur-md z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
      <motion.nav
        ref={navRef}
        className="fixed top-0 left-0 h-full bg-white dark:bg-overlay-dark  dark:text-darkSecondary shadow-lg flex flex-col items-center z-20"
        initial={hasAnimated ? false : "closed"}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        aria-expanded={isOpen}
      >
        {/* Toggle Button */}
        <button
          className={`absolute ${
            isOpen
              ? "top-5 right-5"
              : "inset-0 flex justify-center items-center"
          } focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <CloseButton />
          ) : (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.5 }}
              transition={{
                repeat: 3,
                repeatType: "reverse",
                duration: 1,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </motion.div>
          )}
        </button>

        {/* Content */}
        <div className="h-full w-full flex flex-col justify-between items-start ">
          {/* Language Switcher */}
          <div className={`${isOpen ? "block" : "hidden"}`}>
            <LanguageSwitcher />
          </div>

          {/* Navigation Links */}
          <ul
            className={`space-y-4 ${isOpen ? "block" : "hidden"}`}
            role="menu"
          >
            <li role="menuitem">
              <NavLink
                to=""
                onClick={() => setIsOpen(false)}
                end
                className={({ isActive }) =>
                  `text-xl tracking-wide ${
                    isActive
                      ? "font-medium "
                      : "font-light  hover:text-accent hover:font-medium"
                  }`
                }
              >
                {t("nav.home")}
              </NavLink>
            </li>
            <li role="menuitem">
              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xl tracking-wide ${
                    isActive
                      ? "font-medium "
                      : "font-light  hover:text-accent hover:font-medium"
                  }`
                }
              >
                {t("nav.about")}
              </NavLink>
            </li>
            <li role="menuitem">
              <NavLink
                to="/projects"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xl tracking-wide ${
                    isActive
                      ? "font-medium "
                      : "font-light  hover:text-accent hover:font-medium"
                  }`
                }
              >
                {t("nav.projects")}
              </NavLink>
            </li>
            <li role="menuitem">
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xl tracking-wide ${
                    isActive
                      ? "font-medium "
                      : "font-light  hover:text-accent hover:font-medium"
                  }`
                }
              >
                {t("nav.contact")}
              </NavLink>
            </li>
          </ul>

          {/* Social Icons */}
          <div className={`flex flex-col gap-2 ${isOpen ? "block" : "hidden"}`}>
            <a
              href="mailto:valentinaandradazan@gmail.com"
              className="tracking-normal font-light hover:font-medium"
              aria-label="Email"
            >
              email
            </a>
            <a
              href="https://github.com/valentinaandrada"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-normal font-light hover:font-medium"
              aria-label="GitHub"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/valentinaandrada/"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-normal font-light hover:font-medium"
              aria-label="LinkedIn"
            >
              linkedin
            </a>
          </div>

          {/* Color mode switcher */}
          <div className={`${isOpen ? "block" : "hidden"}`}>
            <ModeSwitcher />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

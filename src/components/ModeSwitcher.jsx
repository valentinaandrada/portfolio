import useDarkMode from "../hooks/useDarkMode";

const ModeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <div className={`text-sm font-light tracking-normal`}>
    <button
      className={`hover:underline ${
        !isDarkMode ? "font-medium " : "text-secondary dark:text-darkSecondary"
      }`}
      onClick={() => setIsDarkMode(false)}
    >
      light
    </button>
    <span> / </span>
    <button
      className={`hover:underline ${
        isDarkMode ? "font-medium " : "text-secondary dark:text-darkSecondary"
      }`}
      onClick={() => setIsDarkMode(true)}
    >
      dark
    </button>
  </div>
  );
};

export default ModeSwitcher;

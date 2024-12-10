import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const footerColor =
    location.pathname === "/" ? "text-secondary" : "text-primary";

    const footerBackground =
    location.pathname === '/' ? 'bg-inherit' : 'bg-secondary'
    
  return (
    <div className={`px-12 py-8 z-10 ${footerBackground} `}>
      <p className={`text-sm uppercase tracking-[.2em] ${footerColor}`}>
        Valentina Andrada
      </p>
    </div>
  );
};

export default Footer;

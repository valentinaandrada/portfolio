import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-left">
        <a href="#contact" className="nav-item">
          contact
        </a>
        <a href="#projects" className="nav-item">
          projects
        </a>
        <a href="#about" className="nav-item">
          about me
        </a>
      </div>
        {/* <a href="#header" className="nav-logo">
          <img src="/assets/img/logo_bg-03.png" alt="logo" />
        </a> */}
    </>
  );
};

export default Navbar;

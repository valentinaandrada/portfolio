import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 className="title contact-title">
          get in <br /> touch
        </h1>
        <div className="contact-info">
          <p>
            I'm actively seeking full-time remote opportunities, with a base in
            Barcelona but open to working globally.
          </p>
          <div className="contact-list">

          <a className="contact-item" href="https://www.linkedin.com/in/valentinaandrada/" target="blank">
            linkedin
          </a>
          <a className="contact-item" href="https://github.com/valentinaandrada" target="blank">
            github
          </a>
          <a
            className="contact-item"
            href="mailto:valentinaandrada93@gmail.com"
          >
            send email
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import "./About.css";

const About = () => {
  return (
    <>
      <div className="container about" id="about">

          <img className="about-img" src="/assets/img/VA-photo.jpeg" alt="" />
          <div className="about-intro">
            <h1 className="title">about me</h1>
            <p className="intro-p">
              As an architect, I've been working for the last five years shaping
              ideas to life through Building Information Modeling (BIM). My
              journey began with a love for design, but it took an unexpected
              turn when I came across the potential of programming while
              learning Dynamo, an open-source visual programming platform for
              designers, that allows the automation of workflows in Autodesk
              Revit.
            </p>
            <p className="intro-p">
              What started as a quest for efficiency evolved into a curious
              passion for programming. As I delved deeper into tutorials and
              hands-on projects, I found myself captivated by the endless
              possibilities of front-end development, so I decided to start this
              career change. I immersed myself in formal training, expanding my
              skills and knowledge in this dynamic field, honing my skills in
              HTML, CSS, and JavaScript, with a particular focus on React.
            </p>
            <p className="intro-p">
              I'm that rare mix of architect and tech enthusiast, armed with a
              unique combination of creativity and technical skills, committed
              to leveraging my expertise to craft immersive digital experiences
              and push the boundaries of what's possible in front-end
              development. My journey from blueprints to code has prepared me to
              take this step, and I'm ready to keep working on my newfound
              skills and bring fresh ideas to the table as a developer.
            </p>
            <br />
            <a
              className="about-cv"
              href="https://drive.google.com/file/d/1KAlzym4yKUCf6gKk8p6RtUydKZPiRnYn/view?usp=drive_link"
              target="blank"
            >
              Download my resume
            </a>
          </div>

        <div className="about-stack">
          <h1 className="title">stack</h1>
          <ul className="about-stack_list">
            <li className="rounded-box">HTML5</li>
            <li className="rounded-box">CSS3</li>
            <li className="rounded-box">Bootstrap</li>
            <li className="rounded-box">JavaScript</li>
            <li className="rounded-box">Git & GitHub</li>
            <li className="rounded-box">API's Integration</li>
            <li className="rounded-box">React JS</li>
            <li className="rounded-box">Responsive Design</li>
            <li className="rounded-box">Web Design</li>
            <li className="rounded-box">Figma</li>
            <li className="rounded-box">Adobe Illustrator</li>
            <li className="rounded-box">Adobe Photoshop</li>

          </ul>
        </div>
      </div>
    </>
  );
};

export default About;

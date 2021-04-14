import "./About.css";
import FetchSVG from "../../assets/undraw_playing_fetch_cm19.svg";
import CodeSVG from "../../assets/undraw_Code_thinking_re_gka2.svg";
import CollabSVG from "../../assets/undraw_Collaboration_re_vyau.svg";
import BrainstormSVG from "../../assets/undraw_Brainstorming_re_1lmw.svg";
import Carousel from "../carousel/Carousel";

const About = () => {
  return (
    <div className="about-container">
      <Carousel className="about-summary-card responsive-width" auto>
        <div className="about-summary-root">
          <div className="about-summary-text">
            <h2>Analytical</h2>
            <p>
              I am a problem-solver that enjoys analyzing complex issues on
              full-stack systems using fundamental computer science principles.
              I love learning new design patterns, implementing algorithmic
              solutions, and reinforcing best practices.
            </p>
          </div>
          <div className="about-summary-images">
            <img src={CodeSVG} alt="svg1" className="about-svg" />
          </div>
        </div>
        <div className="about-summary-root">
          <div className="about-summary-images">
            <img src={CollabSVG} alt="svg1" className="about-svg" />
          </div>
          <div className="about-summary-text">
            <h2>Collaborator</h2>
            <p>
              The best work results from an efficient, diverse team. I enjoy
              meeting new people and contributing to a synergistic work
              environment where I can learn from and share ideas with others.
            </p>
          </div>
        </div>
        <div className="about-summary-root">
          <div className="about-summary-text">
            <h2>Committed</h2>
            <p>
              Computer Science and software are constantly evolving. I am
              committed to learning the latest languages, paradigms, and open
              source technologies to ensure I am always implementing the best
              solution in a project.
            </p>
          </div>
          <div className="about-summary-images">
            <img src={BrainstormSVG} alt="svg1" className="about-svg" />
          </div>
        </div>
        <div className="about-summary-root">
          <div className="about-summary-images">
            <img src={FetchSVG} alt="svg1" className="about-svg" />
          </div>
          <div className="about-summary-text">
            <h2>About Me</h2>
            <p>
              I am a graduate of Rutgers University with a Bachelor's in
              Computer Science. I am an avid tennis player, chess enthusiast,
              and computer builder. I love pets, particulary my cat named Jane.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
/* <img src={BrainstormSVG} alt="brainstorm" className="about-svg" />
          <img src={CollabSVG} alt="collab" className="about-svg" />
          <img src={GeniusSVG} alt="genius" className="about-svg" /> */

export default About;

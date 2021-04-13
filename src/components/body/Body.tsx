import "./Body.css";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import About from "../about/About";
import Skills from "../Skills/Skills";
import Header from "../header/Header";

const Body = () => {
  return (
    <div className="body">
      <Profile />
      {/* <Header /> */}
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default Body;

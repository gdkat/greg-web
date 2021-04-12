import "./Body.css";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import About from "../about/About";

const Body = () => {
  return (
    <div className="body">
      <Profile />
      <About />
      <Projects />
    </div>
  );
};

export default Body;

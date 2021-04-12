import "./Body.css";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import About from "../about/About";
import Skills from "../Skills/Skills";
import Header from "../header/Header";

function scrollFunction(e: React.UIEvent<HTMLDivElement, UIEvent>) {
  const headerList = document.getElementById("header-elements");
  if (!headerList) return;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerList.style.height = "30px";
  } else {
    headerList.style.height = "5vh";
  }
}

const Body = () => {
  return (
    <div className="body" onScroll={scrollFunction}>
      <Profile />
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  );
};

export default Body;

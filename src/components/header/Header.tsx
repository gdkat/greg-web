import "./Header.css";

const menuItems = [
  {
    title: "Intro",
    link: "#intro",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Skills",
    link: "#skills",
  },
];

const Header = () => {
  const onClick = (e: any, link: string) => {
    console.log(link);
  };

  return (
    <header className="header">
      {/* <h2 className="header-title">Gregory Katz</h2> */}
      {/* <div id="header-elements">
        {menuItems.map((el) => (
          <div
            className="header-element"
            key={el.link}
            onClick={(e) => onClick(e, el.link)}
          >
            {el.title}
          </div>
        ))}
      </div> */}
      <div className="hamburger">
        <i />
        <i />
        <i />
      </div>
    </header>
  );
};

export default Header;

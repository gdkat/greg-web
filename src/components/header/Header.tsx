import "./Header.css";

const menuItems = [
  {
    title: "Intro",
  },
  {
    title: "About",
  },
  {
    title: "Projects",
  },
];

const Header = () => {
  const onClick = (link: any) => {
    console.log(link);
  };

  return (
    <header className="header">
      <h2 className="header-title">Gregory Katz</h2>
      <div className="header-elements">
        {/* {menuItems.map((el) => <a onClick={(e) => onClick(e, el.link)}>{el.title}</a>)} */}
      </div>
      <div className="hamburger">
        <i />
        <i />
        <i />
      </div>
    </header>
  );
};

export default Header;

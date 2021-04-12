import "./Profile.css";
import Greg from "../../assets/greg.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Particles from "../particles/Particles";

const Profile = () => {
  const socialIconClick = (path: string) => window.open(path, "_blank");

  return (
    <div className="section-root profile-root">
      <Particles />
      <div className="content-area profile-intro">
        <div className="profile-text">
          <h1 className="name">Gregory Katz - </h1>
          <h1>Software Developer</h1>
          <h1>From Greater NYC</h1>
          <div className="profile-social-media">
            <GitHubIcon
              fontSize="inherit"
              onClick={() => socialIconClick("https://github.com/gdkat")}
            />
            <LinkedInIcon
              fontSize="inherit"
              onClick={() =>
                socialIconClick("https://www.linkedin.com/in/gdkat/")
              }
            />
          </div>
        </div>
        <img
          className="profile-pic"
          src={Greg}
          alt="Greg"
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default Profile;

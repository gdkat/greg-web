import { GitHub, Check } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import { useEffect, useState } from "react";
import "./Projects.css";
import Project from "./project/Project";
import colors from "../../constants/colors";
import AstronautSVG from "../../assets/undraw_Astronaut_re_8c33.svg";
import LaunchSVG from "../../assets/undraw_launching_125y.svg";
import ViewMore from "./viewmore/ViewMore";

const Projects = () => {
  const [repos, setRepos] = useState({
    data: null as any[] | null,
    loading: true,
    error: null as any | null,
  });

  useEffect(() => {
    const fetchRepos = async () => {
      await fetch(
        "https://api.github.com/users/gdkat/repos?sort=updated&direction=desc"
      )
        .then((res) => res.json())
        .then((reposData) =>
          setRepos({
            ...repos,
            loading: false,
            data: reposData,
          })
        )
        .catch((err) => setRepos({ data: null, loading: false, error: err }));
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    repos.data != null && console.log(repos.data);
  }, [repos]);

  return (
    <div className="projects-container">
      <div className="background-svg-container">
        <img className="projects-background-svg" src={LaunchSVG} alt="bg" />
      </div>
      <div className="responsive-width projects-root">
        <img className="projects-svg" src={AstronautSVG} alt="bg" />
        <h2 className="projects-root-header">Projects</h2>
        {repos.loading ? (
          <div className="loading-wrapper">
            <Fab aria-label="save" color="inherit" className="loading-icon">
              <GitHub />
            </Fab>
            <CircularProgress size={68} className="loading-progress" />
          </div>
        ) : repos.error ? (
          <div className="error-wrapper"></div>
        ) : (
          <div className="projects-grid">
            {repos.data?.slice(0, 5).map((repo, idx) => (
              <Project key={repo.id} repo={repo} color={colors[idx]} />
            ))}
            <ViewMore color={colors[5]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

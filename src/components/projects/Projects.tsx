import { GitHub, Check } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import { useEffect, useState } from "react";
import "./Projects.css";
import Project from "./project/Project";
import colors from "../../constants/colors";
import BGSVG from "../../assets/cool-background.svg";

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
    <div>
      <img className="projects-background-svg" src={BGSVG} alt="bg" />
      <div className="projects-root">
        <h1 className="projects-root-header">Projects</h1>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

import { GitHub } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import { useEffect, useState } from "react";
import "./Projects.css";
import Project from "./project/Project";
import colors from "../../constants/colors";
import AstronautSVG from "../../assets/undraw_Astronaut_re_8c33.svg";
import LaunchSVG from "../../assets/undraw_launching_125y.svg";
import ViewMore from "./viewmore/ViewMore";
import RepoRes from "../../mock/GithubRepos";

const Projects = () => {
  const [repos, setRepos] = useState({
    data: null as typeof RepoRes | null,
    loading: true,
    error: null as any | null,
  });
  const [popupRef, setPopupRef] = useState({
    open: false,
    el: null as HTMLDivElement | null,
    repoId: 0,
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
            data: reposData?.length ? reposData : [],
            error: reposData.length ? null : "API Error",
          })
        )
        .catch((err) => setRepos({ data: null, loading: false, error: err }));
    };

    fetchRepos();
  }, []);

  const onTitleClick = (
    ref: React.RefObject<HTMLDivElement> | null,
    id: number
  ) => {
    setPopupRef({
      open: !!ref?.current,
      el: ref?.current ? ref.current : popupRef.el,
      repoId: id,
    });
  };

  const getProjectLinks = () => {
    const id = popupRef.repoId;

    const repo = repos.data?.find((repo) => repo.id === id);

    if (!repo) return <>No Links Available</>;

    return (
      <>
        <a href={repo.html_url} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {repo.homepage !== "" && (
          <>
            {" "}
            |{" "}
            <a href={repo.homepage} target="_blank" rel="noreferrer">
              Demo
            </a>
          </>
        )}
      </>
    );
  };

  return (
    <div className="bg-white projects-container">
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
              <Project
                key={repo.id}
                index={idx}
                repo={repo}
                color={colors[idx]}
                onTitleClick={onTitleClick}
              />
            ))}
            <ViewMore index={5} color={colors[5]} />
          </div>
        )}
      </div>
      <Popper
        open={popupRef.open}
        anchorEl={popupRef.el}
        transition
        placement="bottom-start"
        disablePortal={true}
        style={{ zIndex: 100 }}
        onMouseOver={() => setPopupRef({ ...popupRef, open: true })}
        onMouseLeave={() => setPopupRef({ ...popupRef, open: false })}
        modifiers={{
          flip: {
            enabled: false,
          },
          preventOverflow: {
            enabled: false,
            // boundariesElement: "scrollParent",
          },
          hide: {
            enabled: false,
          },
          // arrow: {
          //   enabled: true,
          //   element: popupRef,
          // },
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <div className="projects-popover">{getProjectLinks()}</div>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default Projects;

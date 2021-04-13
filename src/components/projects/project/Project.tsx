import { useEffect, useState, Fragment } from "react";
import RepoRes from "../../../mock/GithubRepos";
import "./Project.css";

interface ProjectProps {
  repo: typeof RepoRes[0];
  color: string;
  index?: number;
}

const Project = (props: ProjectProps) => {
  const { repo, color, index } = props;

  const [languages, setLanguages] = useState({
    data: null as {
      [language: string]: number;
    } | null,
    loading: false,
    error: null as any | null,
  });

  useEffect(() => {
    const fetchRepos = async () => {
      await fetch(repo.languages_url)
        .then((res) => res.json())
        .then((languagesData) =>
          setLanguages({
            ...languages,
            loading: false,
            data: languagesData,
          })
        )
        .catch((err) =>
          setLanguages({ data: null, loading: false, error: err })
        );
    };

    setLanguages({ ...languages, loading: true });
    fetchRepos();
  }, []);

  const parseLanguages = (pLanguages: typeof languages.data) => {
    if (!pLanguages) return [];

    const langArr = Object.keys(pLanguages).sort(
      (l1, l2) => pLanguages[l2] - pLanguages[l1]
    );

    return langArr.map((language, idx) => (
      <Fragment key={language}>
        {language}
        {idx !== langArr.length - 1 ? ", " : ""}
      </Fragment>
    ));
  };

  const onHover = (e: any) => {
    if (index == null) return;
    const odd = (index + 1) % 2;
    const hoverEl = document.getElementById(`project-${index}`);
    let neighborEl = odd
      ? document.getElementById(`project-${index + 1}`)
      : document.getElementById(`project-${index - 1}`);
    if (!hoverEl || !neighborEl) return;

    hoverEl.style.gridColumn = odd ? "1 / 3" : "2 / 4";
    neighborEl.style.gridColumn = odd ? "3 / 4" : "1 / 2";
  };

  return (
    <div
      id={index != null ? `project-${index}` : undefined}
      className="project-root"
      style={{ backgroundColor: color }}
      // onMouseOver={onHover}
    >
      <h3
        className="project-title clickable"
        onClick={() => window.open(repo.html_url, "_blank")}
      >
        {repo.name}
      </h3>
      <p className="project-description">{repo.description}</p>
      <p className="project-languages">
        {languages.data ? parseLanguages(languages.data) : repo.language}
      </p>
    </div>
  );
};

export default Project;

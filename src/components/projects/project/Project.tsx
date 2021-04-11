import { useEffect, useState, Fragment } from "react";
import RepoRes from "../../../mock/GithubRepos";
import "./Project.css";

interface ProjectProps {
  repo: typeof RepoRes[0];
  color: string;
}

const Project = (props: ProjectProps) => {
  const { repo, color } = props;

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

  return (
    <div className="project-root" style={{ backgroundColor: color }}>
      <h2 className="project-title">{repo.name}</h2>
      <p className="project-description">{repo.description}</p>
      <p className="project-languages">
        {languages.data ? parseLanguages(languages.data) : repo.language}
      </p>
    </div>
  );
};

export default Project;

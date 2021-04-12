import Accordion from "../accordion/Accordion";
import "./Skills.css";

const skills = [
  {
    title: "Front-End Web",
    tech: [
      "Typescript",
      "Javascript",
      "ReactJS",
      "HTML",
      "CSS",
      "Progressive WebApps",
      "Responsive Design",
    ],
  },
  {
    title: "Back-End",
    tech: [
      "Javascript",
      "Java",
      "Python",
      "NodeJS",
      "Spring",
      "Flask",
      "Azure",
      "Microservices",
      "Object-Oriented Programming",
      "Concurrency",
      "OAuth",
    ],
  },
  {
    title: "Database",
    tech: ["SQL", "PL/SQL", "Oracle Apex"],
  },
  {
    title: "CI/CD",
    tech: ["Kubernetes", "Docker", "Test Driven Development"],
  },
  {
    title: "Version Control",
    tech: ["Git", "Bitbucket"],
  },
];

const Skills = () => {
  return (
    <div className="skills-root">
      <h2>Skills</h2>
      <div className="skills-accordion-container">
        {skills.map((skill) => (
          <Accordion
            key={skill.title}
            title={skill.title}
            body={skill.tech.join(", ")}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

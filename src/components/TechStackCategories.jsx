const skillGroups = [
  {
    name: "Languages",
    skills: [
      { name: "TypeScript", icon: "/assets/typescript.png"},
      { name: "JavaScript", icon: "/assets/javascript.png" },
      { name: "Python", icon: "/assets/python.png"},
      { name: "Java", icon: "/assets/java.png", },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "/assets/nodejs.png", },
      { name: "Express.js", icon: "/assets/expressjs.png"},
      { name: "Next.js", icon: "/assets/nextjs.png" },
      { name: "MongoDB", icon: "/assets/mongodb.png" },
      { name: "Mongoose", icon: "/assets/mongoose.png"},
    ],
  },
  {
    name: "Testing & DevOps",
    wide: true,
    skills: [
      { name: "Jest", icon: "/assets/jest.png" },
      { name: "Supertest", icon: "/assets/supertest.png" },
      { name: "Playwright", icon: "/assets/playwright.png" },
      { name: "Docker", icon: "/assets/docker.png" },
      { name: "GitHub Actions", icon: "/assets/github-actions.png" },
    ],
  },
  {
    name: "Frontend & Mobile",
    skills: [
      { name: "React", icon: "/assets/react.png"},
      { name: "Tailwind CSS", icon: "/assets/tailwindcss.png",},
      { name: "Flutter", icon: "/assets/flutter.png",},
    ],
  },
  {
    name: "Other",
    skills: [{ name: "Git", icon: "/assets/git.png" },
    { name: "GitHub", icon: "/assets/github.png"},
    { name: "Resend", icon: "/assets/resend.png" }],
  },
];

const TechStackCategories = () => (
  <div className="tech-categories" aria-label="Technology categories">
    {skillGroups.map(({ name, skills, wide }) => (
      <section
        className={`tech-category${wide ? " tech-category--wide" : ""}`}
        key={name}
      >
        <h3 className="tech-category__title">{name}</h3>
        <ul className="tech-category__skills">
          {skills.map(({ name: skillName, icon, short, color, invert, darkText }) => (
            <li
              className="tech-skill"
              style={{ "--skill-color": color }}
              title={skillName}
              key={skillName}
            >
              <span
                className={`tech-skill__icon${darkText ? " tech-skill__icon--dark" : ""}`}
              >
                {icon ? (
                  <img
                    className={invert ? "tech-skill__image--invert" : ""}
                    src={icon}
                    alt=""
                  />
                ) : (
                  short
                )}
              </span>
              <span className="tech-skill__name">{skillName}</span>
            </li>
          ))}
        </ul>
      </section>
    ))}
  </div>
);

export default TechStackCategories;

const technologies = [
  {
    name: "TypeScript",
    icon: "/assets/typescript.png",
    position: "tech-orbit__item--typescript",
    color: "#3178C6",
  },
  {
    name: "Node.js",
    icon: "/assets/nodejshex.svg",
    position: "tech-orbit__item--node",
    color: "#5FA04E",
  },
  {
    name: "FastAPI",
    icon: "/assets/fastapi.png",
    position: "tech-orbit__item--react",
    color: "#009688",
  },
  {
    name: "PostgreSQL",
    icon: "/assets/postgresql.png",
    position: "tech-orbit__item--next",
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    icon: "/assets/mongodb.png",
    position: "tech-orbit__item--mongo",
    color: "#47A248",
  },
  {
    name: "Docker",
    icon: "/assets/docker.png",
    position: "tech-orbit__item--tailwind",
    color: "#2496ED",
  },
  {
    name: "Next.js",
    icon: "/assets/nextjs.png",
    position: "tech-orbit__item--redux",
    color: "#FFFFFF",
    iconClass: "tech-orbit__icon--invert",
  },
  {
    name: "Python",
    icon: "/assets/python.png",
    position: "tech-orbit__item--express",
    color: "#3776AB",
  },
];


const TechStackOrbit = () => (
  <div
    className="tech-orbit"
    role="img"
    aria-label={`Dev Arora's tech stack: ${technologies.map(({ name }) => name).join(", ")}`}
  >
    <svg className="tech-orbit__tracks" viewBox="0 0 800 300" preserveAspectRatio="none" aria-hidden="true">
      <ellipse cx="400" cy="150" rx="365" ry="122" />
      <ellipse cx="400" cy="150" rx="300" ry="94" />
      <ellipse cx="400" cy="150" rx="220" ry="66" />

      <circle r="3.5" className="tech-orbit__dot">
        <animateMotion dur="12s" repeatCount="indefinite" path="M 35 150 A 365 122 0 1 0 765 150 A 365 122 0 1 0 35 150" />
      </circle>
      <circle r="3.5" className="tech-orbit__dot">
        <animateMotion dur="9s" begin="-4s" repeatCount="indefinite" path="M 100 150 A 300 94 0 1 1 700 150 A 300 94 0 1 1 100 150" />
      </circle>
      <circle r="3.5" className="tech-orbit__dot">
        <animateMotion dur="7s" begin="-2s" repeatCount="indefinite" path="M 180 150 A 220 66 0 1 0 620 150 A 220 66 0 1 0 180 150" />
      </circle>
    </svg>

    <div className="tech-orbit__core" aria-hidden="true">
      <img src="/assets/project-logo1.png" alt="Dev Arora" className="tech-orbit__core-image" />
    </div>

    {technologies.map(({ name, icon, position, color, iconClass = "" }) => (
      <div
        className={`tech-orbit__item ${position}`}
        style={{ "--orbit-color": color }}
        key={name}
        title={name}
        aria-hidden="true"
      >
        <img className={`tech-orbit__icon ${iconClass}`} src={icon} alt="" />
      </div>
    ))}
  </div>
);

export default TechStackOrbit;

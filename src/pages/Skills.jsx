import "../assets/css/skills.css";

export default function Skills() {

  const skillsData = [
    {
      name: "HTML",
      percent: 92,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      percent: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      percent: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "GitHub",
      percent: 99,
      icon: "https://toppng.com/uploads/preview/github-logo-transparent-png-11659780101agvzsukgqz.png",
    },
    {
      name: "ReactJS",
      percent: 89,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "BootStrap",
      percent: 93,
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className>My Skills</h2>
      <p className="subtitle">
        We put your ideas and wishes into a unique web project.
      </p>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.percent}%</h3>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

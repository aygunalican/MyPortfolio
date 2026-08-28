import '../assets/css/expereduc.css'


export default function ExperienceEducation() {

  const experienceData = [
    {
      year: "2025",
      title:"Remote Intern",
      place: "Intern Intelligence"
    },
    {
      year: "2025",
      title: "Remote Intern",
      place: "CodeAlpha",
    },
    {
      year: "2025-2026",
      title:  "Front-End Projects",
      place: "Matrix Academy",
    },
  ];

  const educationData = [
    {
      year: "2025 - 2026",
      title: "Matrix Front-End Course",
      place: "Matrix Academy",
    },
    {
      year: "2022 - 2026",
      title: "Computer Engineering",
      place: "Azerbaijan State Oil & Industry University",
    },
    {
      year: "2010 - 2021",
      title: "Zarifa Aliyeva High School",
      place: "Zaqatala"
    },
  ];

  return (
    <section id="education" className="experedu">
    <div className="exp-edu-wrapper container">


      <div className="column">
        <h2>My Experience</h2>

        {experienceData.map((item, index) => (
          <div className="card" key={index}>
            <span className="year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </div>
        ))}
      </div>


      <div className="column">
        <h2>My Education</h2>

        {educationData.map((item, index) => (
          <div className="card" key={index}>
            <span className="year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.place}</p>
          </div>
        ))}
      </div>

    </div></section>
  );
}

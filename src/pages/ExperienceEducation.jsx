import '../assets/css/expereduc.css'


export default function ExperienceEducation() {

  const experienceData = [
    {
      year: "2022 - Present",
      title: "Programming Course",
      place: "Blockdots, London",
    },
    {
      year: "2021 - 2022",
      title: "CMS Course",
      place: "Parsons, The New School",
    },
    {
      year: "2020 - 2021",
      title: "Web Design Course",
      place: "House of Life, Leeds",
    },
  ];

  const educationData = [
    {
      year: "2020 - 2023",
      title: "Blockdots",
      place: "Harvard University",
    },
    {
      year: "2016 - 2020",
      title: "Parsons, The New School",
      place: "University of Denmark",
    },
    {
      year: "2012 - 2015",
      title: "IDEO",
      place: "University of California",
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

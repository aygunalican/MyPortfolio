import React, { useState } from "react";
import '../assets/css/works.css'
import Ad from '../assets/images/todoapp.png'
import Do from '../assets/images/board.png'
import Mo from '../assets/images/filmarchive.png'
import Pl from '../assets/images/sweet.png'
const Works = () => {
  const [active, setActive] = useState("All");

  const categories = ["All", "Search", "Cinema", "Sweets"];

  const works = [
    {
      id: 1,
      title: "KanbanBoard",
      category: "search",
      image: Do,
          link: "https://kanbanboard-devjoint.vercel.app/",
    },
    {
      id: 2,
      title: "Film Archive",
      category: "Cinema",
      image: Mo,
       link: "https://api-react-devjoint.vercel.app/",
    },
    {
      id: 3,
      title: "Sweet Recipes",
      category: "Sweets",
      image: Pl,
      link:"https://auth-react-devjoint.vercel.app/"
    },
    {
      id: 4,
      title: "ToDo App",
      category: "Search",
      image: Ad,
      link:"https://todo-app-three-pi-50.vercel.app/"
    },
  ];

  const filteredWorks =
    active === "All"
      ? works
      : works.filter((item) => item.category === active);

  return (
    <section id="work" className="works">
      <h2 className="works-title">My Recent Works</h2>
      <p className="works-subtitle">
        I turn your ideas into unique digital products that inspire you and
        your customers.
      </p>

      <div className="works-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

 <div className="works-grid">
  {filteredWorks.map((work) => (
    <div className="work-card" key={work.id}>
      <a href={work.link} target="_blank" rel="noopener noreferrer">
        <img src={work.image} alt={work.title} />
        <div className="overlay">
          <h3>{work.title}</h3>
          <span>{work.category}</span>
        </div>
      </a>
    </div>
  ))}
</div>
    </section>
  );
};

export default Works;

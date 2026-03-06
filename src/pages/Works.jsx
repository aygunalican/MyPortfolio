import React, { useState } from "react";
import '../assets/css/works.css'
import Ad from '../assets/images/finder.png'
import Do from '../assets/images/todo.png'
import Mo from '../assets/images/movie.png'
import Pl from '../assets/images/player.png'
const Works = () => {
  const [active, setActive] = useState("All");

  const categories = ["All", "Search", "Cinema", "Music"];

  const works = [
    {
      id: 1,
      title: "GithubFinder",
      category: "search",
      image: Ad,
          link: "http://localhost:5175/githubfinder",
    },
    {
      id: 2,
      title: "MovieSite",
      category: "Cinema",
      image: Mo,
       link: "http://127.0.0.1:5502/movie.html",
    },
    {
      id: 3,
      title: "MusicPlayer",
      category: "Music",
      image: Pl,
      link:"http://127.0.0.1:5503/musicplayer.html"
    },
    {
      id: 4,
      title: "ToDoApp",
      category: "Input",
      image: Do,
      link:"http://127.0.0.1:5502/todo.html"
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
        We turn your ideas into unique digital products that inspire you and
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

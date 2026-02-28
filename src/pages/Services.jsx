import '../assets/css/services.css'

const services = [
  { id: "01", title: "Responsive Design", desc: "Ensure your website looks great on any device." },
  { id: "02", title: "CMS Development", desc: "User-friendly CMS solutions." },
  { id: "03", title: "API Integrations", desc: "Integrate third-party services." },
  { id: "04", title: "Website Redesign", desc: "Modern and fresh redesigns." },
];

export default function Services() {
  return (
    <section id="service" className="service">
    <h1>My Services </h1>
    <div className="services container">
      {services.map((item) => (
        <div className="service-card" key={item.id}>
          <span className="number">{item.id}</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div></section>
  );
}

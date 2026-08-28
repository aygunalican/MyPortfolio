import '../assets/css/services.css'
const services = [
  { id: "01", title: "Responsive Design", desc: "I make sure your website looks great on any device." },
  { id: "02", title: "Component-Based Development", desc: "I build reusable and scalable UI components." },
  { id: "03", title: "API Integrations", desc: "I integrate third-party services into your project." },
  { id: "04", title: "Website Redesign", desc: "I bring modern, fresh redesigns to life." },
];
export default function Services() {
  return (
    <section id="service" className="service">
    <h1>What I Do</h1>
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

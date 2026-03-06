import '../assets/css/footer.css'
import A from '../assets/images/Aletter.png'
const Footer = () => {
  return (
<footer className="bg-purple text-light pt-5 pb-3position-relative">
  <div className="container text-center">
    <div className="mb-3">
      <a href="#" className="d-inline-block">
        <img src="https://i.pinimg.com/736x/76/06/75/760675827b5628641be8bec178e04db1.jpg" alt="Logo" width={80} />
      </a>
    </div>
    <ul className="list-inline mb-3">
      <li className="list-inline-item mx-3"><a href="#" className=" text-decoration-none">About</a></li>
      <li className="list-inline-item mx-3"><a href="#" className=" text-decoration-none">Services</a></li>
      <li className="list-inline-item mx-3"><a href="#" className=" text-decoration-none">Portfolios</a></li>
      <li className="list-inline-item mx-3"><a href="#" className=" text-decoration-none">Contact</a></li>
    </ul>
    <p>© 2024 All rights reserved by <span> ThemeAygun</span></p>
    <a href="#" className="scroll-top position-absolute top-0 end-0 m-3 text-light fs-4">
      ↑
    </a>
  </div>
</footer>

  )
}

export default Footer
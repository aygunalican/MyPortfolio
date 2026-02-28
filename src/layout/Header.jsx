import '../assets/css/header.css'
import A from '../assets/images/Aletter.png'
const Header = () => {
  return (
<header>
  <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <div className="subnav">
        <div className="nav-logo">
          <img src="https://i.pinimg.com/736x/76/06/75/760675827b5628641be8bec178e04db1.jpg" />
          <a className="navbar-brand" href="#">mail@elicanovaaygun.com</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item dropdown me-4">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home +
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Light mode</a></li>
                <li><a className="dropdown-item" href="#">Dark mode</a></li>
              </ul>
            </li>
                 <li className="nav-item me-4">
              <a className="nav-link " href="#service">Services</a>
            </li>
          
              <li className="nav-item">
              <a className="nav-link me-4" href="#work">Work +</a>
            </li>
              <li className="nav-item">
              <a className="nav-link me-4" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4 " href='#skills'>Skills</a>
            </li>
        
            <li className="nav-item">
              <a className="nav-link me-5" aria-disabled="true" href='#contact'>Contact</a>
            </li>
            <button>
              Hire me!
            </button>
          </ul>
        </div></div>
    </div>
  </nav>
</header>

  )
}

export default Header
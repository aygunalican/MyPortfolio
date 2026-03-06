import '../assets/css/header.css'
import A from '../assets/images/download.png'
import B from '../assets/images/kapsul.png'
const Header = () => {
  return (
<header>
  <nav className="navbar navbar-expand-lg ">
   
      <div className="subnav">
  
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item dropdown me-4">
              <a className="nav-link dropdown-toggle ms-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
              <a className="nav-link me-5" href="#work">Work +</a>
            </li>
              <li className="nav-item">
              <a className="nav-link me-5" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-5 " href='#skills'>Skills</a>
            </li>
        
            <li className="nav-item">
              <a className="nav-link me-5" aria-disabled="true" href='#contact'>Contact</a>
            </li>
            <a href="/CV_AYGUN.pdf" download>
            <button className='ms-5'>
            CV
            </button></a>
          </ul>
        </div>
    </div>
  </nav>
</header>

  )
}

export default Header
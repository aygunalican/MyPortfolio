import { useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import './assets/css/app.css'
import Services from './pages/Services'
import ExperienceEducation from './pages/ExperienceEducation'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Works from './pages/Works'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
   <Header />
   <Home /></div>
   <Services />
   <Works />
   <ExperienceEducation />
   <Skills />
   <Contact />
   <Footer />
    </>
  )
}

export default App

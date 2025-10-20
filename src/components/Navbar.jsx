import { useState } from 'react'
import Logo from '../assets/img/logo.png'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
  <div className='px-10'>
    <header className="site-header fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/85 border-b border-gray-200 dark:bg-[#101728]/90 dark:border-[#1c2740]">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <a href="#hero" className="navbar-brand flex items-center font-bold text-xl">
            <img 
              src={Logo}
              alt="Logo ILA Barry" 
              width="36" 
              height="36" 
              className="me-2 rounded-circle"
            />
            ILA Barry
          </a>

          <button 
            className="navbar-toggler md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon">☰</span>
          </button>

          <div className={`navbar-collapse ${isOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="navbar-nav flex flex-col md:flex-row md:items-center md:space-x-4 md:ms-auto">
              {['about', 'services', 'skills', 'projects', 'data-analysis', 'testimonials', 'contact'].map((item) => (
                <li key={item} className="nav-item">
                  <a 
                    href={`#${item}`} 
                    className="nav-link block py-2 md:py-0 font-semibold relative"
                    onClick={() => setIsOpen(false)}
                  >
                    {item === 'about' ? 'À propos' : 
                     item === 'services' ? 'Services' : 
                     item === 'skills' ? 'Compétences' : 
                     item === 'projects' ? 'Projets' : 
                     item === 'data-analysis' ? 'Data Analyst' : 
                     item === 'testimonials' ? 'Témoignages' : 'Contact'}
                  </a>
                </li>
              ))}
              <li className="nav-item md:ms-3 mt-2 md:mt-0">
                <button 
                  className="btn btn-sm btn-outline-light toggle-theme border border-gray-300 rounded p-2"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
  )
}

export default Navbar
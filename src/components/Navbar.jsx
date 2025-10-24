import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Code, Database, Linkedin, Github, Mail, MessageCirclePlus } from 'lucide-react'
import Logo from '../assets/img/logo.png'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)

      // Détection de la section active
      const sections = ['hero', 'about', 'services', 'skills', 'projects', 'data-analysis', 'testimonials', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'À propos' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#data-analysis', label: 'Data Analysis' },
    { href: '#testimonials', label: 'Témoignages' },
    { href: '#contact', label: 'Contact' }
  ]

  const professionalLinks = [
    { 
      icon: <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />, 
      href: "https://www.linkedin.com/in/ila-barry-259008343/",
      label: "LinkedIn"
    },
    { 
      icon: <Github className="w-3 h-3 sm:w-4 sm:h-4" />, 
      href: "https://github.com/Ilabarry",
      label: "GitHub"
    },
    { 
      icon: <Mail className="w-3 h-3 sm:w-4 sm:h-4" />, 
      href: "mailto:barryila35@gmail.com",
      label: "Email"
    },
    { 
      icon: <MessageCirclePlus className="w-3 h-3 sm:w-4 sm:h-4" />, 
      href: "https://wa.me/221783249424",
      label: "WhatsApp"
    }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/80 dark:border-gray-800/80' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-100/50 dark:border-gray-800/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        
        {/* Ligne principale avec max-w-full */}
        <div className="flex items-center justify-between py-2 sm:py-3 md:py-4 min-h-[56px] sm:min-h-[60px] w-full max-w-full">
          
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 max-w-full">
            <a 
              href="#hero" 
              className="flex items-center gap-2 sm:gap-3 group max-w-full"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={Logo}
                  alt="ILA Barry - Développeur Full-Stack & Analyste de Données" 
                  className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg border-2 border-white dark:border-gray-800"
                />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"></div>
              </div>
              
              {/* Texte du logo */}
              <div className="flex flex-col max-w-full">
                <span className="font-bold text-gray-900 dark:text-white text-base sm:text-lg md:text-xl leading-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  ILA Barry
                </span>
                
                {/* Badges compétences */}
                <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-600 dark:text-gray-400 font-medium mt-0.5 max-w-full">
                  {/* Version mobile compacte */}
                  <div className="sm:hidden flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 px-1.5 py-0.5 rounded-full">
                    <Code className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                    <span className="text-blue-700 dark:text-blue-300 text-xs">Dev</span>
                  </div>
                  
                  {/* Version desktop complète */}
                  <div className="hidden sm:flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                    <Code className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span className="text-blue-700 dark:text-blue-300 text-xs">Développeur</span>
                  </div>
                  
                  <div className="hidden sm:flex items-center gap-1 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded-full">
                    <Database className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                    <span className="text-purple-700 dark:text-purple-300 text-xs">Analyste</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-0 xl:space-x-1 flex-shrink-0 overflow-hidden max-w-full">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 xl:px-4 xl:py-2.5 text-sm font-semibold transition-all duration-300 rounded-lg xl:rounded-xl mx-0.5 xl:mx-1 group flex-shrink-0 ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-sm' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 xl:w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  )}
                  <div className={`absolute inset-0 rounded-lg xl:rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${isActive ? 'opacity-10' : ''}`}></div>
                </a>
              )
            })}
          </div>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0 overflow-hidden max-w-full">
            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800/50 rounded-xl lg:rounded-2xl p-1 border border-gray-200 dark:border-gray-700 flex-shrink-0">
              {professionalLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-lg lg:rounded-xl border border-transparent bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-blue-600 hover:text-white flex-shrink-0"
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Séparateur */}
            <div className="hidden lg:block w-px h-6 bg-gradient-to-b from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-600 flex-shrink-0"></div>

            {/* Bouton thème */}
            <button 
              onClick={toggleDarkMode}
              className="p-1.5 sm:p-2 rounded-lg lg:rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 group flex-shrink-0"
              aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Menu Mobile */}
          <div className="flex md:hidden items-center space-x-1 sm:space-x-2 flex-shrink-0 overflow-hidden max-w-full">
            {/* Bouton thème mobile */}
            <button 
              onClick={toggleDarkMode}
              className="p-1.5 sm:p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 flex-shrink-0"
              aria-label={darkMode ? 'Mode clair' : 'Mode sombre'}
            >
              {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

            {/* Bouton menu mobile */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 hover:shadow-md flex-shrink-0"
              aria-label="Menu"
            >
              {isOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 transform hover:rotate-180 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile Expandable */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 pt-4 pb-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl sm:rounded-2xl mt-2 mx-1 sm:mx-2 shadow-xl w-full max-w-full overflow-hidden">
            
            {/* Navigation mobile */}
            <div className="space-y-2 mb-6 px-3 sm:px-4 w-full">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 rounded-lg border-l-4 w-full ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border-blue-500 shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      {item.label}
                      {isActive && (
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      )}
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Réseaux sociaux mobile */}
            <div className="px-3 sm:px-4 w-full">
              <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 text-center uppercase tracking-wider">
                Réseaux Professionnels
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                {professionalLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 p-2 sm:p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 w-full"
                    aria-label={item.label}
                  >
                    {item.icon}
                    <span className="text-xs sm:text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
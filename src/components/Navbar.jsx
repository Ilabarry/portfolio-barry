import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Code, Database, Linkedin, Github, Mail, MessageCirclePlus } from 'lucide-react'
import Logo from '../assets/img/logo.png'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
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

  const socialLinks = [
    { 
      icon: <Linkedin className="w-4 h-4" />, 
      href: "https://www.linkedin.com/in/ila-barry-259008343/",
      label: "LinkedIn"
    },
    { 
      icon: <Github className="w-4 h-4" />, 
      href: "https://github.com/Ilabarry",
      label: "GitHub"
    },
    { 
      icon: <Mail className="w-4 h-4" />, 
      href: "mailto:barryila35@gmail.com",
      label: "Email"
    },
    { 
      icon: <MessageCirclePlus className="w-4 h-4" />, 
      href: "https://wa.me/221783249424",
      label: "WhatsApp"
    }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-gray-800' 
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-100/50 dark:border-gray-800/50'
    }`}>
      {/* Container principal avec gestion stricte des débordements */}
      <div className="w-full max-w-[100vw] overflow-hidden">
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Ligne principale - Layout optimisé pour mobile */}
          <div className="flex items-center justify-between py-3 min-h-[60px]">
            
            {/* Logo - Version ultra compacte */}
            <div className="flex items-center flex-shrink-0">
              <a 
                href="#hero" 
                className="flex items-center gap-2 group"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative flex-shrink-0">
                  <img 
                    src={Logo}
                    alt="ILA Barry" 
                    className="w-8 h-8 rounded-lg transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-bold text-gray-900 dark:text-white text-sm leading-tight">
                    ILA Barry
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <Code className="w-3 h-3" />
                    <span>Dev</span>
                    <Database className="w-3 h-3" />
                    <span>Analyste</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Navigation Desktop */}
            <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg mx-1 ${
                      isActive 
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>

            {/* Actions Desktop */}
            <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
              {/* Réseaux sociaux */}
              <div className="flex items-center space-x-1">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>

              {/* Séparateur */}
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-700"></div>

              {/* Bouton thème */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                aria-label={darkMode ? 'Mode clair' : 'Mode sombre'}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Menu Mobile - Boutons seulement */}
            <div className="flex lg:hidden items-center space-x-1 flex-shrink-0">
              {/* Bouton thème mobile */}
              <button 
                onClick={toggleDarkMode}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                aria-label={darkMode ? 'Mode clair' : 'Mode sombre'}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Bouton menu mobile */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                aria-label="Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Menu Mobile Expandable */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 pt-4 pb-4">
              {/* Navigation mobile */}
              <div className="space-y-2 mb-6">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                        isActive
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-4 border-blue-500'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                      }`}
                    >
                      {item.label}
                    </a>
                  )
                })}
              </div>

              {/* Réseaux sociaux mobile */}
              <div className="px-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium">Me suivre</p>
                <div className="flex space-x-3">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
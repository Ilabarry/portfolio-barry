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
    { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/ila-barry-259008343/", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/Ilabarry", label: "GitHub", color: "hover:bg-gray-900" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:barryila35@gmail.com", label: "Email", color: "hover:bg-red-500" },
    { icon: <MessageCirclePlus className="w-4 h-4" />, href: "https://wa.me/221783249424", label: "WhatsApp", color: "hover:bg-green-500" }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/95 shadow-sm border-b border-gray-100 dark:bg-gray-900/95 dark:border-gray-800'
          : 'backdrop-blur-lg bg-white/90 border-b border-gray-100/50 dark:bg-gray-900/90 dark:border-gray-800/50'
      }`}
    >
      <nav className="container mx-auto px-3 sm:px-6">
        {/* Ligne principale */}
        <div className="flex items-center justify-between py-2 sm:py-3 gap-2 sm:gap-4">
          {/* --- Logo --- */}
          <a href="#hero" className="flex items-center space-x-2 sm:space-x-3 group" onClick={() => setIsOpen(false)}>
            <div className="relative">
              <img
                src={Logo}
                alt="ILA Barry"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
                ILA Barry
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center">
                <Code className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                <span className="hidden xs:inline">Développeur</span>
                <Database className="w-2 h-2 sm:w-3 sm:h-3 mx-1" />
                <span className="hidden xs:inline">Analyste</span>
              </span>
            </div>
          </a>

          {/* --- Navigation Desktop --- */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-md font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-6 bg-blue-600 dark:bg-blue-400'
                        : 'bg-transparent group-hover:w-2 group-hover:bg-gray-400'
                    }`}
                  ></span>
                </a>
              )
            })}
          </div>

          {/* --- Actions Desktop --- */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-1">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 border rounded-lg text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 transition-all duration-300 ${item.color} hover:text-white hover:scale-105`}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Séparateur */}
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>

            {/* Bouton thème */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-sm"
              aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* --- Menu Mobile --- */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* --- Menu Mobile Expandable --- */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 mt-2 pb-5">
            <div className="flex flex-col space-y-1 pt-3">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg mx-1 flex items-center ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-3 ${
                        isActive ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    ></div>
                    {item.label}
                  </a>
                )
              })}

              {/* Réseaux sociaux mobile */}
              <div className="px-4 pt-5">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 text-center font-medium">
                  Réseaux sociaux
                </p>
                <div className="flex justify-center gap-2">
                  {socialLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className={`p-3 bg-gray-100 dark:bg-gray-800 border rounded-lg text-gray-600 dark:text-gray-400 transition-all duration-300 ${item.color} hover:text-white hover:scale-105`}
                      aria-label={item.label}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar

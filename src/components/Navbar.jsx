import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Code, Database, Linkedin, Github, Mail, MessageCirclePlus, Sparkles, Target, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
    { href: '#about', label: 'À propos', icon: <Target className="w-3 h-3" /> },
    { href: '#services', label: 'Services', icon: <Sparkles className="w-3 h-3" /> },
    { href: '#skills', label: 'Compétences', icon: <Code className="w-3 h-3" /> },
    { href: '#projects', label: 'Projets', icon: <BookOpen className="w-3 h-3" /> },
    { href: '#data-analysis', label: 'Data Analysis', icon: <Database className="w-3 h-3" /> },
    { href: '#contact', label: 'Contact', icon: <MessageCirclePlus className="w-3 h-3" /> }
  ]

  const professionalLinks = [
    { 
      icon: <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />, 
      href: "https://www.linkedin.com/in/ila-barry-259008343/",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <Github className="w-3 h-3 sm:w-4 sm:h-4" />, 
      href: "https://github.com/Ilabarry",
      label: "GitHub",
      color: "hover:bg-gray-800"
    },
    { 
      icon: <Mail className="w-3 h-3 sm:w-4 sm:h-4" />, 
      href: "mailto:barryila35@gmail.com",
      label: "Email",
      color: "hover:bg-red-600"
    },
    { 
      icon: <MessageCirclePlus className="w-3 h-3 sm:w-4 sm:h-4" />, 
      href: "https://wa.me/221783249424",
      label: "WhatsApp",
      color: "hover:bg-green-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-800/50' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        {/* Ligne principale */}
        <div className="flex items-center justify-between py-3 md:py-4 min-h-[70px]">
          
          {/* Logo avec animation */}
          <motion.div 
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a 
              href="#hero" 
              className="flex items-center gap-3 group"
              onClick={() => setIsOpen(false)}
            >
              {/* Logo avec effet de lueur */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur-md opacity-0 group-hover:opacity-70"
                  transition={{ duration: 0.3 }}
                />
                <img 
                  src={Logo}
                  alt="ILA Barry - Développeur Full-Stack & Analyste de Données" 
                  className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl border-2 border-white dark:border-gray-800 shadow-lg"
                />
                <motion.div 
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              
              {/* Texte du logo */}
              <div className="flex flex-col">
                <motion.span 
                  className="font-bold text-gray-900 dark:text-white text-xl md:text-2xl leading-tight bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  ILA Barry
                </motion.span>
                
                {/* Badges compétences */}
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
                  <motion.div 
                    className="flex items-center gap-1 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full border border-blue-100 dark:border-blue-800"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Code className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span className="text-blue-700 dark:text-blue-300 text-xs">Full-Stack</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-1 bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-full border border-purple-100 dark:border-purple-800"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Database className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                    <span className="text-purple-700 dark:text-purple-300 text-xs">Data Analyst</span>
                  </motion.div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Navigation Desktop */}
          <motion.div 
            className="hidden lg:flex items-center space-x-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-xl group flex items-center gap-2 ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-lg' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <span className={`transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                  
                  {/* Indicateur actif animé */}
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Effet de fond au survol */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${isActive ? 'opacity-10' : ''}`} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Actions Desktop */}
          <motion.div 
            className="hidden md:flex items-center space-x-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Réseaux sociaux avec animations */}
            <motion.div 
              className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-1 border border-gray-200 dark:border-gray-700 shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              {professionalLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-xl border border-transparent bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:text-white shadow-sm ${item.color}`}
                  aria-label={item.label}
                  title={item.label}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Séparateur */}
            <motion.div 
              className="w-px h-6 bg-gradient-to-b from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-600"
              variants={itemVariants}
            />

            {/* Bouton thème avec animation */}
            <motion.button 
              onClick={toggleDarkMode}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:shadow-lg transition-all duration-300 group shadow-sm"
              aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </motion.button>
          </motion.div>

          {/* Menu Mobile */}
          <motion.div 
            className="flex md:hidden items-center space-x-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Bouton thème mobile */}
            <motion.button 
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 shadow-sm"
              aria-label={darkMode ? 'Mode clair' : 'Mode sombre'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Bouton menu mobile */}
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 hover:shadow-lg shadow-sm"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Menu Mobile Expandable */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl mt-2 shadow-2xl overflow-hidden"
            >
              <motion.div 
                className="space-y-1 p-4"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      variants={itemVariants}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl border-l-4 ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 border-blue-500 shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <span className={`transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                        {item.icon}
                      </span>
                      {item.label}
                      {isActive && (
                        <motion.div 
                          className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ml-auto"
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </motion.a>
                  )
                })}

                {/* Réseaux sociaux mobile */}
                <motion.div 
                  className="pt-4 border-t border-gray-200 dark:border-gray-700"
                  variants={itemVariants}
                >
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 text-center uppercase tracking-wider">
                    Me contacter
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {professionalLinks.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-white shadow-sm ${item.color}`}
                        aria-label={item.label}
                      >
                        {item.icon}
                        <span className="text-sm font-medium">{item.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* CTA mobile */}
                <motion.a
                  href="#contact"
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg mt-4"
                >
                  <MessageCirclePlus className="w-4 h-4" />
                  Discuter de votre projet
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Navbar
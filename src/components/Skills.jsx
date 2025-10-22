import { useEffect, useRef, useState } from 'react'
import { Code, Database, BarChart3, Cpu, Palette, Server, Target, Zap } from "lucide-react"

const SkillBar = ({ name, percentage, delay }) => {
  const [isVisible, setIsVisible] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.5 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current)
      }
    }
  }, [delay])

  return (
    <div className="skill mb-4 sm:mb-6" ref={barRef}>
      <div className="flex justify-between items-center mb-2 sm:mb-3">
        <span className="font-semibold text-gray-800 text-xs sm:text-sm">{name}</span>
        <span className="text-blue-600 font-bold text-xs sm:text-sm">{isVisible ? `${percentage}%` : '0%'}</span>
      </div>
      <div className="relative">
        <div className="progress bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
          <div 
            className="progress-bar bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 h-full transition-all duration-1000 ease-out rounded-full"
            style={{ 
              width: isVisible ? `${percentage}%` : '0%'
            }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="h-0.5 sm:h-1 bg-white/30 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isVisible ? `${percentage}%` : '0%'
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Frontend ",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "HTML/CSS", percentage: 95, delay: 100 },
        { name: "JavaScript", percentage: 85, delay: 200 },
        { name: "React.js", percentage: 80, delay: 300 },
        { name: "Bootstrap", percentage: 95, delay: 400 },
        { name: "Tailwind CSS", percentage: 75, delay: 500 }
      ],
      delay: 100
    },
    {
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Backend & Bases de données",
      color: "from-green-500 to-green-600",
      skills: [
        { name: "PHP/Laravel", percentage: 90, delay: 150 },
        { name: "Node.js/Express", percentage: 75, delay: 250 },
        { name: "MySQL", percentage: 90, delay: 350 },
        { name: "MongoDB", percentage: 70, delay: 450 },
        { name: "PostgreSQL", percentage: 75, delay: 550 }
      ],
      delay: 200
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Outils & Data Analysis",
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Git/GitHub", percentage: 85, delay: 200 },
        { name: "Excel Avancé", percentage: 95, delay: 300 },
        { name: "Power BI", percentage: 50, delay: 400 },
        { name: "Power Query/Pivot", percentage: 85, delay: 500 },
        { name: "VS Code", percentage: 95, delay: 600 }
      ],
      delay: 300
    }
  ]

  const expertiseAreas = [
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Développement Web",
      description: "Applications modernes et responsives",
      delay: 100
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Bases de Données",
      description: "Optimisation et modélisation",
      delay: 200
    },
    {
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Architecture Logicielle",
      description: "Solutions scalables et maintenables",
      delay: 300
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analyse de Données",
      description: "Insights et visualisations",
      delay: 400
    }
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center mb-12 sm:mb-16">
          <span 
            data-aos="fade-down"
            className="text-blue-600 font-semibold text-base sm:text-lg mb-2 block"
          >
            Mes Compétences
          </span>
          <h2 
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Expertise <span className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">Technique</span>
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Un ensemble de compétences techniques diversifiées pour répondre à tous vos besoins en développement et analyse de données.
          </p>
        </div>

        {/* Domaines d'expertise */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={area.delay}
              className="text-center group p-3 sm:p-4"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <div className="text-white">
                  {area.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{area.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-tight">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={category.delay}
              className="group"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-4 sm:p-6 h-full">
                {/* En-tête de la catégorie */}
                <div className={`bg-gradient-to-r ${category.color} rounded-lg sm:rounded-xl p-3 sm:p-4 text-white mb-4 sm:mb-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-1 sm:p-2 bg-white/20 rounded sm:rounded-lg mr-2 sm:mr-3">
                        {category.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold">{category.title}</h3>
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm">
                      {category.skills.length} compétences
                    </div>
                  </div>
                </div>

                {/* Barres de compétences */}
                <div className="space-y-1 sm:space-y-2">
                  {category.skills.map((skill, idx) => (
                    <SkillBar 
                      key={idx}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={skill.delay}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section niveau d'expertise */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Niveaux d'Expertise</h3>
            <p className="text-blue-200 max-w-2xl mx-auto text-sm sm:text-base">
              Une progression constante dans l'acquisition et la maîtrise des technologies modernes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { level: "Expert", color: "from-green-500 to-green-600", range: "90-100%", count: 4, delay: 100 },
              { level: "Avancé", color: "from-blue-500 to-blue-600", range: "75-89%", count: 6, delay: 200 },
              { level: "Intermédiaire", color: "from-yellow-500 to-yellow-600", range: "60-74%", count: 3, delay: 300 },
              { level: "Débutant", color: "from-gray-500 to-gray-600", range: "0-59%", count: 2, delay: 400 }
            ].map((item, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                className="text-center p-2 sm:p-3"
              >
                <div className={`bg-gradient-to-r ${item.color} rounded-lg sm:rounded-xl p-3 sm:p-4 mb-2 sm:mb-3`}>
                  <div className="text-xl sm:text-2xl font-bold">{item.count}</div>
                  <div className="text-xs sm:text-sm opacity-90">{item.level}</div>
                </div>
                <p className="text-blue-200 text-xs sm:text-sm">{item.range}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-8 sm:mt-12"
        >
          <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-200">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Ces compétences vous intéressent ?</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Discutons de la manière dont je peux mettre mon expertise au service de votre projet.
            </p>
            <a 
              href="#contact" 
              className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold border-b-4 hover:border-b-blue-700 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <span className="mr-2 sm:mr-3">💬</span>
              Discuter de mon projet
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
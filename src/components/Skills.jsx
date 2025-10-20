import { useEffect, useRef, useState } from 'react'

const SkillBar = ({ name, percentage }) => {
  const [isVisible, setIsVisible] = useState(false)
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
  }, [])

  return (
    <div className="skill mb-4" ref={barRef}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="progress-bar bg-blue-700 h-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${percentage}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "HTML/CSS", percentage: 95 },
        { name: "JavaScript", percentage: 85 },
        { name: "React.js", percentage: 80 },
        { name: "Bootstrap", percentage: 95 },
        { name: "Tailwind CSS", percentage: 75 }
      ]
    },
    {
      title: "Backend & Bases de données",
      skills: [
        { name: "PHP/Laravel", percentage: 90 },
        { name: "Node.js/Express", percentage: 75 },
        { name: "MySQL", percentage: 90 },
        { name: "MongoDB", percentage: 70 },
        { name: "PostgreSQL", percentage: 75 }
      ]
    },
    {
      title: "Outils & Data Analysis",
      skills: [
        { name: "Git/GitHub", percentage: 85 },
        { name: "Excel Avancé", percentage: 95 },
        { name: "Power BI", percentage: 65 },
        { name: "Power Query/Pivot", percentage: 85 },
        { name: "VS Code", percentage: 95 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-pad bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-black text-center text-primary mb-12">
          Compétences
        </h2>

        <div className="row grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-4">
              <div className="card-pro h-full   border-b-4 hover:border-b-blue-700">
                <h3 className="h6 uppercase text-primary font-bold mb-6">{category.title}</h3>
                {category.skills.map((skill, idx) => (
                  <SkillBar 
                    key={idx}
                    name={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
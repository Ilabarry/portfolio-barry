const Projects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Gestion de Bibliothèque et Événements",
      period: "Avril - Mai 2025",
      description: "Système complet de gestion de bibliothèque avec réservations automatisées et gestion d'événements culturels.",
      technologies: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
      githubLink: "https://github.com/Ilabarry/Laravel-gestion_bibbliotheque-evenement",
      demoLink: null
    },
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Sénégal Transport",
      period: "Nov 2024 - Jan 2025",
      description: "Plateforme de réservation de transport inter-régional avec système de paiement en ligne sécurisé.",
      technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL", "PHPMailer"],
      githubLink: "https://github.com/Ilabarry/Transport",
      demoLink: null
    },
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Plateforme de Partage de Code",
      period: "Août 2025 - Hackathon",
      description: "Plateforme collaborative permettant aux développeurs de partager, découvrir et réutiliser des extraits de code.",
      technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
      githubLink: null,
      demoLink: "https://codeh24.infinityfreeapp.com"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "FADJ-MA - Plateforme Médcines",
      period: "Décembre 2024",
      description: "Site web moderne pour pemettre aux medcins de d'ajouter et visualiser des medicamments",
      technologies: ["React", "Tailwind CSS", "Laravel", "Vite"],
      githubLink: "https://github.com/Ilabarry/fadj-ma",
      demoLink: "https://fadj-ma.vercel.app"
    },
    {
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Portfolio Personnel",
      period: "Décembre 2024",
      description: "Portfolio développé avec React et Tailwind CSS présentant mes compétences et projets.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      githubLink: "https://github.com/Ilabarry/portfolio-barry",
      demoLink: "https://portfolio-barry-rose.vercel.app/"
    }
  ]

  return (
    <section id="projects" className="section-pad py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-black text-center text-primary mb-4">
          Mes Projets Récents
        </h2>
        <p className="text-center text-muted mb-12">Développement d'applications web et solutions digitales</p>

        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card-pro h-full border-b-4 hover:border-b-blue-700 transition-all duration-300">
                <div className="project-thumb h-48 overflow-hidden rounded-xl mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="project-date text-sm text-muted mb-2 flex items-center">
                  <span className="me-1">📅</span> {project.period}
                </div>
                <h3 className="h5 font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-muted text-sm mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="badge-tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn border border-gray-300 text-gray-700 flex-1 py-2 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="me-2">🐙</span>
                      Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn border border-primary text-primary flex-1 py-2 rounded-lg font-medium flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="me-2">👁️</span>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon CineCritique - Projet spécial */}
        <div className="row mt-12">
          <div className="col-12">
            <div className="card-pro bg-gradient-to-r from-primary to-blue-600 text-black border-x-4 hover:border-x-blue-400">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="md:w-2/3">
                  <h3 className="h4 font-bold mb-2">Hackathon CineCritique</h3>
                  <p className="mb-0 opacity-90">Plateforme communautaire de découverte et notation de films utilisant l'API TMDb</p>
                  <div className="mt-3">
                    {["React.js", "Node.js", "PostgreSQL", "Tailwind CSS"].map((tech, idx) => (
                      <span key={idx} className="badge bg-white text-primary me-2 px-3 py-1 rounded-full text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/3 md:text-right">
                  <a 
                    href="https://github.com/KhadijaBachir/ProjetCineCritique/tree/main/frontend/project" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn bg-white text-primary px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-gray-100 transition-colors"
                  >
                    <span className="me-2">🐙</span>Voir le frontend
                  </a>

                  <a 
                    href="https://github.com/diallohouleymatou/cinecritique" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn bg-white text-primary px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-gray-100 transition-colors"
                  >
                    <span className="me-2">🐙</span>Voir le backend
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section statistiques */}
        {/* <div className="row mt-12">
          <div className="col-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">{projects.length}+</div>
                <div className="text-sm text-gray-600">Projets Réalisés</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Technologies Maîtrisées</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                <div className="text-sm text-gray-600">Projets React</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Projets PHP</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Projects
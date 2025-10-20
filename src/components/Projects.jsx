import { ExternalLink, Github, Calendar, Code, Eye, Star, FolderOpen } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Gestion de Bibliothèque et Événements",
      period: "Avril - Mai 2025",
      description: "Système complet de gestion de bibliothèque avec réservations automatisées et gestion d'événements culturels.",
      technologies: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
      githubLink: "https://github.com/Ilabarry/Laravel-gestion_bibbliotheque-evenement",
      demoLink: null,
      category: "Full-Stack",
      featured: true,
      delay: 100
    },
    {
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Sénégal Transport",
      period: "Nov 2024 - Jan 2025",
      description: "Plateforme de réservation de transport inter-régional avec système de paiement en ligne sécurisé.",
      technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL", "PHPMailer"],
      githubLink: "https://github.com/Ilabarry/Transport",
      demoLink: null,
      category: "Full-Stack",
      featured: false,
      delay: 200
    },
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Plateforme de Partage de Code",
      period: "Août 2025 - Hackathon",
      description: "Plateforme collaborative permettant aux développeurs de partager, découvrir et réutiliser des extraits de code.",
      technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
      githubLink: null,
      demoLink: "https://codeh24.infinityfreeapp.com",
      category: "Full-Stack",
      featured: false,
      delay: 300
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "FADJ-MA - Plateforme Médicaments",
      period: "Septembre 2025",
      description: "Site web moderne permettant aux médecins d'ajouter et visualiser des médicaments avec une interface intuitive.",
      technologies: ["React", "Tailwind CSS", "Laravel", "Vite"],
      githubLink: "https://github.com/Ilabarry/fadj-ma",
      demoLink: "https://fadj-ma.vercel.app",
      category: "Full-Stack",
      featured: true,
      delay: 400
    },
    {
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "Portfolio Personnel",
      period: "Octobre 2025",
      description: "Portfolio développé avec React et Tailwind CSS présentant mes compétences et projets de manière professionnelle.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      githubLink: "https://github.com/Ilabarry/portfolio-barry",
      demoLink: "https://portfolio-barry-rose.vercel.app/",
      category: "Frontend",
      featured: false,
      delay: 500
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span 
            data-aos="fade-down"
            className="text-blue-600 font-semibold text-lg mb-2 block"
          >
            Mon Portfolio
          </span>
          <h2 
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Projets <span className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">Récents</span>
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez une sélection de mes réalisations en développement web full-stack et applications modernes.
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                {/* Image du projet */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.category === "Frontend" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Contenu du projet */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* En-tête */}
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.period}
                  </div>

                  {/* Titre et description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-2 px-4 rounded-lg font-semibold border-b-4 hover:border-b-blue-700 transition-all duration-300 flex items-center justify-center text-sm"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center text-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projet spécial - Hackathon CineCritique */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="lg:w-2/3">
                <div className="flex items-center mb-3">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                    🏆 Hackathon
                  </span>
                  <span className="text-blue-200 text-sm">Projet Collaboratif</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">CineCritique</h3>
                <p className="text-blue-100 text-lg mb-4">
                  Plateforme communautaire de découverte et notation de films utilisant l'API TMDb
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "API REST"].map((tech, idx) => (
                    <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/3 flex flex-col gap-3">
                <a 
                  href="https://github.com/KhadijaBachir/ProjetCineCritique/tree/main/frontend/project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Frontend
                </a>
                <a 
                  href="https://github.com/diallohouleymatou/cinecritique" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Backend
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: projects.length, label: "Projets Réalisés", color: "blue", delay: 100 },
            { number: 10, label: "Technologies Maîtrisées", color: "green", delay: 200 },
            { number: 2, label: "Projets React", color: "purple", delay: 300 },
            { number: 3, label: "Projets PHP", color: "orange", delay: 400 }
          ].map((stat, index) => (
            <div 
              key={index}
              data-aos="flip-up"
              data-aos-delay={stat.delay}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
                {stat.number}+
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Intéressé par mon travail ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discutons de la manière dont je peux vous aider à concrétiser votre prochain projet digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-8 py-4 rounded-lg font-semibold border-b-4 hover:border-b-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <span className="mr-3">💬</span>
                Discuter d'un projet
              </a>
              <a 
                href="https://github.com/Ilabarry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Github className="w-5 h-5 mr-3" />
                Voir GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
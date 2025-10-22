import { Code, Database, Zap, ArrowRight, CheckCircle, Mail, Clock, Users, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Développement Full-Stack",
      description: "Solutions web complètes et performantes adaptées à vos besoins métiers",
      features: [
        "Applications React/Node.js modernes",
        "Sites vitrines et e-commerce",
        "Systèmes de gestion (CRM/back-office)",
        "APIs RESTful et intégrations",
        "Bases de données optimisées",
        "Interfaces utilisateur intuitives"
      ],
      technologies: ["React", "Node.js", "PHP", "Laravel", "MySQL", "MongoDB", "PostgreSQL"],
      price: "Sur devis personnalisé",
      delay: 100
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analyse & Automatisation Data",
      description: "Transformez vos données brutes en insights actionnables",
      features: [
        "Tableaux de bord interactifs (Excel / Power BI)",
        "Automatisation de rapports Excel",
        "Migration Excel → Base de données",
        "Analyse de données avancée",
        "Visualisations personnalisées",
        "Processus ETL optimisés"
      ],
      technologies: ["Power BI", "Excel", "Power Query", "Power Pivot"],
      price: "Sur devis personnalisé",
      delay: 200
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Optimisation & Maintenance",
      description: "Améliorez les performances de vos applications existantes",
      features: [
        "Audit technique complet",
        "Optimisation des performances",
        "Corrections de bugs urgents",
        "Mise à jour de sécurité",
        "Formation utilisateurs",
        "Support technique continu"
      ],
      technologies: ["Performance", "Sécurité", "Debugging", "DevOps"],
      price: "Forfait journalier disponible",
      delay: 300
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center mb-12 sm:mb-16">
          <span 
            data-aos="fade-down"
            className="text-blue-600 font-semibold text-base sm:text-lg mb-2 block"
          >
            Mes Services
          </span>
          <h2 
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Solutions <span className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">Digitales</span> Sur Mesure
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Je propose des services complets de développement et d'analyse de données pour transformer 
            vos idées en solutions concrètes et performantes.
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden h-full flex flex-col">
                {/* En-tête de la carte */}
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 sm:p-6 text-white">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-blue-200 text-xs sm:text-sm">À partir de</span>
                      <div className="text-base sm:text-lg font-bold">{service.price}</div>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Corps de la carte */}
                <div className="p-4 sm:p-6 flex-1">
                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-3">TECHNOLOGIES UTILISÉES</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Fonctionnalités */}
                  <div className="space-y-2 sm:space-y-3">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-3">CE QUE JE LIVRE</h4>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bouton d'action */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                    <a 
                      href="#contact" 
                      className="group w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold border-b-4 hover:border-b-blue-600 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                    >
                      Discuter du projet
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section processus */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-200"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Mon Processus de Travail</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Une méthodologie éprouvée pour garantir la réussite de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Analyse de vos besoins et objectifs",
                icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
                delay: 100
              },
              {
                step: "02",
                title: "Conception",
                description: "Définition des spécifications techniques",
                icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
                delay: 200
              },
              {
                step: "03",
                title: "Développement",
                description: "Implémentation avec tests continus",
                icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
                delay: 300
              },
              {
                step: "04",
                title: "Livraison",
                description: "Déploiement et support post-livraison",
                icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
                delay: 400
              }
            ].map((step, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={step.delay}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors">
                    <div className="text-blue-600 group-hover:text-white">
                      {step.icon}
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden sm:block absolute top-6 sm:top-8 left-full w-full h-0.5 bg-blue-200 -translate-x-1/2"></div>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{step.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-8 sm:mt-12"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prêt à démarrer votre projet ?</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Discutons de votre vision et établissons un plan d'action personnalisé pour concrétiser vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-blue-700 px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <span className="mr-2 sm:mr-3">📅</span>
                Planifier un appel découverte
              </a>
              <a 
                href="mailto:barryila35@gmail.com" 
                className="border-2 border-white text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Envoyer un email
              </a>
            </div>
            <p className="text-blue-200 text-xs sm:text-sm mt-3 sm:mt-4">
              Réponse garantie sous 24 heures
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
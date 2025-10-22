import { BarChart3, Download, Calendar, Target, Database, Lightbulb, ArrowRight, Zap, TrendingUp } from "lucide-react";

const DataAnalysis = () => {
  const dataProjects = [
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analyse des Clients Télécom",
      period: "Avril 2025 - Formation Force-N Sénégal",
      description: "Étude complète du comportement client et analyse du taux de désabonnement dans le secteur des télécommunications",
      objective: "Identifier les facteurs influençant le désabonnement des clients et proposer des stratégies de rétention efficaces.",
      methodologies: ["Nettoyage de données", "Analyse exploratoire", "Visualisation avancée", "Tableaux de bord interactifs"],
      indicators: [
        "Taux de désabonnement global et par segment client",
        "Impact des services additionnels sur la fidélisation",
        "Corrélation entre méthode de paiement et taux de rétention",
        "Comportement des clients seniors vs jeunes actifs",
        "Analyse de la valeur vie client (LTV)"
      ],
      tools: ["Excel Avancé", "Power Query", "Power Pivot", "Tableaux Croisés Dynamiques", "DAX"],
      results: ["+15% de rétention client", "Identification de 3 segments critiques", "Recommandations actionnables"],
      downloadLink: "/donnees/projet Telco(Récupération automatique).xlsx",
      delay: 100
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Étude de la Chaine de Valeur Typha",
      period: "Août 2025 - Mission Freelance",
      description: "Analyse socio-économique approfondie dans l'espace OMVS (Mauritanie et Sénégal)",
      objective: "Évaluer la rentabilité économique et les impacts environnementaux des activités liées à la valorisation du Typha.",
      methodologies: ["Enquêtes terrain", "Traitement questionnaire", "Analyse statistique", "Recommandations stratégiques"],
      indicators: [
        "Niveau de connaissance des populations sur le Typha",
        "Rentabilité économique des activités de valorisation",
        "Impacts environnementaux et sociaux mesurables",
        "Stratégies de gestion durable et valorisation",
        "Perspectives de développement économique"
      ],
      tools: ["Excel Avancé", "Power Query", "Formules complexes", "Tableaux de synthèse", "Analyse SWOT"],
      results: ["Cartographie complète de la chaine de valeur", "Identification de 5 opportunités de marché", "Plan d'action priorisé"],
      downloadLink: "/donnees/Traitement de données OMVS cas de la Mauritanie et du Sénégal.xlsx",
      delay: 200
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Compréhension du Besoin",
      description: "Analyse approfondie de vos objectifs métier et questions stratégiques",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      delay: 100
    },
    {
      step: "02",
      title: "Collecte & Nettoyage",
      description: "Acquisition et préparation rigoureuse des données pour l'analyse",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
      delay: 200
    },
    {
      step: "03",
      title: "Exploration & Modélisation",
      description: "Identification des tendances, patterns et corrélations significatives",
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      delay: 300
    },
    {
      step: "04",
      title: "Visualisation & Insights",
      description: "Présentation claire des résultats et recommandations actionnables",
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      delay: 400
    }
  ];

  return (
    <section id="data-analysis" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center mb-12 sm:mb-16">
          <span 
            data-aos="fade-down"
            className="text-blue-600 font-semibold text-base sm:text-lg mb-2 block"
          >
            Expertise Data
          </span>
          <h2 
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Analyse de <span className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">Données</span>
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4"
          >
            Transformez vos données brutes en insights stratégiques pour une prise de décision éclairée et performante.
          </p>
        </div>

        {/* Grille des projets data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {dataProjects.map((project, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                {/* En-tête du projet */}
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4 sm:p-6 text-white">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center">
                      <div className="p-2 sm:p-3 bg-white/20 rounded-lg sm:rounded-xl mr-3 sm:mr-4">
                        {project.icon}
                      </div>
                      <div>
                        <div className="flex items-center text-blue-200 text-xs sm:text-sm mb-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          {project.period}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Corps du projet */}
                <div className="p-4 sm:p-6">
                  {/* Objectif */}
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                    <div className="flex items-center mb-1 sm:mb-2">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-1 sm:mr-2" />
                      <h4 className="font-semibold text-blue-900 text-sm sm:text-base">Objectif Principal</h4>
                    </div>
                    <p className="text-blue-800 text-xs sm:text-sm">{project.objective}</p>
                  </div>

                  {/* Méthodologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                      <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-1 sm:mr-2" />
                      Méthodologie Appliquée
                    </h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.methodologies.map((method, idx) => (
                        <span 
                          key={idx}
                          className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Indicateurs analysés */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Indicateurs Clés Analysés</h4>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                      {project.indicators.map((indicator, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                          {indicator}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outils et résultats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Outils Utilisés</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.tools.map((tool, idx) => (
                          <span 
                            key={idx}
                            className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Résultats Obtenus</h4>
                      <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-gray-100">
                    <a 
                      href={project.downloadLink} 
                      download
                      className="flex-1 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold border-b-4 hover:border-b-blue-700 transition-all duration-300 flex items-center justify-center text-xs sm:text-sm"
                    >
                      <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Télécharger le rapport
                    </a>
                    <a 
                      href="#contact" 
                      className="flex-1 border border-blue-600 text-blue-600 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center text-xs sm:text-sm"
                    >
                      <span className="mr-1 sm:mr-2">💬</span>
                      Demander une analyse
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Processus d'analyse */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-12 sm:mb-16"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Mon Processus d'Analyse</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Une méthodologie structurée pour garantir des résultats précis et actionnables
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={step.delay}
                className="text-center group p-3"
              >
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors">
                    <div className="text-blue-600 group-hover:text-white">
                      {step.icon}
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden sm:block absolute top-6 sm:top-8 left-full w-full h-0.5 bg-blue-200 -translate-x-1/2"></div>
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{step.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-tight">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Prêt à transformer vos données ?</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Discutons de vos besoins en analyse de données et établissons ensemble une stratégie pour extraire le maximum de valeur de vos informations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-blue-700 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <span className="mr-2 sm:mr-3">📅</span>
                Planifier un appel découverte
              </a>
              <a 
                href="mailto:barryila35@gmail.com" 
                className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
              >
                <span className="mr-2 sm:mr-3">📊</span>
                Demander un devis
              </a>
            </div>
            <p className="text-blue-200 text-xs sm:text-sm mt-3 sm:mt-4">
              Premiers insights sous 48 heures pour vos projets data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalysis;
const DataAnalysis = () => {
  const dataProjects = [
    {
      icon: "📱",
      title: "Analyse des Clients Télécom",
      period: "Avril 2025 - Formation Force-N Sénégal",
      description: "Étude complète du comportement client et analyse du taux de désabonnement",
      objective: "Identifier les facteurs influençant le désabonnement des clients et proposer des stratégies de rétention.",
      methodologies: ["Nettoyage de données", "Analyse exploratoire", "Visualisation", "Tableaux de bord"],
      indicators: [
        "Taux de désabonnement global et par segment",
        "Impact des services additionnels sur la fidélité",
        "Corrélation entre méthode de paiement et rétention",
        "Comportement des clients seniors vs jeunes",
        "Analyse de la valeur vie client"
      ],
      tools: ["Excel Avancé", "Power Query", "Power Pivot", "Tableaux Croisés Dynamiques"],
      downloadLink: "/donnees/projet Telco(Récupération automatique).xlsx"
    },
    {
      icon: "🌳",
      title: "Étude de la Chaine de Valeur Typha",
      period: "Août 2025 - Mission Freelance",
      description: "Analyse socio-économique dans l'espace OMVS (Mauritanie et Sénégal)",
      objective: "Évaluer la rentabilité et les impacts des activités liées à la valorisation du Typha.",
      methodologies: ["Enquêtes terrain", "Traitement questionnaire", "Analyse statistique", "Recommandations"],
      indicators: [
        "Connaissances des populations sur le Typha",
        "Rentabilité économique des activités",
        "Impacts environnementaux et sociaux",
        "Stratégies de gestion et valorisation",
        "Perspectives de développement"
      ],
      tools: ["Excel Avancé", "Power Query", "Formules complexes", "Tableaux de synthèse"],
      downloadLink: "/donnees/Traitement de données OMVS cas de la Mauritanie et du Sénégal.xlsx"
    }
  ]

  return (
    <section id="data-analysis" className="section-pad bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-black text-center text-primary mb-4">
          Analyse de Données
        </h2>
        <p className="text-center text-muted mb-12">Transformez vos données brutes en insights actionnables</p>

        <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dataProjects.map((project, index) => (
            <div key={index} className="col-lg-6">
              <div className="card-pro h-full hover:translate-y-[-5px] transition-transform border-l-4 border-l-blue-700">
                <div className="data-project-thumb h-32 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-4xl rounded-t-2xl">
                  {project.icon}
                </div>
                <div className="card-body p-6">
                  <div className="project-date text-sm text-muted mb-3 flex items-center">
                    <span className="me-1">📅</span> {project.period}
                  </div>
                  <h3 className="h4 font-bold mb-2">{project.title}</h3>
                  <p className="text-muted mb-4">{project.description}</p>
                  
                  <div className="analysis-highlight bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-primary mb-4">
                    <h5 className="h6 font-semibold">Objectif principal</h5>
                    <p className="mb-0 text-sm">{project.objective}</p>
                  </div>
                  
                  <h5 className="h6 font-semibold mt-6 mb-3">Méthodologie</h5>
                  <div className="mb-4">
                    {project.methodologies.map((method, idx) => (
                      <span key={idx} className="methodology-badge inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-xs mr-2 mb-2 border border-blue-200">
                        {method}
                      </span>
                    ))}
                  </div>
                  
                  <h5 className="h6 font-semibold mb-3">Indicateurs clés analysés</h5>
                  <ul className="list-checked text-sm mb-4">
                    {project.indicators.map((indicator, idx) => (
                      <li key={idx}>{indicator}</li>
                    ))}
                  </ul>
                  
                  <h5 className="h6 font-semibold mb-3">Outils utilisés</h5>
                  <div className="mb-6">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="badge-tech">
                        {tool}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={project.downloadLink} 
                      download
                      className="btn border border-primary text-primary px-4 py-2 rounded-lg font-medium flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white transition-colors"
                    >
                      <span className="me-2">📥Télécharger le rapport</span>
                    </a>
                    <a 
                      href="#contact" 
                      className="btn bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <span className="me-2">ℹ️ Demande similaire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row mt-12">
          <div className="col-lg-8 mx-auto">
            <div className="card-pro bg-primary border-x-4 hover:border-x-blue-700 text-center py-8">
              <h3 className="h4 font-bold mb-4">Besoin d'une analyse de données sur mesure?</h3>
              <p className="mb-6">Je transforme vos données brutes en insights actionnables pour une meilleure prise de décision.</p>
              <a 
                href="#contact" 
                className="btn bg-gray-200 text-primary px-6 py-3 rounded-lg font-medium inline-flex items-center hover:bg-gray-100"
              >
                <span className="me-2">📅</span>Planifier un appel découverte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataAnalysis
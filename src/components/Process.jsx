import { Target, Database, BarChart3, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Définition des Objectifs",
      description: "Analyse approfondie de vos besoins métier et définition des KPI clés",
      details: [
        "Identification des problématiques business",
        "Définition des objectifs mesurables",
        "Cadrage du périmètre d'analyse",
        "Validation des livrables attendus"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Collecte & Préparation",
      description: "Acquisition et nettoyage rigoureux des données pour garantir leur qualité",
      details: [
        "Collecte des données multi-sources",
        "Nettoyage et standardisation",
        "Gestion des valeurs manquantes",
        "Validation de la cohérence des données"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analyse & Modélisation",
      description: "Exploration approfondie et modélisation pour extraire les insights",
      details: [
        "Analyse exploratoire des données",
        "Identification des patterns et corrélations",
        "Modélisation statistique avancée",
        "Tests d'hypothèses business"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Visualisation & Insights",
      description: "Présentation claire des résultats et recommandations actionnables",
      details: [
        "Création de dashboards interactifs",
        "Visualisations percutantes",
        "Recommandations stratégiques",
        "Plan d'action priorisé"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const methodologies = [
    {
      title: "Approche Data-Driven",
      description: "Décisions basées sur l'analyse rigoureuse des données plutôt que sur l'intuition"
    },
    {
      title: "Itérations Rapides",
      description: "Cycles de développement courts avec retours réguliers pour s'ajuster aux besoins"
    },
    {
      title: "Transparence Totale",
      description: "Communication ouverte sur les méthodes, résultats et limitations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div 
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg mb-2 block">Ma Méthodologie</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Processus d'<span className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">Analyse</span> Structuré
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche méthodique et éprouvée pour transformer vos données en décisions stratégiques éclairées.
          </p>
        </div>

        {/* Étapes du processus */}
        <div className="relative mb-20">
          {/* Ligne de connexion animée */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="200"
            className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 transform -translate-y-1/2 z-0"
          ></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 text-center h-full transform hover:-translate-y-2">
                  {/* Numéro d'étape */}
                  <div className="flex justify-center mb-4">
                    <div 
                      data-aos="zoom-in"
                      data-aos-delay={300 + (index * 100)}
                      className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg relative`}
                    >
                      {index + 1}
                      <div className="absolute -inset-2 bg-gradient-to-r from-transparent to-transparent rounded-full border-2 border-dashed border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Icône */}
                  <div 
                    data-aos="flip-left"
                    data-aos-delay={400 + (index * 100)}
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Contenu */}
                  <h3 
                    data-aos="fade-up"
                    data-aos-delay={500 + (index * 100)}
                    className="text-xl font-bold text-gray-900 mb-3"
                  >
                    {step.title}
                  </h3>
                  <p 
                    data-aos="fade-up"
                    data-aos-delay={550 + (index * 100)}
                    className="text-gray-600 mb-4 leading-relaxed"
                  >
                    {step.description}
                  </p>

                  {/* Détails */}
                  <div className="space-y-2 text-left">
                    {step.details.map((detail, idx) => (
                      <div 
                        key={idx}
                        data-aos="fade-right"
                        data-aos-delay={600 + (index * 100) + (idx * 50)}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Méthodologies clés */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mes Principes d'Intervention</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une philosophie de travail centrée sur la valeur business et la satisfaction client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodologies.map((method, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={300 + (index * 100)}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:text-white text-2xl">
                    {index === 0 && "📈"}
                    {index === 1 && "🔄"}
                    {index === 2 && "🔍"}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{method.title}</h4>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Avantages clients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ce que vous gagnez</h3>
            <ul className="space-y-3">
              {[
                "Des insights actionnables immédiatement exploitables",
                "Une vision claire de votre performance business",
                "Des recommandations stratégiques priorisées",
                "Un temps de décision réduit de manière significative",
                "Un retour sur investissement mesurable"
              ].map((benefit, index) => (
                <li 
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={300 + (index * 100)}
                  className="flex items-start"
                >
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-delay="200"
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Livrables inclus</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Rapport d'analyse complet",
                  description: "Document détaillé avec méthodologie et résultats"
                },
                {
                  title: "Dashboard interactif",
                  description: "Visualisations dynamiques pour suivre vos KPI"
                },
                {
                  title: "Présentation executive",
                  description: "Synthèse pour la direction et prise de décision"
                },
                {
                  title: "Support post-livraison",
                  description: "Accompagnement pour la mise en œuvre"
                }
              ].map((deliverable, index) => (
                <div 
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={300 + (index * 100)}
                  className="flex items-start"
                >
                  <div 
                    data-aos="zoom-in"
                    data-aos-delay={400 + (index * 100)}
                    className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                  >
                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{deliverable.title}</h4>
                    <p className="text-gray-600 text-sm">{deliverable.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prêt à optimiser vos décisions ?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Appliquons cette méthodologie rigoureuse à vos données pour en extraire le maximum de valeur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                data-aos="fade-right"
                data-aos-delay="300"
                className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span className="mr-3">📊</span>
                Démarrer une analyse
              </a>
              <a 
                href="#data-analysis" 
                data-aos="fade-left"
                data-aos-delay="300"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center transform hover:-translate-y-0.5"
              >
                <ArrowRight className="w-5 h-5 mr-3" />
                Voir mes projets data
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
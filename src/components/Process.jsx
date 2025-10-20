const Process = () => {
  const steps = [
    {
      icon: "📋",
      title: "1. Compréhension du besoin",
      description: "Identification des objectifs métier et des questions à résoudre"
    },
    {
      icon: "🛠️",
      title: "2. Collecte & Nettoyage",
      description: "Acquisition et préparation des données pour l'analyse"
    },
    {
      icon: "📊",
      title: "3. Exploration & Analyse",
      description: "Identification des tendances, patterns et corrélations"
    },
    {
      icon: "💡",
      title: "4. Visualisation & Insights",
      description: "Présentation claire des résultats et recommandations actionnables"
    }
  ]

  return (
    <section className="section-pad py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-black text-center text-primary mb-12">
          Ma Méthodologie d'Analyse
        </h2>
        
        <div className="row grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="col-md-3 text-center">
              <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                {step.icon}
              </div>
              <h5 className="h6 font-semibold mb-2">{step.title}</h5>
              <p className="text-muted text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Développement sur mesure",
      description: "Apps web performantes, adaptées à vos métiers.",
      features: [
        "Vitrine & boutique en ligne",
        "Applications React/Node.js",
        "Mini-CRM / back-office",
        "Intégration d'APIs"
      ],
      price: "Budget : à discuter"
    },
    {
      icon: "📊",
      title: "Automatisation Data",
      description: "De vos fichiers Excel à la décision.",
      features: [
        "Rapports automatisés (Power Query)",
        "Dashboards Excel/Power BI",
        "Migration Excel → BDD",
        "Analyse prédictive basique"
      ],
      price: "Budget : à discuter"
    },
    {
      icon: "⚡",
      title: "Optimisation technique",
      description: "Améliorez l'existant rapidement.",
      features: [
        "Audit performance & sécurité",
        "Correctifs urgents",
        "Formation des utilisateurs",
        "Maintenance évolutive"
      ],
      price: "Forfait : à discuter"
    }
  ]

  return (
    <section id="services" className="section-pad py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-black text-center text-primary mb-4">
          Services Professionnels
        </h2>
        <p className="text-center text-muted mb-12">Solutions clés en main pour startups & PME</p>

        <div className="row grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card-pro h-full border-b-4 hover:border-b-blue-700">
                <div className="icon-wrap">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="h5 font-bold mb-3">{service.title}</h3>
                <p className="text-muted mb-4">{service.description}</p>
                <ul className="list-checked text-sm mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="pricing text-primary font-semibold text-sm mt-auto">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <div className="promo-chip inline-block bg-white border border-gray-200 text-primary px-4 py-2 rounded-full mb-4">
            ⭐ <strong>-30%</strong> sur le premier projet
          </div> */}
          <div className="flex flex-col items-center gap-4">
            <a href="#contact" className="btn btn-primary bg-primary text-white px-6 py-3 rounded-lg font-medium flex items-center">
              <span className="me-2 p-4 text-white-800 rounded-lg bg-blue-700 hover:bg-blue-600 hover:translate-y-[-2px]  transition-transform">
                📅 Planifier un appel
              </span>
            </a>
            {/* <div className="small text-muted">Réponse sous 24h</div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
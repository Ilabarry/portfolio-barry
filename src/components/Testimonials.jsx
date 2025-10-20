const Testimonials = () => {
  const testimonials = [
    {
      initials: "GT",
      name: "Groupe de Travail",
      position: "Projet Académique",
      text: "\"Vous êtes excellents, car après la théorie vous avez passé à la pratique pour nous aider à comprendre. Merci, nous avons vraiment compris grâce à votre accompagnement.\"",
      rating: 5
    },
    {
      initials: "EU",
      name: "Étudiants UN-CHK",
      position: "Projet de fin de cycle (Licence)",
      text: "\"Bonjour Barry, aujourd'hui nous avons les exposés tranquillement car nous sommes satisfaits de votre travail. Votre expertise nous a été précieuse pour la réussite de notre projet.\"",
      rating: 4.5
    },
    {
      initials: "MD",
      name: "Mohamed Diagne",
      position: "Analyste, Entreprise Typha",
      text: "\"Merci Ila Barry pour ton travail exceptionnel. Le tableau de bord que tu as conçu m'a permis de prendre des décisions utiles et concrètes qui ont amélioré notre productivité de 30%.\"",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>)
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">★</span>)
    }

    const remainingStars = 5 - stars.length
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>)
    }

    return stars
  }

  return (
    <section id="testimonials" className="section-pad bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-black text-center text-primary mb-4">
          Témoignages
        </h2>
        <p className="text-center text-muted mb-12">Ce que disent mes clients et collaborateurs</p>

        <div className="row grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4">
              <div className="card-pro h-full border-b-4 hover:border-b-blue-700">
                <div className="flex items-center mb-4">
                  <div className="client-img w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="client-name font-semibold">{testimonial.name}</div>
                    <div className="client-position text-sm text-muted">{testimonial.position}</div>
                  </div>
                </div>
                <p className="testimonial-text italic leading-relaxed mb-4">{testimonial.text}</p>
                <div className="testimonial-meta flex justify-between items-center mt-4">
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="quote-icon text-primary text-xl">
                    ❝
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
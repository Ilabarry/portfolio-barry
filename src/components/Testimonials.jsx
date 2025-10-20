import { Star, Quote, Users, GraduationCap, Briefcase, Award, ThumbsUp, MessageCircle, TrendingUp } from "lucide-react";
const Testimonials = () => {
  const testimonials = [
    {
      initials: "GT",
      name: "Groupe de Travail",
      position: "Projet Académique",
      text: "Vous êtes excellents, car après la théorie vous avez passé à la pratique pour nous aider à comprendre. Merci, nous avons vraiment compris grâce à votre accompagnement.",
      rating: 5,
      icon: <Users className="w-5 h-5" />,
      category: "Formation",
      delay: 100
    },
    {
      initials: "EU",
      name: "Étudiants UN-CHK",
      position: "Projet de fin de cycle (Licence)",
      text: "Bonjour Barry, aujourd'hui nous avons les exposés tranquillement car nous sommes satisfaits de votre travail. Votre expertise nous a été précieuse pour la réussite de notre projet.",
      rating: 4.5,
      icon: <GraduationCap className="w-5 h-5" />,
      category: "Accompagnement",
      delay: 200
    },
    {
      initials: "MD",
      name: "Mohamadou Diallo",
      position: "Analyste, Entreprise",
      text: "Merci Ila Barry pour ton travail exceptionnel. Le tableau de bord que tu as conçu m'a permis de prendre des décisions utiles et concrètes qui ont amélioré notre productivité de 30%.",
      rating: 5,
      icon: <Briefcase className="w-5 h-5" />,
      category: "Data Analysis",
      delay: 300
    }
  ];

  const stats = [
    { number: "100%", label: "Clients Satisfaits", icon: <ThumbsUp className="w-6 h-6" />, delay: 100 },
    { number: "30%", label: "Productivité Améliorée", icon: <TrendingUp className="w-6 h-6" />, delay: 200 },
    { number: "24h", label: "Support Réactif", icon: <MessageCircle className="w-6 h-6" />, delay: 300 },
    { number: "5+", label: "Projets Accomplis", icon: <Award className="w-6 h-6" />, delay: 400 }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) 
            ? "text-yellow-400 fill-current" 
            : index < rating 
            ? "text-yellow-400 fill-current" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span 
            data-aos="fade-down"
            className="text-blue-600 font-semibold text-lg mb-2 block"
          >
            Témoignages Clients
          </span>
          <h2 
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Ils m'ont <span className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">fait confiance</span>
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez les retours d'expérience de mes clients et collaborateurs sur nos projets communs.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              data-aos="zoom-in"
              data-aos-delay={stat.delay}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={testimonial.delay}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-full flex flex-col">
                {/* En-tête du témoignage */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        {testimonial.icon}
                        <span className="ml-2">{testimonial.position}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-blue-600 bg-blue-50 rounded-full p-2">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Note */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-gray-500 text-sm">
                    {testimonial.rating}/5
                  </span>
                </div>

                {/* Catégorie */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.category}
                  </span>
                </div>

                {/* Texte du témoignage */}
                <blockquote className="text-gray-700 leading-relaxed flex-1 mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Séparateur */}
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-center text-gray-500 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Projet réussi
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section confiance */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi me faire confiance ?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Je m'engage à fournir un travail de qualité, dans les délais convenus, avec une communication transparente tout au long du projet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Communication Transparente",
                description: "Suivi régulier et échanges constants pour vous tenir informé de l'avancement",
                icon: "💬",
                delay: 100
              },
              {
                title: "Respect des Délais",
                description: "Livraison dans les temps impartis avec un code de qualité professionnelle",
                icon: "⏱️",
                delay: 200
              },
              {
                title: "Support Continu",
                description: "Accompagnement même après la livraison pour garantir votre satisfaction",
                icon: "🔧",
                delay: 300
              }
            ].map((item, index) => (
              <div 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 transition-colors">
                  <div className="text-blue-600 group-hover:text-white text-xl">
                    {item.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à rejoindre mes clients satisfaits ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Rejoignez les nombreux clients qui m'ont fait confiance pour leurs projets digitaux et bénéficiez du même niveau d'excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <span className="mr-3">🚀</span>
                Démarrer mon projet
              </a>
              <a 
                href="#projects" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-3">📂</span>
                Voir mes réalisations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
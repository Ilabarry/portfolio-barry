import { Linkedin, Github, Mail, MessageCirclePlus, Facebook, Award, BookOpen, Target, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div 
          data-aos="fade-up"
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À propos de <span className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">moi</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Développeur Full-Stack passionné et Analyste de Données, je transforme vos idées en solutions digitales performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Colonne de gauche - Expérience */}
          <div className="space-y-6 sm:space-y-8">
            {/* Présentation */}
            <div 
              data-aos="fade-right"
              data-aos-delay="100"
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-blue-600"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Qui suis-je ?</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                Je suis <strong className="text-blue-600">ILA Barry</strong>, un développeur full-stack basé à Saint-Louis, Sénégal. 
                Actuellement en <strong>Licence 3 en Informatique</strong>, je combine formation académique et expérience pratique 
                pour créer des solutions web modernes avec <strong>React, Node.js et PHP/Laravel</strong>.
              </p>
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Disponible pour missions: freelance, stage ou CDD
              </div>
            </div>

            {/* Expériences professionnelles */}
            <div className="space-y-4 sm:space-y-6">
              <h3 
                data-aos="fade-right"
                className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center"
              >
                <Target className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
                Expérience Professionnelle
              </h3>
              
              <div 
                data-aos="fade-right"
                data-aos-delay="100"
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Stage développeur Full-Stack</h4>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 sm:px-3 py-1 rounded-full font-medium self-start sm:self-auto">
                    En cours
                  </span>
                </div>
                <p className="text-blue-600 font-medium text-xs sm:text-sm mb-3 flex items-center">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Bakeli School of Technology • Oct 2025 - Présent
                </p>
                <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Développement d'applications web avec React/Node.js/Laravel
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Gestion de bases de données MongoDB, PostgreSQL et MySQL
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Conception d'interfaces utilisateur modernes et responsives
                  </li>
                </ul>
              </div>

              <div 
                data-aos="fade-right"
                data-aos-delay="200"
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">Stage tuteur en Développement Web</h4>
                </div>
                <p className="text-blue-600 font-medium text-xs sm:text-sm mb-3 flex items-center">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Centre Les Tutoriels • Juin 2025 - Sept 2025
                </p>
                <ul className="space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Formation et encadrement de 50+ étudiants en développement
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Support technique sur HTML/CSS, JavaScript et PHP
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Suivi et évaluation de projets académiques
                  </li>
                </ul>
              </div>

              {/* CTA et Contact */}
              <div 
                data-aos="zoom-in"
                data-aos-delay="300"
                className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
              >
                <h4 className="text-white text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                  Un projet en tête ?
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                  Discutons de votre vision et voyons comment je peux vous aider à la concrétiser.
                </p>
                
                <div className="flex justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <a
                    href="https://wa.me/221783249424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition transform hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <MessageCirclePlus className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="mailto:barryila35@gmail.com"
                    className="p-2 sm:p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition transform hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ila-barry-259008343/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
                
                <p className="text-blue-400 text-xs font-medium">
                  Premiers résultats sous 48h pour les analyses de données
                </p>
              </div>
            </div>
          </div>

          {/* Colonne de droite - Compétences & Certifications */}
          <div className="space-y-6 sm:space-y-8">
            {/* Certifications */}
            <div 
              data-aos="fade-left"
              data-aos-delay="100"
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
                Certifications & Formations
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "IA pour Tous",
                    organization: "Force-N Sénégal",
                    period: "Octobre 2025",
                    icon: "🤖"
                  },
                  {
                    title: "Analyse de Données Avancée",
                    organization: "Force-N Sénégal",
                    period: "Avril 2025",
                    icon: "📊"
                  },
                  {
                    title: "Développement Full Stack",
                    organization: "Les Tutoriels",
                    period: "Juillet 2024 - Janvier 2025",
                    icon: "💻"
                  },
                  {
                    title: "Licence 3 en Informatique",
                    organization: "Université Numérique Cheikh Hamidou Kane",
                    period: "2025 - Présent",
                    icon: "🎓"
                  }
                ].map((cert, index) => (
                  <div 
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={150 + (index * 50)}
                    className="flex items-start p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-xl sm:text-2xl mr-3 sm:mr-4">{cert.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{cert.title}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">{cert.organization}</p>
                      <p className="text-blue-600 text-xs font-medium mt-1">{cert.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Domaines d'expertise */}
            <div 
              data-aos="fade-left"
              data-aos-delay="200"
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-l-4 border-blue-600"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600" />
                Ce que je propose
              </h3>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {[
                  "Sites vitrines et e-commerce sur mesure",
                  "Applications React/Node.js/PHP/Laravel modernes",
                  "APIs RESTful et intégrations de services",
                  "Migration Excel → Base de données",
                  "Dashboards décisionnels (Excel/Power BI)",
                  "Optimisation de performance et correctifs"
                ].map((service, index) => (
                  <div 
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={250 + (index * 50)}
                    className="flex items-center p-2 sm:p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                      <span className="text-blue-600 text-xs sm:text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium text-xs sm:text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section supplémentaire - Pourquoi me choisir */}
        <div 
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 sm:mt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Pourquoi travailler avec moi ?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div 
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-center p-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-2">Délais respectés</h4>
              <p className="text-blue-100 text-xs sm:text-sm">Livraison dans les temps avec un code de qualité</p>
            </div>
            <div 
              data-aos="zoom-in"
              data-aos-delay="200"
              className="text-center p-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl">💬</span>
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-2">Communication transparente</h4>
              <p className="text-blue-100 text-xs sm:text-sm">Suivi régulier et échanges constants</p>
            </div>
            <div 
              data-aos="zoom-in"
              data-aos-delay="300"
              className="text-center p-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl">🔧</span>
              </div>
              <h4 className="font-semibold text-sm sm:text-base mb-2">Solutions adaptées</h4>
              <p className="text-blue-100 text-xs sm:text-sm">Applications sur mesure pour vos besoins spécifiques</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
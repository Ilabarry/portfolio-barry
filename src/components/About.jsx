import { Linkedin, Github, Mail, Phone, Facebook } from "lucide-react";
const About = () => {
  return (
    <section id="about" className="section-pad bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl md:text-4xl font-black text-center text-primary mb-8">
          Je suis
        </h2>
        <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-lg-6">
            <div className="card-pro h-full border-l-4 border-l-blue-700">
              <h2 className="h3 mb-4 text-primary">À propos de moi</h2>
              <p className="mb-4">
                Je suis <strong>ILA Barry</strong>, développeur full-stack passionné basé à Saint-Louis, Sénégal. 
                Actuellement en <strong>Licence 3 en Informatique</strong> et avec une formation intensive en développement, 
                je maîtrise les technologies modernes comme <strong>React, Node.js, PHP/Laravel</strong>.
              </p>
              
              <div className="experience-item mt-6">
                <h4 className="h5 font-bold">Stage Développeur Full-Stack</h4>
                <p className="text-muted text-sm">Bakeli School of Technology • Octobre 2025 - Présent</p>
                <ul className="list-checked mt-2">
                  <li>Développement d'applications React/Node.js</li>
                  <li>Gestion de bases de données MongoDB/PostgreSQL</li>
                  <li>Conception d'interfaces utilisateur modernes</li>
                </ul>
              </div>

              <div className="experience-item mt-4">
                <h4 className="h5 font-bold">Stage Tuteur en Développement Web</h4>
                <p className="text-muted text-sm">Centre Les Tutoriels • Juin 2025 - Septembre 2025</p>
                <ul className="list-checked mt-2">
                  <li>Formation et encadrement de 50+ étudiants</li>
                  <li>Support technique sur HTML/CSS, JavaScript, PHP</li>
                  <li>Suivi de projets académiques</li>
                </ul>
              </div>

              <ul className="list-unstyled mt-6">
                <li className="mb-2 flex items-center">
                  <span className="me-2">📍</span>Saint-Louis, Sénégal
                </li>
                <li className="mb-2 flex items-center">
                  <span className="me-2">📞</span>+221 78 324 94 24 • +221 70 736 49 86
                </li>
                <li className="flex items-center">
                  <span className="me-2">✉️</span>barryila35@gmail.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card-pro h-full  border-l-4 border-l-blue-700">
              <h3 className="h4 mb-4 text-primary">Certifications & Formations</h3>
              
              {[
                "Certificat 'IA pour Tous' - Force-N Sénégal (Octobre 2025)",
                "Certificat Analyse de Données Avancée - Force-N Sénégal (Avril 2025)",
                "Formation Développement Full Stack - Les Tutoriels (2024-2025)",
                "Licence 3 en Informatique - Université Numérique Cheikh Hamidou Kane (2025-présent)"
              ].map((cert, index) => (
                <div key={index} className="certification-item mb-3 flex items-start">
                  <span className="me-2 text-primary">✅</span>
                  <span>{cert}</span>
                </div>
              ))}

              <h4 className="h5 mt-6 text-primary">Ce que je peux apporter</h4>
              <ul className="list-checked">
                <li>Sites vitrines, e-commerce, CRM légers</li>
                <li>APIs & intégrations (paiements, services tiers)</li>
                <li>Applications React/Node.js modernes</li>
                <li>Automatisation Excel → base de données</li>
                <li>Dashboards décisionnels (Excel/Power BI)</li>
                <li>Optimisation performance & correction de bugs</li>
              </ul>

              <p className="mt-6">
                Vous êtes <strong>entrepreneur</strong>, <strong>étudiant</strong> ou autre ?  
                Vous recherchez une <strong>plateforme pour votre entreprise</strong>,  
                un <strong>projet web pour votre fin de cycle</strong>,  
                un <strong>portfolio professionnel</strong> ou  
                vous souhaitez <strong>analyser vos données</strong> pour prendre de meilleures décisions ?  
              </p>
              
              <div className="flex gap-4 m-4">
                <a
                  href="https://wa.me/221783249424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:barryila35@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 ml-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ila-barry-259008343/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 ml-3" />
                </a>
                <a
                  href="https://github.com/Ilabarry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 ml-3" />
                </a>
                <a
                  href="https://facebook.com/ila.barry.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 ml-3" />
                </a>
              </div>

              <div className="mt-3 text-sm text-muted">Premiers résultats en 48h sur les prestations data.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
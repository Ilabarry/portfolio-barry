import { Linkedin, Github, Mail, Phone, FileText, ArrowUp, Code, Database } from "lucide-react";
import Moncv from '../assets/docs/CV_ILA_BARRY_Développeur_Full-Stack_Aalyste_de_Données.pdf'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Data Analysis', href: '#data-analysis' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ila-barry-259008343/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/Ilabarry",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:barryila35@gmail.com",
      label: "Email",
      color: "hover:text-red-400"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "https://wa.me/221783249424",
      label: "WhatsApp",
      color: "hover:text-green-400"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Section principale du footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Colonne 1 - Présentation */}
          <div className="lg:col-span-2">
            <h3 
              data-aos="fade-right"
              className="text-2xl font-bold mb-4 flex items-center"
            >
              <span className="text-blue-400">ILA</span> Barry
            </h3>
            <p 
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-gray-300 mb-6 leading-relaxed max-w-md"
            >
              Développeur Full-Stack & Analyste de Données passionné, je crée des solutions digitales innovantes 
              pour transformer vos idées en réalité et vos données en décisions stratégiques.
            </p>
            <div 
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/10 rounded-lg text-gray-300 transition-all duration-300 hover:bg-white/20 transform hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 - Navigation rapide */}
          <div>
            <h4 
              data-aos="fade-up"
              className="text-lg font-semibold mb-4 text-blue-400"
            >
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.slice(0, 4).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className="text-gray-300 hover:text-white transition-colors duration-300 py-1 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 3 - Plus de liens */}
          <div>
            <h4 
              data-aos="fade-up"
              className="text-lg font-semibold mb-4 text-blue-400"
            >
              Liens utiles
            </h4>
            <div className="space-y-2">
              {footerLinks.slice(4).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className="text-gray-300 hover:text-white transition-colors duration-300 block py-1 text-sm"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={Moncv}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center py-1 text-sm"
              >
                <FileText className="w-4 h-4 mr-2" />
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div 
              data-aos="fade-right"
              className="text-gray-400 text-sm"
            >
              © {currentYear} ILA Barry. Tous droits réservés.
            </div>

            {/* Technologies utilisées */}
            <div 
              data-aos="fade-up"
              className="flex items-center gap-6 text-sm"
            >
              <span className="text-gray-400 flex items-center">
                <Code className="w-4 h-4 mr-1" />
                <Database className="w-4 h-4 mr-1" />
                Développé avec React, Tailwind CSS et EmailJS
              </span>
            </div>

            {/* Bouton retour en haut */}
            <button
              onClick={scrollToTop}
              data-aos="fade-left"
              data-aos-delay="100"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Haut de page</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bandeau de statut */}
      <div className="bg-blue-600 py-3">
        <div className="container mx-auto px-4">
          <div 
            data-aos="fade-up"
            className="flex items-center justify-center gap-2 text-sm"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Disponible pour de nouvelles opportunités</span>
            <a 
              href="#contact" 
              className="ml-2 underline hover:text-blue-200 transition-colors"
            >
              Contactez-moi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
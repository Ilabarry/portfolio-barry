import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Image from "../assets/img/head.png";
import Moncv from "../assets/docs/CV_ILA_BARRY_Développeur_Full-Stack_Aalyste_de_Données.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* ✅ Colonne texte animée */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              ILA <span className="text-blue-300">Barry</span>
            </h1>

            <div className="space-y-4">
              <p className="text-2xl lg:text-3xl font-light text-blue-100">
                <TypeAnimation
                  sequence={[
                    "Développeur Full-Stack 💻", // phrase 1
                    2500,                       // attend 2 secondes
                    "",                         // efface
                    "Analyste de Données 📊",    // phrase 2
                    2500,                       // attend encore 2 secondes
                    "",                         // efface
                  ]}
                  wrapper="span"
                  speed={50} // vitesse d'écriture
                  deletionSpeed={40} // vitesse d'effacement
                  repeat={Infinity} // boucle infinie
                  className="block text-blue-300 font-semibold"
                />
              </p>


              <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
                Je transforme vos idées en applications web performantes et vos données en insights actionnables. 
                Spécialisé en technologies modernes et solutions data-driven.
              </p>
            </div>

            {/* Boutons CTA avec effet de fade-in */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a
                href="#contact"
                className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-3" />
                Discuter de votre projet
              </a>

              <a
                href={Moncv}
                target="_blank"
                rel="noopener"
                className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <span className="mr-3">📄</span>
                Voir mon CV
              </a>
            </motion.div>

            {/* Réseaux sociaux avec effet de zoom */}
            <motion.div
              className="pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-blue-200 text-sm mb-4">Connectons-nous</p>
              <div className="flex gap-4">
                {[ 
                  { icon: <Linkedin />, href: "https://www.linkedin.com/in/ila-barry-259008343/" },
                  { icon: <Github />, href: "https://github.com/Ilabarry" },
                  { icon: <Mail />, href: "mailto:barryila35@gmail.com" },
                  { icon: <Phone />, href: "https://wa.me/221783249424" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ✅ Colonne image animée */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-30"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ repeat: Infinity, duration: 3 }}
              ></motion.div>

              <img
                src={Image}
                alt="Portrait de ILA Barry - Développeur Full-Stack & Analyste de Données"
                className="relative w-80 h-96 lg:w-96 lg:h-[480px] object-cover rounded-2xl shadow-2xl border-x-4 border-x-white"
              />

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white text-blue-900 px-4 py-2 rounded-lg shadow-lg font-semibold"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.6, type: "spring" }}
              >
                🚀 Disponible maintenant
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Linkedin, Github, Mail, Phone, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Image from "../assets/img/head.png";
import Moncv from "../assets/docs/CV_ILA_BARRY_Développeur_Full-Stack_Aalyste_de_Données.pdf";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="hero"
      className="min-h-full flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden relative"
    >
      {/* Effets de fond animés */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container mt-32 mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-14 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
          
          {/* Colonne texte animée */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Titre principal */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              ILA <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Barry</span>
            </motion.h1>

            {/* Animation de typing */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 sm:space-y-4"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-light text-blue-100 min-h-[40px] sm:min-h-[50px] flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={[
                    "Développeur Full-Stack 💻",
                    2000,
                    "Analyste de Données 📊",
                    2000,
                    "Consultant Tech 🔧",
                    2000,
                    "Freelance Passionné 🚀",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={40}
                  repeat={Infinity}
                  className="text-blue-300 font-semibold text-center lg:text-left"
                />
              </div>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Je transforme vos idées en <span className="text-cyan-300 font-semibold">applications web performantes </span> 
                 et vos données en <span className="text-cyan-300 font-semibold">insights actionnables</span>. 
                Spécialisé en technologies modernes et solutions data-driven.
              </motion.p>
            </motion.div>

            {/* Boutons CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Discuter de votre projet
              </motion.a>

              <motion.a
                href={Moncv}
                target="_blank"
                rel="noopener"
                className="group border-2 border-white/50 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center backdrop-blur-sm text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Télécharger mon CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-white/20"
            >
              {[
                { number: "5+", label: "Projets" },
                { number: "1", label: "Ans Exp" },
                { number: "100%", label: "Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-300">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Colonne image animée */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mt-6 sm:mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 100, rotate: 5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
          >
            <div className="relative">
              {/* Effet de lueur animé */}
              <motion.div
                className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-30"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Image principale */}
              <motion.img
                src={Image}
                alt="Portrait de ILA Barry - Développeur Full-Stack & Analyste de Données"
                className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 lg:w-72 lg:h-80 xl:w-96 xl:h-[400px] object-cover rounded-xl sm:rounded-2xl shadow-2xl border-x-4 mt-4 sm:mt-6 border-x-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              {/* Badge flottant */}
              <motion.div
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 mb-10 sm:mb-14 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl shadow-2xl font-semibold flex items-center gap-2 text-xs sm:text-sm"
                initial={{ scale: 0, rotate: -10, y: 20 }}
                animate={{ scale: 1, rotate: 0, y: 0 }}
                transition={{ 
                  delay: 1.5, 
                  duration: 0.8, 
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 2,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🚀
                </motion.div>
                Disponible maintenant
              </motion.div>

              {/* Élément décoratif flottant */}
              <motion.div
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xs sm:text-sm font-bold shadow-lg"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ★
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
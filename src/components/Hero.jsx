import { Linkedin, Github, Mail, Phone, Facebook } from "lucide-react";
import Image from '../assets/img/head.png'
import Moncv from '../assets/docs/CV_ILA_BARRY_Développeur_Full-Stack_Aalyste_de_Données.pdf'

const Hero = () => {
  return (
    <section id="hero" className="section-hero min-h-screen flex items-center bg-blue-600 from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="row flex flex-col lg:flex-row items-center gap-8">
          <div className="col-lg-6 order-2 lg:order-1">
            <span className="badge bg-white text-gray-800 font-semibold px-3 py-1 rounded-full mb-4 inline-block">
              Freelance disponible
            </span>
            <h1 className="display-5 text-4xl md:text-5xl font-black mb-2">ILA Barry</h1>
            <p className="lead text-white/80 text-xl mb-4">Développeur Full-Stack & Analyste de Données</p>
            <p className="text-white/80 mb-6">
              Je conçois des applications web performantes avec React/Node.js et des tableaux de bord data 
              pour transformer vos processus et accélérer la prise de décision.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-6">
              <a href="#contact" className="btn bg-white text-gray-800 px-4 py-2 rounded-lg font-medium flex items-center">
                <span className="me-1">📞</span>Planifier un échange
              </a>
              <a 
                href={Moncv} 
                target="_blank" 
                className="btn border border-white text-white px-4 py-2 rounded-lg font-medium flex items-center"
              >
                <span className="me-1">📄</span>Voir mon CV
              </a>
            </div>

            <div className="flex gap-4 mb-4">
              <a
                href="https://wa.me/221783249424"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
                aria-label="WhatsApp"
              >
                <Phone className="w-10 h-10" />
              </a>
              <a
                href="mailto:barryila35@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition"
                aria-label="Email"
              >
                <Mail className="w-10 h-10 ml-3" />
              </a>
              <a
                href="https://www.linkedin.com/in/ila-barry-259008343/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-10 h-10 ml-3" />
              </a>
              <a
                href="https://github.com/Ilabarry"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
                aria-label="GitHub"
              >
                <Github className="w-10 h-10 ml-3" />
              </a>
              <a
                href="https://facebook.com/ila.barry.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-10 h-10 ml-3" />
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center order-1 lg:order-2">
            <div className="hero-photo mb-4 ">
              <img 
                src={Image} 
                alt="Portrait de ILA Barry" 
                className="img-fluid rounded-2xl shadow-lg mx-auto max-w-md border-x-4 border-x-white"
                style={{height: '50vh', objectFit: 'cover'}}
              />
            </div>
            <div className="freelance-bullets text-white/80 text-xs">
              <div className="flex items-center justify-center mb-1">
                <span className="me-1">✅</span> Missions courtes & longues durées
              </div>
              <div className="flex items-center justify-center mb-1">
                <span className="me-1">✅</span> À distance ou à Saint-Louis (Sénégal)
              </div>
              <div className="flex items-center justify-center">
                <span className="me-1">✅</span> Stack moderne : React, Node.js, Laravel
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import { Linkedin, Github, Mail, Phone, Facebook, X, MapPin, Send, Clock, CheckCircle, MessageCircle, FileText } from "lucide-react";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_na7ijij',
    TEMPLATE_ID: 'template_yfx6fdj',
    PUBLIC_KEY: 'Wk6JzXgIn0_9KpGki'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert({ show: false, type: '', message: '' });

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setAlert({
        show: true,
        type: 'error',
        message: 'Veuillez remplir tous les champs obligatoires.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'ILA Barry',
        reply_to: formData.email
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setShowSuccessModal(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error);
      let errorMessage = 'Une erreur est survenue lors de l\'envoi du message. ';
      
      if (error.text) {
        errorMessage += `Détail: ${error.text}`;
      } else {
        errorMessage += 'Veuillez réessayer ou me contacter directement.';
      }
      
      setAlert({
        show: true,
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const SuccessModal = () => {
    if (!showSuccessModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div 
          data-aos="zoom-in"
          className="bg-white rounded-2xl max-w-md w-full p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-green-600 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2" />
              Message envoyé !
            </h3>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Merci pour votre message !
            </h4>
            <p className="text-gray-600 mb-4">
              Je vous répondrai dans les plus brefs délais. En attendant, n'hésitez pas à me contacter directement sur les réseaux.
            </p>
          </div>

          <div className="border-t pt-4">
            <h5 className="font-semibold text-gray-800 mb-3 text-center">Contact rapide :</h5>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/221783249424"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:barryila35@gmail.com"
                className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ila-barry-259008343/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <button
            onClick={() => setShowSuccessModal(false)}
            className="w-full mt-4 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            Compris, merci !
          </button>
        </div>
      </div>
    );
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      platform: "WhatsApp",
      details: "+221 78 324 94 24",
      description: "Réponse instantanée",
      color: "green",
      href: "https://wa.me/221783249424",
      delay: 100
    },
    {
      icon: <Mail className="w-6 h-6" />,
      platform: "Email",
      details: "barryila35@gmail.com",
      description: "Projets détaillés",
      color: "red",
      href: "mailto:barryila35@gmail.com",
      delay: 200
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      platform: "LinkedIn",
      details: "Profil professionnel",
      description: "Réseau professionnel",
      color: "blue",
      href: "https://www.linkedin.com/in/ila-barry-259008343/",
      delay: 300
    },
    {
      icon: <Github className="w-6 h-6" />,
      platform: "GitHub",
      details: "Code source",
      description: "Mes projets",
      color: "gray",
      href: "https://github.com/Ilabarry",
      delay: 400
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-700 hover:bg-green-200 border-green-200',
      red: 'bg-red-100 text-red-700 hover:bg-red-200 border-red-200',
      blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200',
      gray: 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200'
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <SuccessModal />
      
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* En-tête */}
          <div className="text-center mb-16">
            <span 
              data-aos="fade-down"
              className="text-blue-600 font-semibold text-lg mb-2 block"
            >
              Contact
            </span>
            <h2 
              data-aos="fade-up"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Travaillons <span className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">ensemble</span>
            </h2>
            <p 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discutons de votre projet et voyons comment je peux vous aider à le concrétiser avec des solutions digitales performantes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne de gauche - Informations de contact */}
            <div className="space-y-8">
              {/* Présentation */}
              <div 
                data-aos="fade-right"
                data-aos-delay="100"
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  Informations de contact
                </h3>
                
                <div className="flex items-center mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Localisation</div>
                    <div className="text-gray-600">Saint-Louis, Sénégal</div>
                    <div className="text-blue-600 text-sm font-medium mt-1 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Disponible en remote
                    </div>
                  </div>
                </div>

                {/* Méthodes de contact */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-lg mb-4">Contact direct</h4>
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-aos="fade-right"
                      data-aos-delay={method.delay}
                      className={`flex items-center p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${getColorClasses(method.color)}`}
                    >
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{method.platform}</div>
                        <div className="text-sm opacity-90">{method.details}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium opacity-75">{method.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Garanties */}
              <div 
                data-aos="fade-right"
                data-aos-delay="200"
                className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-6 text-white"
              >
                <h4 className="font-bold text-lg mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Mes engagements
                </h4>
                <div className="space-y-3">
                  {[
                    "Réponse sous 24 heures",
                    "Devis personnalisé gratuit",
                    "Communication transparente",
                    "Respect des délais convenus"
                  ].map((engagement, index) => (
                    <div key={index} className="flex items-center text-blue-100">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {engagement}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonne de droite - Formulaire */}
            <div 
              data-aos="fade-left"
              data-aos-delay="100"
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Envoyez-moi un message</h3>
                <p className="text-gray-600">
                  Remplissez ce formulaire et je vous recontacte rapidement pour discuter de votre projet.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div data-aos="fade-left" data-aos-delay="150">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                      disabled={isSubmitting}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div data-aos="fade-left" data-aos-delay="200">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                      disabled={isSubmitting}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="250">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                    disabled={isSubmitting}
                    placeholder="votre@email.com"
                  />
                </div>

                <div data-aos="fade-left" data-aos-delay="300">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                    disabled={isSubmitting}
                    placeholder="Objet de votre message"
                  />
                </div>

                <div data-aos="fade-left" data-aos-delay="350">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                    disabled={isSubmitting}
                    placeholder="Décrivez votre projet, vos objectifs, vos contraintes techniques..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  className="w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Envoyer le message
                    </>
                  )}
                </button>

                {alert.show && (
                  <div 
                    data-aos="fade-up"
                    className={`p-4 rounded-lg border ${
                      alert.type === 'success' 
                        ? 'bg-green-50 text-green-800 border-green-200' 
                        : 'bg-red-50 text-red-800 border-red-200'
                    }`}
                  >
                    <div className="flex items-center">
                      {alert.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mr-2" />
                      )}
                      {alert.message}
                    </div>
                  </div>
                )}
              </form>

              {/* Conseils */}
              <div 
                data-aos="fade-up"
                data-aos-delay="450"
                className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
              >
                <p className="text-blue-800 font-semibold text-sm mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Pour une réponse optimale :
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Décrivez votre projet en détail
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Précisez vos objectifs principaux
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Indiquez votre deadline souhaitée
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
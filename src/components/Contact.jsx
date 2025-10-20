import { Linkedin, Github, Mail, Phone, Facebook, X } from "lucide-react";
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

  // Configuration EmailJS
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

    // Validation
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
      // Préparation des données pour EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'ILA Barry',
        reply_to: formData.email
      };

      // Envoi de l'email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Afficher le modal de succès
      setShowSuccessModal(true);

      // Réinitialisation du formulaire
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

  // Modal de succès
  const SuccessModal = () => {
    if (!showSuccessModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 transform animate-scale-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-green-600">Message envoyé !</h3>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Merci pour votre message !
            </h4>
            <p className="text-gray-600 mb-4">
              Je vous répondrai dans les plus brefs délais. En attendant, n'hésitez pas à me contacter directement sur les réseaux.
            </p>
          </div>

          <div className="border-t pt-4">
            <h5 className="font-semibold text-gray-800 mb-3">Me contacter directement :</h5>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/221783249424"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition transform hover:scale-110"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:barryila35@gmail.com"
                className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition transform hover:scale-110"
                aria-label="Email"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ila-barry-259008343/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition transform hover:scale-110"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <button
            onClick={() => setShowSuccessModal(false)}
            className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <SuccessModal />
      
      <section id="contact" className="section-pad bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-3xl md:text-4xl font-black text-center text-primary mb-12">
            Contactez-moi
          </h2>

          <div className="row grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Colonne de gauche - Informations de contact */}
            <div className="col-lg-5">
              <div className="card-pro h-full border-l-4 border-l-blue-700">
                <h3 className="text-xl py-4 font-bold text-gray-800 ">Informations de contact</h3>

                <div className="flex items-center">
                  <div className="contact-icon w-12 h-full bg-blue-100 rounded-full flex items-center justify-center text-primary">
                    📍
                  </div>
                  <div className="ms-4">
                    <div className="font-semibold">Localisation</div>
                    <div className="text-sm text-gray-600">Saint-Louis, Sénégal</div>
                  </div>
                </div>

                {/* Section Contact Direct */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-gray-800 mb-4 text-lg">💬 Contact Direct</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Préférez-vous me contacter directement ? Utilisez l'un de ces moyens :
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/221783249424"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition group"
                    >
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-xs text-green-600">+221 78 324 94 24</div>
                        <div className="text-xs text-green-500 font-medium">Réponse rapide</div>
                      </div>
                    </a>

                    <a
                      href="mailto:barryila35@gmail.com"
                      className="flex items-center gap-3 p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition group"
                    >
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Email Direct</div>
                        <div className="text-xs text-red-600">barryila35@gmail.com</div>
                        <div className="text-xs text-red-500 font-medium">Pour les projets détaillés</div>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/ila-barry-259008343/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition group"
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">LinkedIn</div>
                        <div className="text-xs text-blue-600">Profil professionnel</div>
                        <div className="text-xs text-blue-500 font-medium">Réseau professionnel</div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/Ilabarry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition group"
                    >
                      <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <Github className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">GitHub</div>
                        <div className="text-xs text-gray-600">Mes projets</div>
                        <div className="text-xs text-gray-500 font-medium">Code source</div>
                      </div>
                    </a>

                    <a
                      href="https://facebook.com/ila.barry.pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition group"
                    >
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                        <Facebook className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">Facebook</div>
                        <div className="text-xs text-blue-600">Page professionnelle</div>
                        <div className="text-xs text-blue-500 font-medium">Actualités</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne de droite - Formulaire */}
            <div className="col-lg-7">
              <div className="card-pro border-l-4 border-l-blue-700">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Envoyez-moi un message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="form-label block text-sm font-medium mb-2 text-gray-700">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        required
                        disabled={isSubmitting}
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="form-label block text-sm font-medium mb-2 text-gray-700">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        required
                        disabled={isSubmitting}
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label block text-sm font-medium mb-2 text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      required
                      disabled={isSubmitting}
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="form-label block text-sm font-medium mb-2 text-gray-700">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      required
                      disabled={isSubmitting}
                      placeholder="Objet de votre message"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="form-label block text-sm font-medium mb-2 text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      required
                      disabled={isSubmitting}
                      placeholder="Décrivez votre projet, vos objectifs, votre deadline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-3" />
                        Envoyer le message
                      </>
                    )}
                  </button>

                  {alert.show && (
                    <div className={`mt-4 p-4 rounded-lg border ${
                      alert.type === 'success' 
                        ? 'bg-green-50 text-green-800 border-green-200' 
                        : 'bg-red-50 text-red-800 border-red-200'
                    }`}>
                      <div className="flex items-center">
                        {alert.type === 'success' ? (
                          <span className="text-green-500 mr-2">✅</span>
                        ) : (
                          <span className="text-red-500 mr-2">❌</span>
                        )}
                        {alert.message}
                      </div>
                    </div>
                  )}
                </form>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-semibold text-sm mb-2">💡 Pour une réponse rapide :</p>
                  <ul className="text-sm text-blue-700 list-disc list-inside space-y-1">
                    <li>Décrivez votre projet en détail</li>
                    {/* <li>Précisez votre budget approximatif</li> */}
                    <li>Indiquez votre deadline souhaitée</li>
                    <li>Mentionnez vos besoins spécifiques</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
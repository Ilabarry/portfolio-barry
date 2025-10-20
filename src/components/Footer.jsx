import Moncv from '../assets/docs/CV_ILA_BARRY_Développeur_Full-Stack_Aalyste_de_Données.pdf'
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer bg-blue-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="row flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="col-md-6 text-sm">
            © {currentYear} ILA Barry — Tous droits réservés.
          </div>
          <div className="col-md-6">
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {['hero', 'about', 'projects', 'data-analysis', 'testimonials'].map((link) => (
                <a 
                  key={link}
                  href={`#${link}`} 
                  className="link-footer text-blue-300 hover:text-white transition-colors"
                >
                  {link === 'hero' ? 'Accueil' : 
                   link === 'about' ? 'À propos' : 
                   link === 'projects' ? 'Projets' : 
                   link === 'data-analysis' ? 'Data Analyst' : 
                   'Témoignages'}
                </a>
              ))}
              <a 
                href={Moncv}
                target="_blank" 
                className="link-footer text-blue-300 hover:text-white transition-colors"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
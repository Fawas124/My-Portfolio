const Hero = ({ setCurrentSection }) => {
  const handleDownloadCV = () => {
    // This would typically link to your CV file
    const link = document.createElement('a');
    link.href = '/Fawas CV.pdf'; // Update with your actual CV path
    link.download = 'Fawas CV.pdf';
    link.click();
  };

  const handleContactClick = () => {
    setCurrentSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Fawas Surajudeen</span></h1>
          <h2>
            <span className="highlight">S</span>oftware <span className="highlight">E</span>ngineer to Aspiring Business Analyst || 
            <span className="highlight"> B</span>usiness <span className="highlight">C</span>omputing  Data Analytics Student at Middlesex University
            {/* <span className="highlight"> F</span>ull<span className="highlight">S</span>tack <span className="highlight">D</span>eveloper || 
            <span className="highlight"> D</span>atabase <span className="highlight">D</span>eveloper ||
            <span className="highlight"> T</span>urning<span className="highlight">T</span>echnology & Data into Business Solutions */}
          </h2>
          <p>
            I combine software engineering, data, and business knowledge to understand problems, analyse requirements, and build practical technology solutions. With a background in full-stack development and database development, I bring a technical perspective to business analysis and help turn technology and data into meaningful business solutions.
          </p>
          
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary" onClick={handleContactClick}>
              Hire Me
            </a>
            <button className="btn btn-secondary" onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
          
          <div className="social-icons">
            <a href="https://www.instagram.com/falzy_frosh05/#" className="social-icon" aria-label="Instagram">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://wa.me/+447344401147" className="social-icon" aria-label="WhatsApp">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
            <a href="https://x.com/FalzyFrosh" className="social-icon" aria-label="Twitter">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/fawas-surajudeen-6124a1313/" className="social-icon" aria-label="LinkedIn">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://github.com/Fawas124" className="social-icon" aria-label="GitHub">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
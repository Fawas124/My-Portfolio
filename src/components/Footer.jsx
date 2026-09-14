const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <img src="/portfolio.jpg" alt="Logo" className="footer-logo" />
            <p>
              I combine software engineering, business, and data analytics to
              understand problems and create practical technology solutions.
              Let's turn ideas, data, and business needs into solutions that
              make a real impact.
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/falzy_frosh05/#"
                className="social-icon"
                aria-label="Instagram"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a
                href="https://wa.me/+447344401147"
                className="social-icon"
                aria-label="WhatsApp"
              >
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
              <a
                href="https://x.com/FalzyFrosh"
                className="social-icon"
                aria-label="Twitter"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a
                href="https://www.linkedin.com/in/fawas-surajudeen-6124a1313/"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a
                href="https://github.com/Fawas124"
                className="social-icon"
                aria-label="GitHub"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>
              <ion-icon name="mail-outline"></ion-icon>
              fawassurajudeen16@gmail.com
            </p>
            <p>
              <ion-icon name="call-outline"></ion-icon>
              +44 7344 401147
            </p>
            <p>
              <ion-icon name="location-outline"></ion-icon>
              London, United Kingdom
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Fawas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

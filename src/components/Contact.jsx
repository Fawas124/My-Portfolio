import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://formspree.io/f/meollwzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="success-message">
            <ion-icon name="checkmark-circle"></ion-icon>
            Thank you for your message! I will get back to you soon.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="error-message">
            <ion-icon name="alert-circle"></ion-icon>
            Sorry, there was an error sending your message. Please try again or contact me directly.
          </div>
        )}
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>fawassurajudeen16@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <ion-icon name="call-outline"></ion-icon>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+234 904 305 1807</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </div>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <p>+234 904 305 1807</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <ion-icon name="time-outline"></ion-icon>
                    Sending...
                  </>
                ) : (
                  <>
                    <ion-icon name="send-outline"></ion-icon>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
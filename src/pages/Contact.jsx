import '../styles/contact.css';
import { Phone, MapPin, Mail } from 'lucide-react';
import { FadeUp, SlideInLeft, SlideInRight } from '../components/Animations';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Parallax */}
      <section className="parallax-section contact-hero">
        <FadeUp className="hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today.</p>
        </FadeUp>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-container">
          <div className="contact-grid">
            <SlideInLeft className="contact-info-card" delay={0.2}>
              <div className="info-item">
                <h3><Phone size={20} /> Phone</h3>
                <p>+91 93211 26141</p>
              </div>
              <div className="info-item">
                <h3><MapPin size={20} /> Location</h3>
                <p>A-812 MIDC Khairane, Thane-Belapur Rd,<br />TTC Industrial Area, Kopar Khairane,<br />Navi Mumbai, Maharashtra 400705</p>
              </div>
              <div className="info-item">
                <h3><Mail size={20} /> Email</h3>
                <p>sales@vanduspices.in</p>
                <p>customercare@vanduspices.in</p>
              </div>
            </SlideInLeft>

            <SlideInRight className="contact-form" delay={0.2}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </SlideInRight>
          </div>
        </div>
      </section>
      
      {/* Optional Map Parallax or Image */}
       <section className="parallax-section contact-map-parallax">
        {/* Visual break */}
      </section>
    </div>
  );
};

export default Contact;

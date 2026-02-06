import '../styles/prefooter.css';
import { FadeUp, ZoomIn, StaggerContainer, StaggerItem } from './Animations';
import logo from '../assets/logo.jpeg';

const PreFooter = () => {
  return (
    <div className="pre-footer">
      {/* Top Banner with Walnuts */}
      <div className="contact-banner">
        {/* Left Walnut Image (Background) */}
        
        <StaggerContainer className="contact-details-container">
          <StaggerItem className="contact-col">
            <h3>Phone:</h3>
            <p>+91 93211 26141</p>
          </StaggerItem>
          
          <StaggerItem className="contact-col">
            <h3>Location:</h3>
            <p>A-812 MIDC Khairane, Thane-Belapur Rd, TTC Industrial Area, Kopar Khairane, Navi Mumbai, Maharashtra 400705</p>
          </StaggerItem>
          
          <StaggerItem className="contact-col">
            <h3>Email:</h3>
            <p>sales@vanduspices.in</p>
            <p>customercare@vanduspices.in</p>
          </StaggerItem>
        </StaggerContainer>

        {/* Right Walnut Image (Background) */}
      </div>

      {/* Bottom Promise Section */}
      <div className="promise-section">
        <div className="promise-container">
          <FadeUp className="promise-text">
            <h3>Our Promise:</h3>
            <p>
              At NourVeda, we are driven by a passion for excellence 
              and a dedication to customer satisfaction. Whether you are a wholesaler, retailer, 
              or distributor, we strive to exceed your expectations with every order.
            </p>
          </FadeUp>
          <ZoomIn className="promise-logo" delay={0.3}>
             {/* Logo Placeholder - Circle with text */}
             <div className="logo-circle">
               <img src={logo} alt="NourVeda" />
             </div>
          </ZoomIn>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;

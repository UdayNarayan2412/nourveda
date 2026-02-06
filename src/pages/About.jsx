import '../styles/about.css';
import { FadeUp, StaggerContainer, StaggerItem, ZoomIn } from '../components/Animations';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Parallax */}
      <section className="parallax-section about-hero">
        <FadeUp className="hero-content">
          <h1>About Us</h1>
          <p>A Legacy of Quality and Trust Since the 1950s</p>
        </FadeUp>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-container">
          <FadeUp>
            <h2>Who We Are</h2>
            <p>
              NourVeda stands as a beacon of excellence in the world of 
              premium dry fruits and spices. With roots tracing back to the 1950s, our legacy is built 
              on a foundation of unwavering quality and trust.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p>
              We are dedicated to sourcing the finest ingredients from around the globe, ensuring that 
              every product that bears our name meets the highest standards of purity and flavor. 
              Our commitment extends beyond just business; it is a passion for delivering health and 
              luxury to your doorstep.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mid Page Parallax Break */}
      <section className="parallax-section about-mid-parallax">
        <ZoomIn className="hero-content">
          <h2>Experience the Purity</h2>
        </ZoomIn>
      </section>

      {/* Mission & Vision Section */}
      <section className="content-section">
        <div className="content-container">
          <StaggerContainer className="mission-grid">
            <StaggerItem className="mission-card">
              <h3>Our Mission</h3>
              <p>To provide our customers with the finest quality dry fruits and spices, enriching their lives with health, flavor, and luxury.</p>
            </StaggerItem>
            <StaggerItem className="mission-card">
              <h3>Our Vision</h3>
              <p>To be the global leader in the premium dry fruits and spices market, recognized for our commitment to quality, authenticity, and customer satisfaction.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default About;

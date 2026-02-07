import '../styles/home.css';
import { Link } from 'react-router-dom';
import { FadeUp, StaggerContainer, StaggerItem, FadeIn } from '../components/Animations';

const Home = () => {
  return (
    <div className="home-page">
      {/* Task 1 & 2: Fixed Banner Section */}
      <section className="parallax-section hero">
        <FadeUp className="hero-content" duration={0.8}>
          <h1>Luxury in Every Bite: Premium Dry Fruits and Spices</h1>
          <p>Experience the finest in premium dry fruits and exotic spices.</p>
        </FadeUp>
      </section>

      {/* Content Section (Scrolls over) */}
      <section className="content-section">
        <div className="content-container">
          <FadeUp>
            <h2>Welcome to NourVeda</h2>
            <p>
              Experience the finest in premium dry fruits and exotic spices with NourVeda. 
              Our meticulously curated selection embodies luxury, quality, and unparalleled taste.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p>
              Our handpicked almonds, pistachios, cashews, raisins, and walnuts embody the pinnacle of quality and richness. 
              Elevate your culinary creations with our premium whole and ground spices, each curated for exceptional freshness and aroma. 
              NourVeda is your gateway to indulgence, offering a sublime blend of opulence and health.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Task 3: Second Parallax Section */}
      <section className="parallax-section feature-parallax">
        <FadeUp className="hero-content" duration={0.8}>
          <h1>Quality And Flavour Bundled In Every Pack</h1>
          {/* <p>Experience the finest in premium dry fruits and exotic spices.</p> */}
        </FadeUp>
      </section>

      {/* Competency Section */}
      <section className="content-section">
        <div className="content-container">
          <FadeUp>
            <h2>Our Competency</h2>
          </FadeUp>
          
          <StaggerContainer className="competency-grid">
            <StaggerItem className="competency-card">
              <h3>Uncompromising Quality and Authenticity:</h3>
              <p>NourVeda sources only the highest quality products directly from the most reputed exporters worldwide. Our commitment to authenticity ensures that every spice and dry fruit is pure, flavorful, and free from tampering or adulteration.</p>
            </StaggerItem>
            <StaggerItem className="competency-card">
              <h3>Strong Pedigree and Global Reach:</h3>
              <p>With legacy dating back to 1950s, and deep understanding of global spice markets, NourVeda brings decades of expertise in the spice and dry fruit industry. We source products directly from top producers and manufacturers across geographies.</p>
            </StaggerItem>
            <StaggerItem className="competency-card">
              <h3>Diverse and Exquisite Product Range:</h3>
              <p>We pride ourselves on offering premium quality products from exotic spices to premium dry fruits. NourVeda offers a diverse selection of products. Our meticulous selection process and innovative blends cater to both everyday cooking and gourmet culinary needs.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default Home;

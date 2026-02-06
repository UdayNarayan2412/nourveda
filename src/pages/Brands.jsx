import '../styles/brands.css';
import { FadeUp } from '../components/Animations';

const Brands = () => {
  return (
    <div className="brands-page">
      {/* Hero Parallax */}
      <section className="parallax-section brands-hero">
        <FadeUp className="hero-content">
          <h1>Our Brands</h1>
          <p>Delivering Excellence Through Trusted Names</p>
        </FadeUp>
      </section>

      {/* Intro Section */}
      <section className="content-section">
        <div className="content-container">
          <FadeUp>
            <h2>A Portfolio of Excellence</h2>
            <p>
              We are proud to present our flagship brands, each representing a unique facet of our commitment 
              to quality and taste. Whether it's the authentic heat of our spices or the savory crunch of our snacks, 
              our brands are a testament to our dedication to customer satisfaction.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Brand 1: Vandu Spices */}
      <section className="parallax-section vandu-parallax">
        <FadeUp className="hero-content">
          <h2>Vandu Spices</h2>
          <p>Authentic Indian Masalas & Blends</p>
        </FadeUp>
      </section>

      <section className="content-section">
        <div className="content-container">
          <FadeUp>
            <h3>The Essence of Tradition</h3>
            <p>
              Vandu Spices brings you the authentic taste of India. Our masalas and blends are crafted using traditional recipes 
              passed down through generations. We select only the finest whole spices, roasting and grinding them to perfection 
              to preserve their natural oils and aroma. From the fiery heat of our chili powder to the complex notes of our garam masala, 
              Vandu Spices adds magic to every meal.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Brand 2: FRYD Foods */}
      <section className="parallax-section fryd-parallax">
        <FadeUp className="hero-content">
          <h2>FRYD Foods</h2>
          <p>Premium Ready-to-Eat Snacks</p>
        </FadeUp>
      </section>

      <section className="content-section">
        <div className="content-container">
          <FadeUp>
            <h3>Snacking Redefined</h3>
            <p>
              FRYD Foods is all about indulgence without compromise. Our range of ready-to-eat snacks is made from premium quality ingredients, 
              fried to crispy perfection. Whether you're craving something savory or spicy, FRYD Foods has the perfect snack for every mood. 
              Enjoy the irresistible taste of our snacks, perfect for parties, movie nights, or just a quick treat.
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Brands;

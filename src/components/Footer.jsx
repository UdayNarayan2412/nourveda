import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NourVeda</h3>
          <p>Experience the finest in premium dry fruits and exotic spices.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/brands">Our Brands</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shop">Product</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>A-812 MIDC Khairane, Thane-Belapur Rd, Navi Mumbai, Maharashtra 400705</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NourVeda. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

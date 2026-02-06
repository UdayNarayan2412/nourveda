import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, LogOut, Package, Settings } from 'lucide-react';
import logo from '../assets/logo.jpeg';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ onOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { state, dispatch } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const profileRef = useRef(null);

  const cartItemCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setIsProfileOpen(false);
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  const handleProfileClick = () => {
    if (currentUser) {
      setIsProfileOpen(!isProfileOpen);
    } else {
      onOpenAuth();
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="NourVeda" />
      </Link>
      
      {/* Desktop Links - Hidden on Mobile */}
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
        <li><Link to="/brands" onClick={() => setIsOpen(false)}>Our Brands</Link></li>
        <li><Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
      </ul>

      {/* Right Side Actions - Always Visible */}
      <div className="navbar-actions">
        <button 
          onClick={() => dispatch({ type: 'TOGGLE_CART' })} 
          className="nav-icon-btn" 
          aria-label="Cart"
        >
          <ShoppingBag size={24} />
          {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
        </button>
        
        <div className="profile-container" ref={profileRef}>
          <button 
            onClick={handleProfileClick} 
            className="nav-icon-btn profile-btn" 
            aria-label="Account"
          >
            {currentUser ? (
              <div className="user-avatar-circle">
                {getInitials(currentUser.displayName || currentUser.email)}
              </div>
            ) : (
              <User size={24} />
            )}
          </button>

          {/* Profile Dropdown */}
          {currentUser && isProfileOpen && (
            <div className="profile-dropdown">
              <Link to="/profile" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>
                <User size={16} /> Profile
              </Link>
              <Link to="/orders" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>
                <Package size={16} /> My Orders
              </Link>
              <Link to="/settings" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>
                <Settings size={16} /> Settings
              </Link>
              <div className="dropdown-divider"></div>
              <button onClick={handleLogout} className="dropdown-item logout-item">
                <LogOut size={16} /> Sign out
              </button>
            </div>
          )}
        </div>

        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

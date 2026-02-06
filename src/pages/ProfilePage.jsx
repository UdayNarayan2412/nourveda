import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { User, Phone, MapPin, Search } from 'lucide-react';
import '../styles/profile.css';

const ProfilePage = () => {
  const { currentUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    displayName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  useEffect(() => {
    if (currentUser) {
      // Load extra details from local storage
      const savedDetails = JSON.parse(localStorage.getItem(`user_details_${currentUser.uid}`)) || {};
      
      setFormData({
        displayName: currentUser.displayName || '',
        phone: savedDetails.phone || '',
        address: savedDetails.address || '',
        city: savedDetails.city || '',
        state: savedDetails.state || '',
        zipCode: savedDetails.zipCode || ''
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage('');
    try {
      // Update Firebase Profile for Display Name
      if (formData.displayName !== currentUser.displayName) {
        await updateUserProfile({ displayName: formData.displayName });
      }

      // Save other details to Local Storage
      const detailsToSave = {
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode
      };
      localStorage.setItem(`user_details_${currentUser.uid}`, JSON.stringify(detailsToSave));
      
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage('Failed to update profile.');
    }
    setLoading(false);
  };

  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //     navigate('/');
  //   } catch (error) {
  //     console.error("Failed to log out", error);
  //   }
  // };

  if (!currentUser) return <div className="auth-warning">Please login to view profile.</div>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Header Section */}
        <div className="profile-header-section">
          <div className="profile-user-info">
            <div className="profile-avatar-circle">
              {(currentUser.displayName || currentUser.email || 'U')[0].toUpperCase()}
            </div>
            <div className="profile-text">
              <h2>Your Profile</h2>
              <p>{currentUser.email}</p>
            </div>
          </div>
          <button className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
        </div>

        {message && <div className="success-message">{message}</div>}

        {/* Personal Information */}
        <div className="profile-section">
          <h3>Personal Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Display Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input 
                  type="text" 
                  name="displayName" 
                  value={formData.displayName} 
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <div className="input-with-icon">
                <Phone size={18} className="input-icon" />
                <input 
                  type="text" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="profile-section">
          <h3>Address</h3>
          <div className="form-group full-width">
            <label>Street Address</label>
            <div className="input-with-icon">
              <MapPin size={18} className="input-icon" />
              <input 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange}
                placeholder="123 Main St"
              />
            </div>
          </div>
          
          <div className="form-row three-cols">
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange}
                className="simple-input"
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input 
                type="text" 
                name="state" 
                value={formData.state} 
                onChange={handleChange}
                className="simple-input"
              />
            </div>
            <div className="form-group">
              <label>PIN Code</label>
              <input 
                type="text" 
                name="zipCode" 
                value={formData.zipCode} 
                onChange={handleChange}
                className="simple-input"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="profile-footer">
          <button className="save-changes-btn" onClick={handleSave} disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;

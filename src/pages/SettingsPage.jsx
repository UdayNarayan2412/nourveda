import React, { useState } from 'react';
import { Bell, Moon, Globe } from 'lucide-react';
import '../styles/settings.css';

const SettingsPage = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    order: true,
    promotional: false
  });
  
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');

  const handleToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your account preferences and notifications</p>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <Bell size={20} />
            <h2>Notifications</h2>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <h3>Email Notifications</h3>
              <p>Receive emails about your account activity</p>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={notifications.email} 
                onChange={() => handleToggle('email')}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Order Updates</h3>
              <p>Get notified about your order status</p>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={notifications.order} 
                onChange={() => handleToggle('order')}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <h3>Promotional Emails</h3>
              <p>Receive emails about special offers and discounts</p>
            </div>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={notifications.promotional} 
                onChange={() => handleToggle('promotional')}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <Moon size={20} />
            <h2>Appearance</h2>
          </div>
          
          <div className="theme-selector">
            <label>Theme</label>
            <div className="theme-options">
              <button 
                className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
                onClick={() => setTheme('light')}
              >
                Light
              </button>
              <button 
                className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
                onClick={() => setTheme('dark')}
              >
                Dark
              </button>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <Globe size={20} />
            <h2>Language</h2>
          </div>
          
          <div className="language-selector">
            <label>Select Language</label>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        </div>

        <div className="settings-footer">
          <button className="save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

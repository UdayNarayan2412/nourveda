import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/auth.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signUp, signIn, signInWithGoogle, resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      onClose();
    } catch (err) {
      setError('Failed to ' + (isSignUp ? 'sign up' : 'sign in') + ': ' + err.message);
      console.error(err);
    }

    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      onClose();
    } catch (err) {
      setError('Failed to sign in with Google: ' + err.message);
      console.error(err);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError('Please enter your email first');
      return;
    }
    try {
      await resetPassword(email);
      setError('Password reset email sent!');
    } catch (err) {
      setError('Failed to reset password: ' + err.message);
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button onClick={onClose} className="close-auth-btn">
          <X size={24} />
        </button>

        <h2 className="auth-title">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required={isSignUp}
                placeholder="John Doe"
              />
            </div>
          )}

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div className="auth-divider">OR</div>

        <button onClick={handleGoogleSignIn} className="google-btn">
          Sign in with Google
        </button>

        <div className="auth-footer">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="auth-link"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        
        {!isSignUp && (
           <div style={{textAlign: 'center', marginTop: '1rem'}}>
             <button onClick={handleResetPassword} style={{background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '0.85rem'}}>
               Forgot Password?
             </button>
           </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;

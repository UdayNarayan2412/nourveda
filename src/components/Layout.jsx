import Navbar from './Navbar';
import Footer from './Footer';
import PreFooter from './PreFooter';
import Cart from './Cart';
import AuthModal from './AuthModal';
import FloatingActions from './FloatingActions';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const Layout = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <Navbar onOpenAuth={() => setIsAuthOpen(true)} />
      <Cart />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <FloatingActions />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <PreFooter />
      <Footer />
    </>
  );
};

export default Layout;

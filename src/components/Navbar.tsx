import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const navItems = [{
  name: 'Home',
  path: '/'
}, {
  name: 'Event Details',
  path: '/details'
}, {
  name: 'Our Story',
  path: '/story'
}, {
  name: 'Gallery',
  path: '/photos'
}, {
  name: 'RSVP',
  path: '/rsvp'
}, {
  name: 'Guestbook',
  path: '/guestbook'
}];
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  return <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 py-3 shadow-sm backdrop-blur-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <NavLink to="/" className="text-2xl font-cursive font-medium text-lavender-700">A & R</NavLink>

        {/* Desktop menu */}
        <nav className="hidden space-x-6 md:flex">
          {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
          isActive
        }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.name}
            </NavLink>)}
        </nav>

        {/* Mobile menu button */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lavender-700 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.2
      }} className="absolute left-0 right-0 top-full bg-white/95 shadow-md backdrop-blur-sm md:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
            isActive
          }) => `block px-4 py-2 text-center text-lg ${isActive ? 'text-lavender-700' : 'text-foreground/80 hover:text-foreground'}`}>
                  {item.name}
                </NavLink>)}
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Navbar;
// ================================================================
// MARKETING LAYOUT
// Shared layout for all marketing pages with navigation and footer
// ================================================================

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface MarketingLayoutProps {
  children: React.ReactNode;
  showDemoButton?: boolean;
}

export const MarketingLayout: React.FC<MarketingLayoutProps> = ({ 
  children, 
  showDemoButton = true 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAudienceDropdownOpen, setIsAudienceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAudienceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle anchor navigation when URL hash changes
  useEffect(() => {
    // Only handle hash scrolling if we're on the homepage
    if (location.pathname === '/' && location.hash) {
      // Wait for page to render
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          // Calculate position accounting for header
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 80;
          const elementTop = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  // Handle PathIQ click when already on homepage
  const handlePathIQClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('pathiq');
      if (element) {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const elementTop = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementTop,
          behavior: 'smooth'
        });
      }
    }
  };



  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/images/pathfinity-logo-metallic-dark.png" 
                  alt="Pathfinity Logo" 
                  className="w-16 h-16 rounded-lg object-contain"
                />
                <span className="text-xl font-bold text-gray-900 dark:text-white">Pathfinity.ai</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">
                How It Works
              </Link>
              
              <Link 
                to="/#pathiq" 
                onClick={handlePathIQClick}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
              >
                PathIQ™
              </Link>
              
              {/* Audience Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsAudienceDropdownOpen(!isAudienceDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                >
                  <span>Audiences</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAudienceDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAudienceDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 py-2 z-50">
                    <Link 
                      to="/for-students" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400"
                      onClick={() => setIsAudienceDropdownOpen(false)}
                    >
                      👦👧 For Students
                    </Link>
                    <Link 
                      to="/for-parents" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400"
                      onClick={() => setIsAudienceDropdownOpen(false)}
                    >
                      👨‍👩‍👧‍👦 For Parents
                    </Link>
                    <Link 
                      to="/for-teachers" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400"
                      onClick={() => setIsAudienceDropdownOpen(false)}
                    >
                      👩‍🏫 For Teachers
                    </Link>
                    <Link 
                      to="/for-administrators" 
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400"
                      onClick={() => setIsAudienceDropdownOpen(false)}
                    >
                      👔 For Admins
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">
                About
              </Link>
              <Link to="/research" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">
                Research
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              
              {showDemoButton && (
                <a
                  href="https://app.pathfinity.ai"
                  className="px-4 py-2 text-purple-600 dark:text-purple-400 border border-purple-300 dark:border-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors font-medium"
                >
                  Try Demo
                </a>
              )}
              
              {/* Subscriber Login Button */}
              <a
                href="https://app.pathfinity.ai/login"
                className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                Login
              </a>
              
              <Link 
                to="/waitlist"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-3 space-y-3">
              <Link 
                to="/how-it-works" 
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/#pathiq" 
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                onClick={(e) => {
                  handlePathIQClick(e);
                  setIsMobileMenuOpen(false);
                }}
              >
                PathIQ™
              </Link>
              <Link 
                to="/for-students" 
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                👦👧 For Students
              </Link>
              <Link 
                to="/for-parents" 
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                👨‍👩‍👧‍👦 For Parents
              </Link>
              <Link 
                to="/for-teachers" 
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                👩‍🏫 For Teachers
              </Link>
              <Link 
                to="/for-administrators" 
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                👔 For Administrators
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/research" 
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Research
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                
                {showDemoButton && (
                  <a
                    href="https://app.pathfinity.ai"
                    className="block text-center px-4 py-2 text-purple-600 dark:text-purple-400 border border-purple-300 dark:border-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Try Demo
                  </a>
                )}
                
                {/* Subscriber Login Button - Mobile */}
                <a
                  href="https://app.pathfinity.ai/login"
                  className="block text-center px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </a>
                
                <Link 
                  to="/waitlist"
                  className="block text-center px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Domain Welcome Banner */}

      {/* Main Content - Add padding-top to account for fixed header */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/images/pathfinity-logo-metallic-dark.png" 
                  alt="Pathfinity Logo" 
                  className="w-16 h-16 rounded-lg object-contain"
                />
                <span className="text-xl font-bold">Pathfinity.ai</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Where learning meets real life. Transform education into adventure.
              </p>
              <div className="mt-4">
                <img 
                  src="/images/powered-by-esposure-white.png" 
                  alt="Powered by Esposure™, Inc" 
                  className="h-8 w-auto"
                />
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/#pathiq" className="hover:text-white transition-colors">PathIQ™ Intelligence System</Link></li>
                <li><Link to="/how-it-works#how-pathfinity-works" className="hover:text-white transition-colors">How Pathfinity.ai Works</Link></li>
                <li><a href="https://app.pathfinity.ai" className="hover:text-white transition-colors">Choose Your Demo Experience</a></li>
                <li><Link to="/research#science-behind-pathfinity" className="hover:text-white transition-colors">The Science Behind Pathfinity.ai</Link></li>
              </ul>
            </div>

            {/* Audiences */}
            <div>
              <h3 className="font-semibold mb-4">Audiences</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/for-students#level-up-learning" className="hover:text-white transition-colors">Students</Link></li>
                <li><Link to="/for-parents#end-homework-battles" className="hover:text-white transition-colors">Parents</Link></li>
                <li><Link to="/for-teachers#data-driven-differentiation" className="hover:text-white transition-colors">Teachers</Link></li>
                <li><Link to="/for-administrators#strategic-innovation" className="hover:text-white transition-colors">Administrators</Link></li>
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h3 className="font-semibold mb-4">Get Started</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/waitlist#join-learning-revolution" className="hover:text-white transition-colors">Join Waitlist</Link></li>
                <li><Link to="/about#about-pathfinity" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact#get-in-touch" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy-policy#privacy-policy-top" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2024 Pathfinity.ai. All rights reserved.</p>
            <div className="mt-4 flex items-center justify-center">
              <span className="text-xs text-gray-500 mr-2">A product of</span>
              <img 
                src="/images/esposure-logo-white.png" 
                alt="Esposure™, Inc" 
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingLayout;
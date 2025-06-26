import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p className="mb-2 sm:mb-0">
          &copy; {currentYear} Commerce Command Center. All Rights Reserved.
        </p>
        <nav className="flex gap-4">
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/support" className="hover:text-primary transition-colors">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
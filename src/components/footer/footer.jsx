import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = ({links}) => {
  return (
    <footer>
      <div className="footer-container">
      
        
       
      <div className="quick-links">
        {links.map((link,index) => (
          <Link to={link.dest}
          className='link'
          key={index}>
            {link.name}
          </Link>
        ))}
        </div>
   
       
      </div>

      <p>Q3 Creations 2024</p>
    
    </footer>
  );
};

export default Footer;
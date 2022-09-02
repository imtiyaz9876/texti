import React from 'react';
import "./css/footer.css";

function Footer() {
    const today = new Date();
    
    console.log(today.getFullYear());

  return (
      <div className="footer-text">
        <p> copyright &copy; 2022</p>
      </div>
  );
}

export default Footer;
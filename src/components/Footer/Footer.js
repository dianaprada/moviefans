/**
 * Import Components
 */
 import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

 /**
  * @method Footer
  * @description: Footer - Menu component
  */
 
 const Footer = () => {
   return (
       <footer className="footer" aria-label="Footer" id="footer">
        <p className="footer__p">
          Follow us:
        </p>
        <div className="footer__socialmedia">
          <div>
            <a href="https://www.facebook.com/" target="_blank">
            <FontAwesomeIcon icon={faFacebookF} className="card__rate--star"/> 
            </a>
          </div>
          <div>
            <a href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="card__rate--star"/>  </a>
          </div>
          <div>
            <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="card__rate--star"/>  </a>
          </div>
          <div>
            <a href="https://www.youtube.com/" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className="card__rate--star"/>  </a>
          </div>
        </div>
        <p className="footer__copyright">
          © MovieFans 2021 All Rights Reserved.
        </p>
      </footer>  
   );
 };
 
 export default Footer;
 
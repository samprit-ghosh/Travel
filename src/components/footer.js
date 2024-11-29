import React from 'react';
// import  './App.css';

const Footer = () => {


    return (

<footer className="footer" role="contentinfo" itemScope itemType="http://schema.org/Person">
            <div className="footer-left" itemScope itemType="http://schema.org/Person">
              <img src="https://blogger.googleusercontent.com/img/a/AVvXsEiX_A56Zyh-QLWDJ-1Ugpp732H8h6l0yuCSXPFl2Nf8N0zUb8WKryx4MQPk0gYtsBW5QWHOWVfGwQawGSGjCVIh0vEsih7bqGGEjO7XVI0aGVC5GWVsRMmTLcmrf3_QeLysrpaAZzXIfA375a5ohMaBXh-Pzq3vA-YVLFHiRwkDRrn0aMu_HnnqD7zCr3Vr=s300" alt="Profile Picture" itemProp="image" className="u-logo logo" />
              <h3 itemProp="name" className="p-name">Samprit Ghosh</h3>
              <p className="p-job-title" itemProp="jobTitle">Travel Agency</p>
              <nav aria-label="Footer Navigation">
                <p className="footer-links">
                  <a href="#" itemProp="url" className="link-1">Home</a>
                  <a href="#" itemProp="url">Blog</a>
                  <a href="#" itemProp="url">Tour</a>
                  <a href="#" itemProp="url">Contact</a>
                </p>
              </nav>
              <p className="footer-name">© 2024 Samprit Ghosh</p>
            </div>
            <div className="footer-center">
              <div itemScope itemType="http://schema.org/PostalAddress" className="p-address">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <p >
                  <span itemProp="streetAddress" className="p-street-address" style={{color:'white'}}>8 No P.B Road</span>
                  <span itemProp="addressLocality" className="p-locality" style={{color:'white'}}>Behala , Charaktala</span>
                  <span itemProp="addressRegion" className="p-region" style={{color:'white'}}>West Bengal</span>
                  <span itemProp="postalCode" className="p-postal-code" style={{color:'white'}}>700034</span>
                </p>
              </div>
              <div>
                <i className="fa fa-phone" aria-hidden="true" />
                <p itemProp="telephone" className="p-tel">+91 9123353984</p>
              </div>
              <div>
                <i className="fa fa-envelope" aria-hidden="true" />
                <p><a href="mailto:myname@mail.com" itemProp="email" className="u-email">sampritghosh310@gmail.com</a></p>
              </div>
            </div>
            <div className="footer-right">
              <p className="footer-about">
                <span>About Me</span>
            I manages a business that specializes in planning, organizing, and booking travel experiences for clients.
              </p>
              <div className="footer-socials">
                <a href="#" rel="me" aria-label="LinkedIn" itemProp="sameAs" className="u-url"><i className="fab fa-linkedin" /></a>
                <a href="#" rel="me" aria-label="GitHub" itemProp="sameAs" className="u-url"><i className="fab fa-github" /></a>
                <a href="#" rel="me" aria-label="Twitter" itemProp="sameAs" className="u-url"><i className="fab fa-x-twitter" /></a>
                <a href="#" rel="me" aria-label="Mastodon" itemProp="sameAs" className="u-url"><i className="fab  fa-mastodon" /></a>
                <a href="#" rel="me" aria-label="Threads" itemProp="sameAs" className="u-url"><i className="fab fa-threads" /></a>
                <a href="#" rel="me" aria-label="Facebook" itemProp="sameAs" className="u-url"><i className="fab fa-facebook" /></a>
                <a href="#" rel="me" aria-label="Instagram" itemProp="sameAs" className="u-url"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </footer>

);
};

export default Footer;
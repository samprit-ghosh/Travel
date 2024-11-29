import React, { useState } from "react";

import '../components/contact.css';
// import Footer from './footer';



const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
<>


    <div style={{ backgroundColor: "rgb(75, 71, 71)", color: "white", padding: "20px" }} className="contact-main">
      <form className="my-form">
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <h1 style={{ color: "white" }}>Get in Touch!</h1>
          <br />
          <ul style={{ marginLeft: 0, paddingLeft: 0, listStyle: "none" }}>
            <li>
              <div className="grid grid-2">
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Surname" required />
              </div>
            </li>
            <li>
              <div className="grid grid-2">
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" />
              </div>
            </li>
            <li>
              <textarea placeholder="Message"></textarea>
            </li>
            <li>
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
         
              <label htmlFor="terms">
                &nbsp;I have read and agreed with <a href="#" className="term-text">the terms and conditions.</a>
              </label>
            </li>
            <li>
              <div className="grid grid-3">
                <div className="required-msg">REQUIRED FIELDS</div>
                <button className="btn-grid" type="submit" disabled={!isChecked}>
                  <span className="back">
                    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                  </span>
                  <span className="front">SUBMIT</span>
                </button>
                <button className="btn-grid" type="reset" disabled={!isChecked}>
                  <span className="back">
                    {/* <FontAwesomeIcon icon={faEraser} /> */}
                  </span>
                  <span className="front">RESET</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
 

    </>
  );
};

export default Contact;

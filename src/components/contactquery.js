// import { database } from "./firebaseConfig"; // Correctly import database instance
// import { ref, push, set } from "firebase/database"; // Import Firebase database functions
// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     destination: "",
//     phoneno: "",
//     groupSize: "",
//   });

//   const [alertVisible, setAlertVisible] = useState(false);

//   // Handle input changes for text fields
//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   // Handle radio button changes
//   const handleRadioChange = (e) => {
//     setFormData({ ...formData, groupSize: e.target.value });
//   };

//   // Save messages to Firebase Realtime Database
//   const saveMessages = async (name, destination, phoneno, groupSize) => {
//     try {
//       const contactFormDB = ref(database, "credit"); // Get reference to "credit" node
//       const newContactForm = push(contactFormDB); // Create a new unique child
//       await set(newContactForm, {
//         name,
//         destination,
//         phoneno,
//         groupSize,
//       });
//     } catch (error) {
//       console.error("Error saving message to database:", error);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { name, destination, phoneno, groupSize } = formData;

//     // Save data to Firebase
//     await saveMessages(name, destination, phoneno, groupSize || "Not specified");

//     // Show success alert
//     setAlertVisible(true);
//     setTimeout(() => setAlertVisible(false), 3000);

//     // Reset form data
//     setFormData({
//       name: "",
//       destination: "",
//       phoneno: "",
//       groupSize: "",
//     });
//   };

//   return (
  

//     <section className="section-book ">
//     <div className="row-query">
//       <div className="book">
//         <div className="book__form">
//       <form id="contactForm" onSubmit={handleSubmit}>
//         <br></br>
//         {alertVisible && <div className="alert-query">Your message has been sent!</div>}
//         <div className="u-margin-bottom-medium">
//                       <br></br>
//                       <h2 className="heading-secondary">
//                       <br></br>
//                         Start booking now
//                       </h2>
//                     </div>
//         {/* Input for Name */}
//         <div className="form__group">
//           <input
//             type="text"
//             id="name"
//             placeholder="Your name..."
//             className="form__input"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//           />
//              <label htmlFor="name" className="form__label">Full name</label>
//         </div>

//         {/* Input for Destination */}
//         <div className="form__group">
//           <input
//             type="text"
//             id="destination"
//             className="form__input"
//             placeholder="Your destination..."
//             value={formData.destination}
//             onChange={handleInputChange}
//             required
//           />
//              <label htmlFor="name" className="form__label">Destination</label>
//         </div>

//         {/* Input for Phone Number */}
//         <div className="form__group">
//           <input
//             type="text"
//             id="phoneno"
//             className="form__input"
//             placeholder="Your phone number..."
//             value={formData.phoneno}
//             onChange={handleInputChange}
//             required
//           />
//                                 <label htmlFor="tel" className="form__label">Phone Number</label>

//         </div>

//         {/* Radio Buttons for Group Size */}
//         <div className="form__group u-margin-bottom-medium">
//         <div className="form__radio-group">
         
//             <input
//               type="radio"
//               className="form__radio-input" 
//               id="small"
//               name="groupSize"
//               value="Small Group"
//               checked={formData.groupSize === "Small Group"}
//               onChange={handleRadioChange}
//             />
//           <label htmlFor="small" className="form__radio-label">
//                           <span className="form__radio-button" />
//                           Small tour group
//                         </label>
//                         </div>
//                         <div className="form__radio-group">
//             <input
//               type="radio"
//               id="large"
//               className="form__radio-input"
//               name="groupSize"
//               value="Large Group"
//               checked={formData.groupSize === "Large Group"}
//               onChange={handleRadioChange}
//             />
//     <label htmlFor="large" className="form__radio-label">
//                           <span className="form__radio-button" />
//                           Large tour group
//                         </label>
//                       </div>
//         </div>

//         {/* Submit Button */}
//         <div className="form__group">
//           <button type="submit" className="cta-button">Next step →</button>
//           <br></br>
//                <br></br>
//                <br></br>
                    
//         </div>
//       </form>
//     </div>
//      </div>
//     </div>

//     </section>
    
//   );
// };

// export default ContactForm;






import { database } from "./firebaseConfig"; // Import database instance
import { ref, push, set } from "firebase/database"; // Import Firebase database functions
import React, { useState } from "react";

// Function to fetch the user's IP address
const getVisitorIp = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip; // Return the fetched IP address
  } catch (error) {
    console.error("Failed to fetch IP:", error);
    return null;
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    phoneno: "",
    groupSize: "",
  });

  const [alertVisible, setAlertVisible] = useState(false);

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle radio button changes
  const handleRadioChange = (e) => {
    setFormData({ ...formData, groupSize: e.target.value });
  };

  // Save messages to Firebase Realtime Database
  const saveMessages = async (name, destination, phoneno, groupSize, ip) => {
    try {
      const contactFormDB = ref(database, "credit"); // Get reference to "credit" node
      const newContactForm = push(contactFormDB); // Create a new unique child
      await set(newContactForm, {
        name,
        destination,
        phoneno,
        groupSize,
        ipAddress: ip, // Store IP address along with form data
      });
    } catch (error) {
      console.error("Error saving message to database:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, destination, phoneno, groupSize } = formData;
    const ip = await getVisitorIp(); // Fetch the IP address when form is submitted

    // Save data to Firebase
    await saveMessages(name, destination, phoneno, groupSize || "Not specified", ip);

    // Show success alert
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);

    // Reset form data
    setFormData({
      name: "",
      destination: "",
      phoneno: "",
      groupSize: "",
    });
  };

  return (
    <section className="section-book">
      <div className="row-query">
        <div className="book">
          <div className="book__form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <br />
              {alertVisible && <div className="alert-query">Your message has been sent!</div>}
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>

              {/* Input for Name */}
              <div className="form__group">
                <input
                  type="text"
                  id="name"
                  placeholder="Your name..."
                  className="form__input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="name" className="form__label">Full name</label>
              </div>

              {/* Input for Destination */}
              <div className="form__group">
                <input
                  type="text"
                  id="destination"
                  className="form__input"
                  placeholder="Your destination..."
                  value={formData.destination}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="destination" className="form__label">Destination</label>
              </div>

              {/* Input for Phone Number */}
              <div className="form__group">
                <input
                  type="text"
                  id="phoneno"
                  className="form__input"
                  placeholder="Your phone number..."
                  value={formData.phoneno}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="phoneno" className="form__label">Phone Number</label>
              </div>

              {/* Radio Buttons for Group Size */}
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="groupSize"
                    value="Small Group"
                    checked={formData.groupSize === "Small Group"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button" />
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    id="large"
                    className="form__radio-input"
                    name="groupSize"
                    value="Large Group"
                    checked={formData.groupSize === "Large Group"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button" />
                    Large tour group
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form__group">
                <button type="submit" className="cta-button">Next step →</button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import React from "react";
import "./components/query.css"
import Contact from "./components/Contact";
import ImageSlider from "./components/heroQuery"
import ScrollToTopButton from "./components/scroll-top";
import ContactForm from "./components/contactquery";


// import ContactForm from "./components/contactquery";

function TravelSlider() {

    return (






      <html className="html-query">
<ImageSlider></ImageSlider>
      <div className="bg-cl">
      
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="shortcut icon" type="image/png" href="https://i.imgur.com/ZN82y7l.png" />
        <title>Natours | Exciting tours for adventurous people</title>
        <main className="main-query ">
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Exciting tours for adventurous people
              </h2>
            </div>
            <div className="row-query">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                <p className="paragraph-query">
                
Ah! Nature is an endless source of inspiration and wonder! There's so much to fall in love with. What part of nature speaks to your soul the most? 🌿🌊✨
                </p>
                <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                <p className="paragraph-query">
                Absolutely! Life is too short not to embrace adventure. 

What's an adventure you've always dreamed of taking? 🚀🌍
                </p>
                <a href="#" className="cta-button">Learn more →</a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img srcSet="https://i.imgur.com/R4M3ZbH.jpg 300w, https://i.imgur.com/RptMsPW.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 1" className="composition__photo composition__photo--p1" src="https://i.imgur.com/RptMsPW.jpg" />
                  <img srcSet="https://i.imgur.com/Lt6TELV.jpg 300w, https://i.imgur.com/uGKsDxD.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 2" className="composition__photo composition__photo--p2" src="https://i.imgur.com/uGKsDxD.jpg" />
                  <img srcSet="https://i.imgur.com/hZ6aCl4.jpg 300w, https://i.imgur.com/qAYGA2p.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo 3" className="composition__photo composition__photo--p3" src="https://i.imgur.com/qAYGA2p.jpg" />
                  {/*
                            <img src="img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
                            <img src="img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
                            <img src="img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
                            */}
                </div>
              </div>
            </div>
          </section>



<ContactForm></ContactForm>


          <section className="section-features">
            <div className="row-query">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                  <p className="feature-box__text">
                  Ready to explore the world? Whether you're dreaming of far-off lands or planning your next local getaway, let's dive into the wonders our planet has to offer.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                  <p className="feature-box__text">
                  Nature offers a plethora of benefits for both our physical and mental health. Spending time outdoors can reduce stress, improve mood, boost creativity.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                  <p className="feature-box__text">
                  It's okay to feel lost sometimes. Everyone experiences periods of uncertainty. The key is to find your way back to yourself and your path.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart" />
                  <h3 className="heading-tertiary u-margin-bottom-small">Live a healthy life</h3>
                  <p className="feature-box__text">
                  Eat a Balanced Diet: Prioritize fruits, vegetables, whole grains, lean proteins, and healthy fats. Hydrate: Drink plenty of water throughout the day.

  
                  </p>
                </div>
              </div>
            </div>
          </section>
{/* <ContactForm></ContactForm> */}


          
      
        </main>
    
      </div>
      <div className="sc-y">
      <Contact className="qr-ct-cl"></Contact>
      <br></br>
      <ScrollToTopButton></ScrollToTopButton>
      </div>

      {/* <br></br> <br></br> <br></br> */}
      </html>


    );
  }
export default TravelSlider;
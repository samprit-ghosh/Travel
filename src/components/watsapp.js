
import { FaWhatsapp } from 'react-icons/fa';
import backgroundVideo1 from './video.mp4'; // Update to the correct path
import backgroundVideo2 from './video1.mp4'; // Update to the correct path

import React, { useState, useEffect , useRef  } from 'react';


const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/9123353984" // Replace with your WhatsApp number
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} color="#25D366" /> {/* Adjust size and color as needed */}
    </a>
  );
};

export default WhatsappIcon;

// const HeroSection = () => {
//   useEffect(() => {
   
//     const overlay = document.querySelector('.overlay');
//     overlay.classList.add('fade-in');
//   }, []);

//   return (
//     <section className="hero-section">
//       <video autoPlay muted loop className="background-video">
//         <source src={backgroundVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="overlay">
//         <h1>Your Catchy Headline</h1>
//         <p>Your engaging subheading goes here.</p>
//         <a href="#your-link" className="cta-button">Get Started</a>
//       </div>
//     </section>
//   );
// };

// export {HeroSection};









const HeroSection = () => {
  // Define video file paths here
  const videoSources = [backgroundVideo1, backgroundVideo2];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  // Function to go to a specific video when a dot is clicked
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Automatically transition to the next video
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [videoSources.length]);

  // Handle autoplay for the current video only
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          const playPromise = video.play(); // Play the current video
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.warn("Autoplay failed. Interaction may be needed.", error);
            });
          }
        } else {
          video.pause(); // Pause other videos
          video.currentTime = 0; // Reset time
        }
      }
    });
  }, [currentIndex]);

  // Pause videos when the tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRefs.current.forEach((video) => video?.pause());
      } else {
        videoRefs.current[currentIndex]?.play().catch((error) => {
          console.warn("Autoplay failed on tab visibility change:", error);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [currentIndex]);

  return (
    <div className="slider-container">
      {videoSources.map((videoSrc, index) => (
        <video
          key={index}
          ref={(el) => (videoRefs.current[index] = el)} // Store each video reference
          src={videoSrc}
          muted
          loop
          playsInline
          className={`slider-video ${index === currentIndex ? "video-active" : ""}`}
        />
      ))}

      <div className="overlay">
        <h1>Get Inspired: Itineraries and Travel Ideas</h1>
        <p>
          We plan and book travel experiences, including flights, accommodations,
          and tours tailored to clients' needs. It serves as a one-stop shop for hassle-free vacation and business trip arrangements.
        </p>
        <a href="/query" className="cta-button">
          Get Started
        </a>
      </div>

      {/* Slider Dots */}
      <div className="slider-dots">
        {videoSources.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export { HeroSection };

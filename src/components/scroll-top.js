import React, { useState, useEffect } from "react";
import "../components/query.css"; // Add styling for the button here

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          &#8679; {/* Up Arrow Symbol */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;

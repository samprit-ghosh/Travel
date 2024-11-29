import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/query.css";

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    &#8250; {/* Right arrow symbol */}
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    &#8249; {/* Left arrow symbol */}
  </div>
);

const ImageSlider = () => {
  // Array of slide data (image and corresponding text)
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1504461407194-07c608d0989b",
      title: "Underwater Monsters",
      subtitle: "Saltwater Crocodile",
      description: "The largest living reptile, lurking in saltwater habitats.",
    },
    {
      image: "https://images.unsplash.com/photo-1544745494-3d8dd3fa1564",
      title: "The Gates of Hell",
      subtitle: "Special inside volcanoes",
      description: "A fiery journey into the Earth's molten core.",
    },
    {
      image: "https://images.unsplash.com/photo-1528214096798-37891d32174c",
      title: "Exploring Deep Caves",
      subtitle: "Real Time Capsules",
      description: "A hidden world of geological wonders and history.",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section className="image-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div
              className="slide-image"
              style={{
                backgroundImage: `url(${slide.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80)`,
              }}
            >
              <div className="slide-content">
                <h2 className="slide-title">{slide.title}</h2>
                <h3 className="slide-subtitle">{slide.subtitle}</h3>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;

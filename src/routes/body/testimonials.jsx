import React, { useState, useEffect } from "react";
import "./testimonials.css";
import { images, svgs } from "../../assets";

const testimonials = [
  {
    name: "Mike Hardson",
    role: "Customer",
    message:
      "This is due to their excellent service, competitive pricing and customer support. It’s thoroughly refreshing to get such a personal touch.",
    image: images.cards.person1,
  },
  {
    name: "Ravi Kumar",
    role: "Customer",
    message:
      "I’ve been using their service for a year now, and I’m very satisfied. Clean cars, friendly drivers, and always on time!",
    image: images.cards.person2,
  },
  {
    name: "Sarah Johnson",
    role: "Customer",
    message:
      "Very professional. Booking was easy, pricing was fair, and the car was well maintained. Great experience.",
    image: images.cards.person3,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const next = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setFade(false);
    }, 300);
  };

  const prev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <div className={`testimonial-wrapper ${fade ? "fade" : ""}`}>
        <div className="testimonial-left">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="testimonial-img"
          />
        </div>
        <div className="testimonial-right">
          <p className="testimonial-text">{testimonials[current].message}</p>
          <div className="testimonial-info">
            <strong>{testimonials[current].name}</strong> ·{" "}
            <span>{testimonials[current].role}</span>
          </div>
          <div className="testimonial-arrows">
            <button onClick={prev}>
              <img src={images.icons.leftArrow} alt="Previous" className="arrow-icon" />
            </button>
            <button onClick={next}>
              <img src={images.icons.rightArrow} alt="Next" className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

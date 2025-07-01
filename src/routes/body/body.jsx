import React from "react";
import { useState } from "react";
import "./body.css";
import { images, svgs } from "../../assets";
import Testimonials from "./testimonials";
import "../animation/buttonAnimation.css";

const Body = () => {
  return (
    <>
      {/* About + Features Section */}
      <div className="about-wrapper">
        <div className="about-section">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Welcome to Elon Cabs, your trusted partner for seamless
              transportation across Bengaluru and beyond. With over 15 years of
              experience in the taxi industry, we have built a reputation for
              delivering top-notch service with a commitment to customer
              satisfaction. Whether you need a quick local ride, an outstation
              journey, or a reliable airport transfer, we’ve got you covered
              with the best prices and quality service.
            </p>
          </div>
        </div>

        <div className="feature-section">
          <div className="features">
            <div className="feature-item">
              <div className="icon-circle">
                <img src={images.icons.check} alt="Easier Booking" />
              </div>
              <h4>
                Easier &<br />
                Faster Bookings
              </h4>
            </div>
            <div className="feature-item">
              <div className="icon-circle">
                <img src={images.icons.locate} alt="Pickup Locations" />
              </div>
              <h4>
                Too Many
                <br />
                Pickup Locations
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Airport Taxi Section */}
      <div className="airport-section">
        <h2>Airport Taxi</h2>
        <div className="airport-cards">
          {/* Card 1 */}
          <div className="airport-card">
            <img src={images.cards.hatchbackCar} alt="Hatchback" />
            <div className="separator-line-wrapper">
              <hr className="separator-line" />
              <div className="tag">HATCHBACK</div>
            </div>
            <p className="car-details">
              <span>🚕 4 + 1 people</span> &nbsp;&nbsp;{" "}
              <span>🚧 Up To 45Km</span>
            </p>
            <p className="car-pricing">
              <span>🪙 Toll Optional</span> &nbsp;&nbsp; <span>₹ 1299 /-</span>
            </p>

            <div className="card-buttons">
              <button
                className="button-animate btn-primary"
                style={{ "--hover-color": "#2e57d3" }}
              >
                Book Now
              </button>
              <button
                className="button-animate btn-secondary"
                style={{ "--hover-color": "#f26552" }}
              >
                Whatsapp
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="airport-card">
            <img src={images.cards.sedanCar} alt="Sedan" />
            <div className="separator-line-wrapper">
              <hr className="separator-line" />
              <div className="tag">SEDAN</div>
            </div>
            <p className="car-details">
              <span>🚕 4 + 1 people</span> &nbsp;&nbsp;{" "}
              <span>🚧 Up To 45Km</span>
            </p>
            <p className="car-pricing">
              <span>🪙 Toll Optional</span> &nbsp;&nbsp; <span>₹ 1299 /-</span>
            </p>

            <div className="card-buttons">
              <button
                className="button-animate btn-primary"
                style={{ "--hover-color": "#2e57d3" }}
              >
                Book Now
              </button>
              <button
                className="button-animate btn-secondary"
                style={{ "--hover-color": "#f26552" }}
              >
                Whatsapp
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="airport-card">
            <img src={images.cards.primeSedanCar} alt="Prime Sedan" />
            <div className="separator-line-wrapper">
              <hr className="separator-line" />
              <div className="tag">PRIME SEDAN</div>
            </div>
            <p className="car-details">
              <span>🚕 4 + 1 people</span> &nbsp;&nbsp;{" "}
              <span>🚧 Up To 45Km</span>
            </p>
            <p className="car-pricing">
              <span>🪙 Toll Optional</span> &nbsp;&nbsp; <span>₹ 1299 /-</span>
            </p>

            <div className="card-buttons">
              <button
                className="button-animate btn-primary"
                style={{ "--hover-color": "#2e57d3" }}
              >
                Book Now
              </button>
              <button
                className="button-animate btn-secondary"
                style={{ "--hover-color": "#f26552" }}
              >
                Whatsapp
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="airport-card">
            <img src={images.cards.luxurySedanCar} alt="Luxury Sedan" />
            <div className="separator-line-wrapper">
              <hr className="separator-line" />
              <div className="tag">LUXURY SEDAN</div>
            </div>
            <p className="car-details">
              <span>🚕 4 + 1 people</span> &nbsp;&nbsp;{" "}
              <span>🚧 Up To 45Km</span>
            </p>
            <p className="car-pricing">
              <span>🪙 Toll Optional</span> &nbsp;&nbsp; <span>₹ 1299 /-</span>
            </p>

            <div className="card-buttons">
              <button
                className="button-animate btn-primary"
                style={{ "--hover-color": "#2e57d3" }}
              >
                Book Now
              </button>
              <button
                className="button-animate btn-secondary"
                style={{ "--hover-color": "#f26552" }}
              >
                Whatsapp
              </button>
            </div>
          </div>
        </div>

        <div className="more-cars-btn">
          <button
            className=" button-animate"
            style={{ "--padding": "15px 30px" }}
          >
            More Cars
          </button>
        </div>
      </div>

      {/* Tour Section */}
      <div className="tour-section">
        <h2>Tour Package</h2>
        <div className="tour-cards">
          {/* Card 1 */}
          <div className="tour-card">
            <img src={images.cards.tour1} alt="Tour 1" />
            <div className="tour-badge">Starts from Rs.6899/- · 1 Day</div>
            <p>
              Bangalore To Mysuru
              <br />
              One Day Tour Package
            </p>
            <div className="card-buttons">
              <button
                className=" button-animate btn-primary"
                style={{ "--hover-color": "#2e57d3" }}
              >
                Explore
              </button>
              <button
                className=" button-animate btn-blue"
                style={{ "--hover-color": "#2e85ff" }}
              >
                Call
              </button>
              <button
                className=" button-animate btn-secondary"
                style={{ "--hover-color": "#f26552" }}
              >
                Whatsapp
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="tour-card">
            <img src={images.cards.tour2} alt="Tour 2" />
            <div className="tour-badge">Starts from Rs.6799/- · 1 Day</div>
            <p>
              From Bangalore To Mysuru
              <br />
              One Day Tour Package
            </p>
            <div className="card-buttons">
              <button
                className=" button-animate btn-primary"
                style={{ "--hover-color": "#2e57d3" }}
              >
                Explore
              </button>
              <button
                className=" button-animate btn-blue"
                style={{ "--hover-color": "#2e85ff" }}
              >
                Call
              </button>
              <button
                className=" button-animate btn-secondary"
                style={{ "--hover-color": "#f26552" }}
              >
                Whatsapp
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="tour-card">
            <img src={images.cards.tour2} alt="Tour 3" />
            <div className="tour-badge">Starts from Rs.6799/- · 1 Day</div>
            <p>
              From Bangalore To Mysuru
              <br />
              One Day Tour Package
            </p>
            <div className="card-buttons">
              <button
                className=" button-animate btn-primary"
                style={{ "--hover-color": "#2e57d3" }}
              >
                Explore
              </button>
              <button
                className=" button-animate btn-blue"
                style={{ "--hover-color": "#2e85ff" }}
              >
                Call
              </button>
              <button
                className=" button-animate btn-secondary"
                style={{ "--hover-color": "#f26552" }}
              >
                Whatsapp
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="tour-card">
            <img src={images.cards.tour2} alt="Tour 4" />
            <div className="tour-badge">Starts from Rs.6799/- · 1 Day</div>
            <p>
              From Bangalore To Mysuru
              <br />
              One Day Tour Package
            </p>
            <div className="card-buttons">
              <button
                className=" button-animate btn-primary"
                style={{ "--hover-color": "#2e57d3" }}
              >
                Explore
              </button>
              <button
                className=" button-animate btn-blue"
                style={{ "--hover-color": "#2e85ff" }}
              >
                Call
              </button>
              <button
                className=" button-animate btn-secondary"
                style={{ "--hover-color": "#f26552" }}
              >
                Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview Section */}
      <div className="services-section">
        <h2>Services Overview</h2>
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <div className="service-text">
              <h4>Local Rides</h4>
              <p>
                Navigate through the city with ease and comfort. Our local rides
                are perfect for daily commutes, shopping trips, and more.
              </p>
            </div>
            <img src={images.cards.service1} alt="Local Rides" />
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-text">
              <h4>Outstation Cabs</h4>
              <p>
                Planning a getaway? Our outstation taxi services take you to
                your destination safely and comfortably.
              </p>
            </div>
            <img src={images.cards.service2} alt="Outstation Cabs" />
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="service-text">
              <h4>Airport Transfers</h4>
              <p>
                Hassle-free airport pickups and drops. We track your flight to
                ensure timely service.
              </p>
            </div>
            <img src={images.cards.service3} alt="Airport Transfers" />
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <div className="service-text">
              <h4>Car Rentals</h4>
              <p>
                Choose from a range of well-maintained vehicles for your
                personal or business needs.
              </p>
            </div>
            <img src={images.cards.service4} alt="Car Rentals" />
          </div>
        </div>

        <div className="services-buttons">
          <div className="btn-yellow-wrapper">
            <span>Car Rental Services Specifically For Our Customers.</span>
            <button
              className=" button-animate btn-outline.small"
              style={{
                "--hover-color": "white",
                "--text-color": "black",
                "--text-hover-color": "#f8a820",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <h2>Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <div className="icon">
              <img src={images.icons.driver} alt="Driver" />
            </div>
            <h4>Experienced Drivers</h4>
            <p>
              Our drivers are professional, courteous, and have extensive
              knowledge of the roads.
            </p>
            <div className="arrow-circle">
              <img src={images.icons.rightArrow} alt="Arrow" />
            </div>
          </div>
          <div className="why-card">
            <div className="icon">
              <img src={images.icons.rates} alt="Rates" />
            </div>
            <h4>Affordable Rates</h4>
            <p>
              We provide the best pricing without compromising quality and
              service.
            </p>
            <div className="arrow-circle">
              <img src={images.icons.rightArrow} alt="Arrow" />
            </div>
          </div>
          <div className="why-card">
            <div className="icon">
              <img src={images.icons.booking} alt="Booking" />
            </div>
            <h4>Online Booking</h4>
            <p>
              Book your cab anytime, anywhere with our user-friendly online
              platform.
            </p>
            <div className="arrow-circle">
              <img src={images.icons.rightArrow} alt="Arrow" />
            </div>
          </div>
          <div className="why-card">
            <div className="icon">
              <img src={images.icons.support} alt="24/7" />
            </div>
            <h4>24/7 Availability</h4>
            <p>
              We are available round the clock to serve your travel needs
              without delay.
            </p>
            <div className="arrow-circle">
              <img src={images.icons.rightArrow} alt="Arrow" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
};
export default Body;

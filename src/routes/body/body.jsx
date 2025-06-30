import React from "react";
import "./body.css";
import { images, svgs } from "../../assets";

const Body = () => {
  return (
    <>
      {/* About Section */}
      <div className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to Elon Cabs, your trusted partner for seamless
            transportation across Bengaluru and beyond. With over 15 years of
            experience in the taxi industry, we have built a reputation for
            delivering top-notch service with a commitment to customer
            satisfaction. Whether you need a quick local ride, an outstation
            journey, or a reliable airport transfer, we’ve got you covered with
            the best prices and quality service.
          </p>
        </div>
      </div>

      {/* Features Section */}
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

      {/* Airport Taxi Section */}
      <div className="airport-section">
        <h2>Airport Taxi</h2>
        <div className="airport-cards">
          {/* Card 1 */}
          <div className="airport-card">
            <img src={images.cards.hatchbackCar} alt="Hatchback" />
            <div className="tag">HATCHBACK</div>
            <p>🚕 3 + 1 people &nbsp; 🚧 Up To 45Km</p>
            <p>🪙 Toll Optional &nbsp;&nbsp;&nbsp; ₹ 899 /-</p>
            <div className="card-buttons">
              <button className="btn-primary">Book Now</button>
              <button className="btn-secondary">Whatsapp</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="airport-card">
            <img src={images.cards.sedanCar} alt="Sedan" />
            <div className="tag">SEDAN</div>
            <p>🚕 4 + 1 people &nbsp; 🚧 Up To 45Km</p>
            <p>🪙 Toll Optional &nbsp;&nbsp;&nbsp; ₹ 999 /-</p>
            <div className="card-buttons">
              <button className="btn-primary">Book Now</button>
              <button className="btn-secondary">Whatsapp</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="airport-card">
            <img src={images.cards.primeSedanCar} alt="Prime Sedan" />
            <div className="tag">PRIME SEDAN</div>
            <p>🚕 4 + 1 people &nbsp; 🚧 Up To 45Km</p>
            <p>🪙 Toll Optional &nbsp;&nbsp;&nbsp; ₹ 999 /-</p>
            <div className="card-buttons">
              <button className="btn-primary">Book Now</button>
              <button className="btn-secondary">Whatsapp</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="airport-card">
            <img src={images.cards.luxurySedanCar} alt="Luxury Sedan" />
            <div className="tag">LUXURY SEDAN</div>
            <p>🚕 4 + 1 people &nbsp; 🚧 Up To 45Km</p>
            <p>🪙 Toll Optional &nbsp;&nbsp;&nbsp; ₹ 1299 /-</p>
            <div className="card-buttons">
              <button className="btn-primary">Book Now</button>
              <button className="btn-secondary">Whatsapp</button>
            </div>
          </div>
        </div>

        <div className="more-cars-btn">
          <button className="btn-yellow">More Cars</button>
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
              <button className="btn-primary">Explore</button>
              <button className="btn-blue">Call</button>
              <button className="btn-secondary">Whatsapp</button>
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
              <button className="btn-primary">Explore</button>
              <button className="btn-blue">Call</button>
              <button className="btn-secondary">Whatsapp</button>
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
              <button className="btn-primary">Explore</button>
              <button className="btn-blue">Call</button>
              <button className="btn-secondary">Whatsapp</button>
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
              <button className="btn-primary">Explore</button>
              <button className="btn-blue">Call</button>
              <button className="btn-secondary">Whatsapp</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;

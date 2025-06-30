import "./main.css";
import { images, svgs } from "../../assets";
import "../animation/buttonAnimation.css";

function Body() {
  return (
    <>
      <div className="main-container">
        <div className="hero-container">
          <h4 className="hero-subtitle">
            Local, Outstation, and Airport Cabs at the Best Prices. Book Now!
          </h4>
          <h1 className="hero-title">
            Reliable Taxi Service <br />
            Across Bengaluru <br />& Beyond
          </h1>
          <button className="button-book button-animate">Book Now</button>
        </div>
      </div>
      
    </>
  );
}

export default Body;

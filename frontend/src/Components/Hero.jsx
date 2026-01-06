import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Find Your Perfect <b className="text-blue-500">Laptop</b> in Seconds
          </h1>

          <p className="mb-5 text-lg">
            Compare specs. Filter by features. Pick what’s right for you.
          </p>

          {/* Updated Button */}
          <button className="btn btn-primary">
            <Link to="/laptops" className="text-white no-underline">
              Start Exploring
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

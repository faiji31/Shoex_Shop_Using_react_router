import React from "react";
import BannerImg from "../../assets/photo-1560769629-975ec94e6a86.avif";

const Banner = () => {
  return (
    <div className="hero bg-gray-300 min-h-screen rounded-2xl mt-10 my-10 ">
      <div className="hero-content flex-col lg:flex-row ">
        <img src={BannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="text-center">
          <h1 className="text-5xl font-bold">WelCome to ShoeX!</h1>
          <p className="py-6">
            Step into the extraordinary. From high-heat limited drops to the
            2026 essentials, <strong>Shoex</strong> delivers the ultimate
            collection of performance and style. Don't just walk—make a
            statement with every stride.
          </p>

          <button className="btn btn-secondary">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

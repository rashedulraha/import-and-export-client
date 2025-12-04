import React from "react";
import sampleImage from "../../assets/fe8179dc13f75035c87549ab8e60c433.jpg";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <section className="py-5 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-6 text-primary">
            About Products Import and Export
          </h1>

          <p className="text-base-content/80 mb-4">
            Products Import and Export is an international-standard trading
            platform, facilitating the import and export of high-quality
            products from various countries around the world. Our mission is to
            bridge the gap between buyers and sellers in the global
            marketplace—ensuring secure transactions, fast delivery, and
            reliable services.
          </p>

          <p className="text-base-content/80 mb-4">
            Through modern trading systems, smart logistics management, and an
            experienced team, we provide businesses with a seamless,
            trustworthy, and hassle-free import-export experience. From small
            enterprises to large corporations, we are committed to supporting
            businesses of all sizes equally.
          </p>

          <p className="text-base-content/80">
            With our services, you can import products from countries worldwide
            and export your local goods to gain new international customers.
            Quality, safety, fair pricing, and timely delivery are the four core
            principles guiding our operations.
          </p>
          <div className="flex justify-center mt-6">
            <Link to="/about">
              <button className="btn btn-primary">About Us</button>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src={sampleImage}
            alt="Global import-export logistics and trading platform"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

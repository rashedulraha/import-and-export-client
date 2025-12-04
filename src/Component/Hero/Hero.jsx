import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router";
import LatestProducts from "../../Pages/LatestProducts/LatestProducts";
import AboutUs from "../AboutUs/AboutUs";
import OurTeam from "../../Pages/OurTrem/OurTrem";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <section
        className="flex-1 flex items-center justify-center bg-linear-to-br from-base-200 via-base-100 to-secondary/10
                    px-4 py-8 md:py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center">
            We <span className="text-primary">Import</span> and
            <br className="hidden sm:block" />
            <span className="text-primary">Export</span> Smart Deals Daily!
          </h1>

          <p className="mt-4 text-base-content/70 text-sm md:text-lg max-w-2xl mx-auto">
            Import and Export authentic local products easily across Bangladesh
            with smart deals!
          </p>

          <div className="mt-6 max-w-xl mx-auto">
            <div className="flex shadow-lg rounded-full overflow-hidden border border-base-300 bg-base-100">
              <input
                type="text"
                placeholder="Search for Products, Categories..."
                className="input input-ghost w-full px-5 py-3 focus:outline-none focus:bg-transparent"
              />
              <button className="btn btn-primary rounded-l-none rounded-r-full px-5">
                <IoSearchOutline size={20} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={"/allProducts"} className="btn btn-primary px-6">
              Import Your Products
            </Link>
            <Link to={"/export"} className="btn btn-outline btn-primary px-6">
              Export Your Products
            </Link>
          </div>
        </div>
      </section>

      <div>
        <AboutUs></AboutUs>
        <LatestProducts></LatestProducts>
        <OurTeam></OurTeam>
      </div>
    </div>
  );
};

export default Hero;

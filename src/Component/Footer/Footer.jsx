import React from "react";
import img from "../../assets/Top CMS Feature Import Export SUMMARY.png";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      Icon: FaFacebook,
      label: "Facebook",
      href: "https://facebook.com/smartdeals",
    },
    {
      Icon: FaTwitter,
      label: "Twitter",
      href: "https://twitter.com/smartdeals",
    },
    {
      Icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/smartdeals",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/smartdeals",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-base-200 via-base-100 to-secondary/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Link to="/">
                <img
                  src={img}
                  alt="E & I Logo"
                  className="h-10 w-auto rounded-xl shadow-sm"
                />
              </Link>
              <Link
                to="/"
                className="text-2xl font-bold text-primary hover:text-secondary transition">
                <span className="text-primary">EXPORT </span>
                <span className="text-primary">EASE</span>
              </Link>
            </div>
            <p className="text-base-content/80 leading-relaxed">
              Your trusted marketplace for authentic local products.{" "}
              <br className="hidden md:block" />
              Discover the best deals from across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2 text-base-content/70">
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition">
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition">
                  My Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Categories
            </h3>
            <ul className="space-y-2 text-base-content/70">
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition">
                  Trending Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition">
                  Best Selling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary hover:underline transition">
                  Featured Collections
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-12 pt-8 border-t border-base-300">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Contact & Support
            </h3>
            <ul className="space-y-3 text-base-content/80">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-lg text-secondary" />
                <span>support@smartdeals.com</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-lg text-secondary" />
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-lg text-secondary" />
                <span>123 Commerce Street, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Follow Us
            </h3>
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    p-3 
                    rounded-full 
                    bg-base-100/50 
                    backdrop-blur-md 
                    shadow-sm 
                    hover:bg-base-100 
                    hover:shadow-lg 
                    hover:scale-110 
                    transition-all 
                    duration-300
                  ">
                  <Icon className="text-xl text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-base-300 text-center text-sm text-base-content/60">
          <p>© {currentYear} SmartDeals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

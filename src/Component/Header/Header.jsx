import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import img from "../../assets/Top CMS Feature Import Export SUMMARY.png";
import Container from "../../Pages/Responsive/Container";
import ThemeToggle from "../Theme/ThemeToggole";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("User signed out"))
      .catch((error) => console.log(error));
  };

  const menuLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium"
              : "hover:text-primary focus:text-primary"
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProducts"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium"
              : "hover:text-primary focus:text-primary"
          }>
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/import"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium"
              : "hover:text-primary focus:text-primary"
          }>
          My Import
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/export-list"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium"
              : "hover:text-primary focus:text-primary"
          }>
          My Export
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-product"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium"
              : "hover:text-primary focus:text-primary"
          }>
          Add Product
        </NavLink>
      </li>
    </>
  );

  return (
    <Container>
      <div className="navbar  sticky top-0 z-999 ">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden p-2"
              aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow border border-base-300">
              {menuLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={img}
              alt="Import Export Logo"
              className="h-10 w-auto rounded-xl"
            />

            <span className=" items-center gap-1 text-xl sm:text-2xl font-bold hidden md:flex">
              <span className="text-primary">EXPORT</span>
              <span className="text-primary">EASE</span>
            </span>
          </Link>
        </div>

        {/* CENTER (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          {user ? (
            <>
              {/* User photo */}
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || user.email}>
                <div className="avatar">
                  <div className="w-8 sm:w-10 rounded-full border-2 border-primary">
                    <img
                      src={
                        user.photoURL ||
                        "https://i.ibb.co/6Nf3ySm/default-user.png"
                      }
                      alt="User Avatar"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleSignOut}
                className="btn btn-primary btn-sm sm:btn-md">
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-sm sm:btn-md shadow-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;

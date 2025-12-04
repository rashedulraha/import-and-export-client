import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import img from "../../assets/Top CMS Feature Import Export SUMMARY.png";
import Container from "../../Pages/Responsive/Container";

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
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProducts">All Products</NavLink>
      </li>
      <li>
        <NavLink to="/import">My Import</NavLink>
      </li>
      <li>
        <NavLink to="/">My Export</NavLink>
      </li>
      <li>
        <NavLink to="/export">Add Product</NavLink>
      </li>
    </>
  );

  return (
    <Container>
      {" "}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {menuLinks}
            </ul>
          </div>
          <Link to="/">
            <img
              src={img}
              alt="Import Export Logo"
              className="h-10 w-auto mr-2 rounded-2xl"
            />
          </Link>
          <a
            href="/"
            className="inline-flex items-center gap-2 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 hover:text-primary focus:text-primary">
            <span className="text-primary">EXPORT</span>
            <span className="text-gray-800">EASE</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <>
              {/* 👇 User Image */}
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || user.email}>
                <img
                  src={
                    user.photoURL || "https://i.ibb.co/6Nf3ySm/default-user.png"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                />
              </div>

              <button onClick={handleSignOut} className="gradient-btn">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="gradient-btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;

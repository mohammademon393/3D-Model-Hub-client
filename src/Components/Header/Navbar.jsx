import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const Links = (
      <>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <li>
            <a>Home</a>
          </li>
        </NavLink>
        <NavLink
          to={"/allModels"}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <li>
            <a>All Models</a>
          </li>
        </NavLink>
        <NavLink
          to={"browseModels"}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <li>
            <a>Browse Models</a>
          </li>
        </NavLink>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <li>
            <a>Profile</a>
          </li>
        </NavLink>
      </>
    );

    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-bold cursor-pointer">
            3D <span className='text-primary'>Model</span> Hub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">LogIn</a>
        </div>
      </div>
    );
};

export default Navbar;
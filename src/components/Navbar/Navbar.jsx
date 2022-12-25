import React from 'react';
import './navbar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user';

const Navbar = ({isAuthenticated=false,user}) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);


  const dispatch = useDispatch();

  const logoutHandler = ()=>{
    dispatch(logout());
  }

  return (
    <>
      <nav className="navigation">
        <a href="/" className="brand-name">
          Course Bundler
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
          }
        >
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/request">Request</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>

            {isAuthenticated ? (
              <>
              <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <a onClick={logoutHandler}>LogOut</a>
                </li>
              </>
            ) : (   
              <>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/register">Sign Up</a>
                </li>
              </>
            )}

            {
                user && user.role === 'admin' &&  <li><a href="/admin/dashboard">Dashboard</a></li>
            }
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

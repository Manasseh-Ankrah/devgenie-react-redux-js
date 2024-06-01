import React, { useState } from "react";
import "../styles/header.css";
import { Outlet } from "react-router-dom";
import { setDarkMode } from "../store/darkModeSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const isDark = useSelector((state) => state.darkMode.isDarkMode);
  const toggleMode = () => {
    dispatch(
      setDarkMode({
        isDarkMode: !isDark,
      })
    );
  };

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <a href='/'>Logo</a>
        </div>
        <nav className={`nav ${isDark ? "nav-open" : ""}`}>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a href='/'>Home</a>
            </li>
            <li className='nav-item'>
              <a href='/about'>About</a>
            </li>
            <li className='nav-item'>
              <a href='/contact'>Contact Us</a>
            </li>
            <li className='nav-item'>
              <button onClick={() => toggleMode()}>
                {isDark ? "-- On --" : "-- Off --"}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;

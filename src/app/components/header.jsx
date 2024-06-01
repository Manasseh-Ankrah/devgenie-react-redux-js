import React, { useContext, useState } from "react";
import "../styles/header.css";
import { Outlet } from "react-router-dom";
import { useStateValue } from "../context/ThemeContext";

const Header = () => {
  const [{ isDarkMode }, dispatch] = useStateValue();

  const toggleMode = () => {
    dispatch({
      type: "TOGGLE_DARK_MODE",
      item: {
        isDarkMode,
      },
    });
  };

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <a href='/'>Logo</a>
        </div>
        <nav className={`nav ${isDarkMode ? "nav-open" : ""}`}>
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
                {isDarkMode ? "-- On --" : "-- Off --"}
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

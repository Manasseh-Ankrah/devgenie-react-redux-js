import React, { useContext } from "react";
import logo from "../../logo.svg";
import "../styles/App.css";
import { useSelector } from "react-redux";
function Page() {
  const isDark = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={`home ${isDark ? "darkTheme" : "lightTheme"}`}>
      <img src={logo} className='App-logo' alt='logo' />

      <a
        className='App-link'
        href='https://www.npmjs.com/package/devgenie'
        target='_blank'
        rel='noopener noreferrer'
      >
        🧞‍♂️💥DevGenie React Redux Setup💥🧞‍♂️
      </a>
    </div>
  );
}

export default Page;

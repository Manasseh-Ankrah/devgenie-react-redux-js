import React, { useContext } from "react";
import logo from "../../logo.svg";
import "../styles/App.css";
function Page() {
  const isDarkMode = true;

  return (
    <div className={`home ${isDarkMode ? "darkTheme" : "lightTheme"}`}>
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

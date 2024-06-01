import React from "react";
import "../styles/App.css";
import { useStateValue } from "../context/ThemeContext";
function Page() {
  const [{ isDarkMode }, dispatch] = useStateValue();

  return (
    <div className={`home ${isDarkMode ? "darkTheme" : "lightTheme"}`}>
      <a className='App-link' href='' target='_blank' rel='noopener noreferrer'>
        🧞‍♂️💥About Page💥🧞‍♂️
      </a>
      <h1>{isDarkMode}</h1>
    </div>
  );
}

export default Page;

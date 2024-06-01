import React from "react";
import "../styles/App.css";
import { useSelector } from "react-redux";
function Page() {
  const isDark = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className={`home ${isDark ? "darkTheme" : "lightTheme"}`}>
      <a className='App-link' href='' target='_blank' rel='noopener noreferrer'>
        🧞‍♂️💥About Page💥🧞‍♂️
      </a>
    </div>
  );
}

export default Page;

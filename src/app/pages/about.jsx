import React from "react";
import "../styles/App.css";
function Page() {
  const isDarkMode = true;

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

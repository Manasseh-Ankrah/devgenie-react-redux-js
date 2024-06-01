import React from "react";
import "../styles/notfound.css";
import logo from "../../app/assets/404.jpeg";

function Page() {
  return (
    <div className='notfound'>
      {<img src={logo} alt='logo' />}
      <a href='/' target='_blank' rel='noopener noreferrer'>
        Back to home
      </a>
    </div>
  );
}

export default Page;

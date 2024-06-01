import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <nav className='navbar'>
          <p>
            My Awesome NAVBAR, That will show the side navigation is the user is
            logged in{" "}
          </p>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;

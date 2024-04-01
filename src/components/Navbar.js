import React from "react";

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <h1>Welcome to Our Website</h1>
        <nav>
          <ul className="navList">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

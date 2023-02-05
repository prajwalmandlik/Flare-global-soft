import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../assest/logo.png";

const Header = () => {
  /* ================ Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    // when the scroll is higher than 200 viewport height,add the scroll-header class to a tag with the header calss
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-logo">
          <img src={Logo} alt="" /> <span>Flare Global Soft</span>
        </div>

        <div className={toggle ? "nav-menu-show" : "nav-menu"}>
          <ul className={toggle ? "nav-links-show" : "nav-links"}>
            <li className="nav-link">Home</li>
            <li className="nav-link">services</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Contact</li>
          </ul>

          <div className="nav-toggle">
            <i
              class={toggle ? "uil uil-times" : "uil uil-bars"}
              onClick={() => setToggle(!toggle)}
            ></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

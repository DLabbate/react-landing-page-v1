import React from "react";
import "./Navbar.css";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Browse" },
];

const Navbar = ({ navbarLinks }) => {
  return (
    <nav className="navbar">
      <span className="navbar__logo">travello</span>
      <ul className={"navbar__list"}>
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar__item" key={index}>
              <a className="navbar__link" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

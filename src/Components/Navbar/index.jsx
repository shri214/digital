import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";
import logo from "../../assets/logo-1.png";
import { DropdownList } from "./DropdownList";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="items">
        <div className="items-list">
          <span className="slash">/</span>
          <NavLink to={"/"}>Home</NavLink>
          <span className="material-icons expand">expand_more</span>
          <ul className="drop-down">
            <DropdownList
              arr={[
                "Digital Agency Home",
                "Courses Home",
                "Forum Home",
                "Community Blog",
                "Landing",
              ]}
            />
          </ul>
        </div>
        <div className="items-list">
          <span className="slash dn">/</span>
          <NavLink to={"/page"}>Page</NavLink>
          <span className="material-icons expand">expand_more</span>
          <ul className="drop-down">
            <DropdownList
              arr={[
                "About Us",
                "Courses Grid",
                "Single Course",
                "Blog",
                "Portfolio",
                "Pricing Plans",
                "Our History",
                "Our Team",
                "Team Single",
                "Typography",
                "FAQ’s",
                "Elements",
                "Coming Soon",
                "Page 404",
              ]}
            />
          </ul>
        </div>
        <div className="items-list">
          <span className="slash dn">/</span>
          <NavLink to={"/shop"}>Shop</NavLink>
          <span className="material-icons expand">expand_more</span>
          <ul className="drop-down">
            <DropdownList
              arr={[
                "Products",
                "Single Product",
                "Cart",
                "Checkout",
                "My account",
              ]}
            />
          </ul>
        </div>
        <div className="items-list">
          <span className="slash dn">/</span>
          <NavLink to={"/contact"}>Contacts</NavLink>
        </div>
      </div>
      <div className="searchMenu">
        <input type="search" placeholder="Search..." />
       <span className="material-icons search-icons">search</span>
        <button>Login</button>
      </div>
    </div>
  );
};

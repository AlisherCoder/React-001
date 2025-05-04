import React from "react";
import "./header.scss";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

const links = ["Home", "Brands", "Recent Products", "Contact", "About"];

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <nav className="header__navbar">
               <div className="header__logo">
                  <img src={logo} alt="" />
               </div>
               <ul className="header__collection">
                  {links.map((link, i) => (
                     <li key={i} className="header__item">
                        <a href="#" className="header__link">
                           <span>{link}</span>
                        </a>
                     </li>
                  ))}
               </ul>
               <div className="header__options">
                  <CiSearch />
                  <FaRegUser />
                  <SlBasket />
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;

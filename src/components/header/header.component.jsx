import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/calypso-cosmetics-logo-img.jpeg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <div className="logo-container">
        <img src={Logo} alt="calypso cosmetics" />
      </div>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import Logo from "../../assets/calypso-cosmetics-logo.jpg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
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

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);

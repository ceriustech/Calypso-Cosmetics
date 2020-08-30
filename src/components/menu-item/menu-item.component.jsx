import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl, linkText }) => (
  <div className="menu-item">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{linkText}</span>
    </div>
  </div>
);

export default MenuItem;

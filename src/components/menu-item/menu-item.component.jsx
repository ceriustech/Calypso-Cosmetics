import React from "react";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl, linkText }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    className="menu-item"
  >
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">{linkText}</span>
    </div>
  </div>
);

export default MenuItem;

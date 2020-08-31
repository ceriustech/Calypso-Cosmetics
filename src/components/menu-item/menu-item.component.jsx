import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl, linkText, history, match }) => (
  <div className="menu-item">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    ></div>
    <div
      className="content"
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{linkText}</span>
    </div>
  </div>
);

export default withRouter(MenuItem);

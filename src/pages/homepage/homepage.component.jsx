import React from "react";

import Directory from "../../components/directory/directory.component";
import Banner from "../../components/banner/banner.component";

import "./homepage.styles.scss";

const HomePage = (props) => (
  <div className="homepage">
    <Banner />
    <Directory />
  </div>
);

export default HomePage;

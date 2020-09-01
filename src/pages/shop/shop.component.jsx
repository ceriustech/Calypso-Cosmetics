import React, { Component } from "react";

import { SHOP_DATA } from "./shop.data";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return <div className="shop-page"></div>;
  }
}

export default ShopPage;

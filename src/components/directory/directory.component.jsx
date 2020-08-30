import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";

import { sections } from "../../data";

class Directory extends Component {
  state = {
    sections: sections,
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

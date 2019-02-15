import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { name } = this.props;
    const { photo } = this.props;

    return (
      <div className="navBar">
        <img src={photo} alt="smile" />
        <h1>{name}</h1>
      </div>
    );
  }
}

export default Navbar;

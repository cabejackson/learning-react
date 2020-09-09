import React, { Component } from "react";
import ComponentE from "./ComponentE";

export default class ComponentC extends Component {
  render() {
    return (
      <div>
        <h1>Things under this is ComponentC</h1>
        <ComponentE />
      </div>
    );
  }
}

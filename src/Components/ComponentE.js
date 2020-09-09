import React, { Component } from "react";
import ComponentF from "./ComponentF";

export default class ComponentE extends Component {
  render() {
    return (
      <div>
        <h1>Things under this is ComponentE</h1>
        <ComponentF />
      </div>
    );
  }
}

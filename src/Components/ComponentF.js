//pass something to ComponentF w/o having to go through ComponentE
import React, { Component } from "react";
import { UserConsumer } from "./Context/UserContext";
// <h1>Things under this is ComponentF</h1>;
export default class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(username) => {
            return (
              <div>
                Username: {username} // The first Caleb came from componentC
              </div>
            );
          }}
        </UserConsumer>
      </div>
    );
  }
}

import React from "react";
import ReactDOM from "react-dom";
//import App from '../components/App'
import Message from "../Components/Message";
import App from "../Components/App";

//create a test case for smoke test
// like "renders w/o crashing"

it("renders without crashing", () => {
  // create a DOM element to render the component to
  const div = document.createElement("div");
  //render the component (aka run the test)
  ReactDOM.render(<App />, div);

  //clean up the code
  ReactDOM.unmountComponentAtNode(div);
});

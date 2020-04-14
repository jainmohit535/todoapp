// Class Component Example
import React, { Component } from "react";

let counter = 1;

let styleObject = {
  backgroundColor: "blue",
  fontSize: "20px",
  textAlign: "center"
};

class HelloWorldFromClass extends Component {
  state = { userName: undefined, password: "" };

  componentDidMount() {
    this.setState({ userName: "defaultOne" });
  }

  render() {
    console.log(counter++);
    return (
      <div style={styleObject}>
        <p>
          Hello World {this.props.name} {this.state.userName}!
        </p>
      </div>
    );
  }
}

export default HelloWorldFromClass;

// Functional Component Example
import React from "react";

const HelloWorld = props => {
  console.log(this);
  return (
    <div>
      <p>Hello World {props.name}!</p>
    </div>
  );
};

export default HelloWorld;

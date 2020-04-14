import React from "react";

const Hello = ({ name, style, userName, randomValue }) => (
  <div style={style}>
    <h1>
      Hello {name} {userName} {randomValue}!
    </h1>
  </div>
);

export default Hello;

import React from "react";

export default function withNameReact(WrappedComponent) {
  // And return a new anonymous component
  return class extends React.Component {
    state = { userName: "John" };

    render() {
      return (
        <WrappedComponent
          name="This is HOC"
          style={{ backgroundColor: "red" }}
          userName={this.state.userName}
          {...this.props}
        />
      );
    }
  };
}

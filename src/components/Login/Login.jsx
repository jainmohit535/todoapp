import React from "react";
import "./Login.css";

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    const fieldName = e.target.name;
    const value = e.target.value;
    this.setState({ [fieldName]: value });
  };

  handleLogin = e => {
    e.preventDefault();
    alert(`Hello ${this.state.username}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div className="container">
        <form autoComplete="off" onSubmit={this.handleLogin}>
          <label className="custom-label">UserName:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <label className="custom-label"> Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <input type="Submit" value="Login" className="input-submit" />
        </form>
      </div>
    );
  }
}

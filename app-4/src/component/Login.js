import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      passWord: "",
    };
    this.alertDisplay = this.alertDisplay.bind(this);
  }

  changeUserName(value) {
    this.setState({ userName: value });
  }

  changePassword(value) {
    this.setState({ passWord: value });
  }

  alertDisplay() {
    alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`);
  }

  render() {
    return (
      <div className="Login">
        <input
          type="text"
          onChange={(e) => {
            this.changeUserName(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            this.changePassword(e.target.value);
          }}
        />
        <button onClick={this.alertDisplay}>Login</button>
      </div>
    );
  }
}

export default Login;

import React from "react";

export class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <input name="username" onChange={this.props.loginOnChange} type="text" placeholder="Enter username" />
                <input name="password" onChange={this.props.loginOnChange} type="password" placeholder="Enter password" />
                <button onClick={this.props.logIn}>Log in</button>
            </div>
        )
    }
}
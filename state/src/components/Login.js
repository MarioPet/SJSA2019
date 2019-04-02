import React from "react";

export class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <input 
                    name="username" 
                    onChange={this.props.loginOnChange} 
                    type="text" 
                    placeholder="Enter username"
                />
                <input 
                    type={this.props.inputType} 
                    name="password" 
                    onChange={this.props.loginOnChange} 
                    placeholder="Enter password"
                />
                <button onClick={this.props.TogglePasswordView}>
                    {
                       this.props.inputType === "password"
                       
                       ?

                       "Show Password"

                       :

                       "Hide Password"
                    }
                </button>
                <button onClick={this.props.logIn}>Log in</button>
            </div>
        )
    }
}
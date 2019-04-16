import React from "react";  
import { connect } from "react-redux";
import logo from "../assets/images/logo";

export class Welcome extends React.Component {

    constructor(props) {
        super(props);

        this.goToList = this.goToList.bind(this);
    }

    goToList() {
        this.props.history.push("/crypto-list");
    }

    render() {
        return (
            <div id="welcome">
                <div className="data-centered">
                    <img className="logo" src={logo} alt="Crypto Logo" />
                    <h2 className="welcome-title">Welcome</h2>
                    <p>This is a simple CryptoCurrency exchange rate React Project</p>
                    <button onClick={this.goToList} className="welcome-cta">Check exchanges</button>
                </div>
            </div>
        )
    }
}


import React from "react";
import PropTypes from "prop-types";

export class Welcome extends React.Component {
    render() {
        return(
            <div className="welcome">
                <h2>Hello, {this.props.user.firstName} ({this.props.user.handle})</h2>
                <span>Today is, {this.props.date}</span>
            </div>
        )
    }
}

Welcome.propTypes = {
    user: PropTypes.object,
    date: PropTypes.string,
    test: PropTypes.array
}
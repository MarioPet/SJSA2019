import React from "react";

export class Avatar extends React.Component {
    render() {
        return (
            <div className="avatar">
                <img width="100" src={this.props.user.avatar} alt="Nekoj Naslov" />
            </div>
        )
    }
}
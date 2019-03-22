import React from "react";
import { Avatar } from "./Avatar";

export class UserInfo extends React.Component {
    render() {
        return (
            <div className="user-info">
                <Avatar user={this.props.user} />
                <div className="name">
                    <h2>
                        {this.props.user.firstName} {" "}
                        {this.props.user.lastName}
                    </h2>
                </div>
            </div>
        )
    }
}
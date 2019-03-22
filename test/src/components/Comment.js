import React from "react";
import { UserInfo } from "./UserInfo";

export class Comment extends React.Component {
    render() {
        return (
            <div className="comment-container">
                <UserInfo user={this.props.user} />

                <div className="comment-content">
                    <p>{this.props.data.comment}</p>
                    <span>{this.props.data.date}</span>
                </div>
            </div>
        )
    }
}
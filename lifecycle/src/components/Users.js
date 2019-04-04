import React from "react";

export class Users extends React.Component {
    render() {
        return (
            <div className="users">
                {
                    this.props.users.map((user) => {
                        return (
                            <div key={user.id} className="single-user">
                                <h2>{user.name}</h2>
                                <a href={"mailto:" + (user.email)}>{user.email}</a>
                                <br />
                                <h4>Address: {user.address.street}</h4>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
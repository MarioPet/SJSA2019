import React from "react";

export class List extends React.Component {
    render() {
        return (
            <div className="list-container">
                <ul>
                    {
                        this.props.todos.map((todo, i) => {
                            return (
                                <li key={i}>{todo}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
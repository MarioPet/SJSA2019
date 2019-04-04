import React from "react";

export class Toggle extends React.Component {

    componentDidMount() {
        console.log("The Toggle Component just mounted");
    }

    componentWillUnmount() {
        console.log("The Toggle Component just UNmounted");
    }

    render() {
        return (
            <div className="hello">
                <h2>I will appear and dissapear on click.</h2>
            </div>
        )
    }
}
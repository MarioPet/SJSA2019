import React from "react";
import ReactDOM from "react-dom";

export class App extends React.Component {
    render() {
        return (
            <h2>First React Component</h2>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";

export class Hello extends React.Component {
    render() {

        console.log(this.props);
        
        return (
            <div>
                <h2>Hello, {this.props.name}</h2>
                <h2>{this.props.age}</h2>
            </div>
        )
    }
}
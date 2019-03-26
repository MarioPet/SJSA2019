import React from "react";
import { Movies } from "./Movies";

export class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: ""
        }

        this.nameChange = this.nameChange.bind(this); 

    }

    nameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {

        let movies = [
            "Pulp Fiction",
            "The Wild Bunch",
            "Mad Max",
            "Rear Window",
            "Citizen Kane"
        ]

        return (
            <div className="main">
                <Movies data={movies} user={"Mario"} />

                <div className="field">
                    <input 
                        value={this.state.name} 
                        type="text" 
                        placeholder="Enter your name"
                        onChange={this.nameChange}
                    />
                    <h2>{this.state.name}</h2>
                </div>
            </div>
        )
    } 
}
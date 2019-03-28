import React from "react";
import { Movies } from "./Movies";
import { Quantity } from "./Quantity";
import { Todos } from "./Todos";

export class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: "",
            quantity: 1
        }

        this.nameChange = this.nameChange.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    nameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    increment() {
        this.setState((state) => {
            return {
                quantity: state.quantity >= 10 ? 10 : state.quantity + 1   
            } 
        })
    }

    decrement() {
        this.setState((state) => {
            return {
                quantity: state.quantity <= 0 ? 0 : state.quantity - 1   
            } 
        })
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

                <Quantity 
                    quantity={this.state.quantity}
                    increment={this.increment}
                    decrement={this.decrement}
                />

                <Todos />
            </div>
        )
    } 
}

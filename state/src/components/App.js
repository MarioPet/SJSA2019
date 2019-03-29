import React from "react";
import { Movies } from "./Movies";
import { Quantity } from "./Quantity";
import { Todos } from "./Todos";
import { Login } from "./Login";

export class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: "",
            quantity: 1,
            username: "",
            password: "",
            isLoggedIn: false
        }

        this.nameChange = this.nameChange.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.loginOnChange = this.loginOnChange.bind(this);
        this.LogIn = this.LogIn.bind(this);
    }

    // Loggs User and display TODO Container
    LogIn() {
        if(this.state.username === "pero123" && this.state.password === "secret") {
            this.setState({
                isLoggedIn: true
            });
        } else {
            alert("Wrong credentials! Try again.");
        }
    }

    // Login form onChange handler
    loginOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            // console.log("USERNAME", this.state.username);
            // console.log("PASSWORD", this.state.password);
        })
    }

    // Enter your name onChange handler
    nameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    // Add one item to quantity
    increment() {
        this.setState((state) => {
            return {
                quantity: state.quantity >= 10 ? 10 : state.quantity + 1   
            } 
        })
    }

    // Take one item from quantity
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

                <br /> <br />

                <Login 
                    loginOnChange={this.loginOnChange}
                    logIn={this.LogIn}
                />
                { this.state.isLoggedIn ? <Todos /> : null }
            </div>
        )
    } 
}

import React from "react";
import { Toggle } from "./Toggle";
import { Users } from "./Users";
import axios from "axios";

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            date: new Date(),
            toggleComponent: false
        }

        this.Toggle = this.Toggle.bind(this);
        this.FetchUsers = this.FetchUsers.bind(this);
        console.log("Coming from the constructor");
    }

    componentWillMount() {
        console.log("Component Will Mount");
    }

    componentDidMount() {
        console.log("Component Did Mount");
        // this.Timer = setInterval(() => {
        //     this.Tick();
        // }, 1000);
        this.FetchUsers();
    }

    Tick() {
        this.setState({
            date: new Date()
        });
    }

    shouldComponentUpdate(prevState, prevProps) {
        console.log("Should component update");
        return true;
    }

    componentWillUpdate(nextState, nextProps) {
        console.log("Component Will Update");
    }

    // This lifecycle runs after shouldComponentUpdate returns true
    componentDidUpdate(nextState, nextProps) {
        console.log("Component Did Update");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component Will Receive Props");
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    Toggle() {
        this.setState((state) => {
            return {
                toggleComponent: !state.toggleComponent
            }
        })
    }

    FetchUsers() {
        // Fetch
        
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => { return res.json() })
        //     .then((data) => { 
        //         this.setState({
        //             users: data
        //         }, () => {
        //             console.log(this.state);
        //         })
        //      })
        //      .catch((err) => console.error(err));

        // Axios
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                this.setState({
                    users: res.data
                })
            })
            .catch((err) => console.log(err));
    }

    render() {
        return(
            <div>
                {/* <h2>Hello World, today is {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.Toggle}>Toggle</button> */}
                {this.state.toggleComponent ? <Toggle /> : null}

                {
                    this.state.users.length <= 0

                    ?

                    <h2>Loading...</h2>

                    :

                    <Users users={this.state.users} />

                }
            </div>
        )
    }
}
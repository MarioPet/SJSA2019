import React from "react";
import { AddUser } from "../actions/index";
import { createStore } from "redux";

const reducer = function(state, action) {
    switch(action.type) {
        case "INC" :
            return state + action.payload;
        case "DEC" :
            return state - action.payload;
        default: return state;
    }
}
const store = createStore(reducer, 0);

export class App extends React.Component {

    componentDidMount() {
        // this.props.store.dispatch(AddUser({name: "Mario Petkovski", id: 1}));
        // this.props.store.subscribe(() => console.log(this.props.store.getState()));
        store.dispatch({type: "INC", payload: 5});
        store.dispatch({type: "DEC", payload: 2});
        store.dispatch({type: "INC", payload: 4});
    }

    render() {

        store.subscribe(() => {
            console.log("State changed => ", store.getState());
        });

        return(
            <h2>Intro to Redux</h2>
        )
    }
}
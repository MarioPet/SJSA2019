import React from "react";
import { Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { CryptoList } from "./CryptoList";
import { Hoc } from "./Hoc";

export class App extends React.Component {
    render() {
        return (
            <div id="app">
                <Route exact path="/" component={ Welcome } />
                <Route path="/crypto-list" component={ CryptoList } />
                <Route path="/hoc" component={ Hoc } />
            </div>
        )
    }
}
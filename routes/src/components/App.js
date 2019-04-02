import React from "react";
import { Welcome } from "./Welcome";
import { Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

export class App extends React.Component {
    render() {

        let user = {
            firstName: "Mario",
            lastName: "Petkovski",
            handle: "@mario5et"
        }

        let date = "Vto, Apr 2, 2019";

        return(
            <div>
                <Welcome user={user} date={date} test="ReactJS" />
                <Header />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        )
    }
}
import React from "react";
import { connect } from "react-redux";
import { FetchUser } from "../actions/UserActions";

export class App extends React.Component {

    componentDidMount() {
        this.props.FetchUser();
    }

    render() {
        return(
            <div id="app">
                {
                    this.props.UserData.fetching

                    ?

                    <h2>Fetching User...</h2>

                    :

                    <h2>Hello, {this.props.UserData.user.name}</h2>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        UserData: state.UsersReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchUser: () => {
            dispatch(FetchUser());
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);


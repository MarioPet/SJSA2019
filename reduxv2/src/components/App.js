import React from "react";
import { connect } from "react-redux";
import { FetchUsers, AddNewUser } from "../actions/UsersActions";

export class App extends React.Component {

    componentDidMount() {
        this.props.FetchUsers();
        this.props.AddNewUser({user: "Brian DePalma", id: 3, active: false});
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Hello World.</h2>
                <button 
                    onClick={() => this.props.AddNewUser({user: "Sam Peckinpah", id: this.props.users.length+1, active: true})}
                >+ Add new user</button> 
                <br/>
                <hr/>
                 {
                    this.props.users.filter((user) => {
                        return user.active;
                    }).map((user) => {
                        return (
                            <h2 key={user.id}>{user.user}</h2>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersReducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchUsers: () => {
            dispatch(FetchUsers());
        },
        AddNewUser: (user) => {
            dispatch(AddNewUser(user));
        }
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
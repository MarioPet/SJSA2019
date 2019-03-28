import React from "react";
import { ListCreator } from "./ListCreator";
import { List } from "./List";

export class Todos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todo: "",
            todos: [
                "Walk the dog",
                "Renew Liscense",
                "Sleep"
            ]
        }

        this.HandleChange = this.HandleChange.bind(this);
        this.AddTodo = this.AddTodo.bind(this);
    }

    HandleChange(e) {
        this.setState({
            todo: e.target.value
        });
    };

    AddTodo(e) {
        e.preventDefault();
        this.setState((state) => {
            return {
                todos: [this.state.todo, ...state.todos],
                todo: ""
            }
        });
    };

    render() {
        return (
            <div className="todos-container">
                <ListCreator 
                    HandleChange={this.HandleChange} 
                    todo={this.state.todo} 
                    AddTodo={this.AddTodo} 
                />
                <List todos={this.state.todos} />
            </div>
        )
    }
}
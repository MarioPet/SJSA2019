import React from "react";
import { ListCreator } from "./ListCreator";
import { List } from "./List";

export class Todos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todo: "",
            todos: [
                {
                    name: "Walk the dog",
                    id: 1,
                    checked: false
                },
                {
                    name: "Renew Liscense",
                    id: 2,
                    checked: true
                },
                {
                    name: "Sleep",
                    id: 3,
                    checked: false
                }
            ]
        }

        this.HandleChange = this.HandleChange.bind(this);
        this.AddTodo = this.AddTodo.bind(this);
        this.checkboxChangeHandle = this.checkboxChangeHandle.bind(this);
    }

    checkboxChangeHandle(id) {
        this.setState((state) => {
            return {
                todos: state.todos.map(t => { 
                    return id === t.id ? Object.assign(t, { checked: !t.checked }) : t 
                })
            }
        }, () => {
            console.log("TODOS STATE", this.state.todos);
        })
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
                todos: [Object.assign({}, { name: this.state.todo, id: state.todos.length+1, checked: false }), ...state.todos],
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
                <List 
                    todos={this.state.todos}
                    checkboxChangeHandle={this.checkboxChangeHandle}
                />
            </div>
        )
    }
}
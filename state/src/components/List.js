import React from "react";

export class List extends React.Component {
    render() {
        return (
            <div className="list-container">
                <ul>
                    {
                        this.props.todos.map((todo, i) => {
                            return (
                                <li className={todo.checked ? "line-through" : ""} key={i}> 
                                    {todo.name}
                                    <input 
                                        onChange={() => this.props.checkboxChangeHandle(todo.id)} type="checkbox" 
                                        checked={todo.checked} 
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
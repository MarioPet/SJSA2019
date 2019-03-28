import React from "react";

export class ListCreator extends React.Component {
    render() {
        return (
            <div className="list-creator">
                <form onSubmit={this.props.AddTodo}>
                    <input 
                        value={this.props.todo} 
                        onChange={this.props.HandleChange}
                        type="text" 
                        placeholder="+Add item to list"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
import React from "react";

export const Quantity = (props) => {
    return(
        <div className="quantity">
            <button onClick={props.decrement} className="q-buttons">&minus;</button>
            <span className="q-value">{props.quantity}</span>
            <button onClick={props.increment} className="q-buttons">&#43;</button>
        </div>
    )
}
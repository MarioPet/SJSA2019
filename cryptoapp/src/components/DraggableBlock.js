import React from "react";
import { Draggable } from "gsap/all";

export const DraggableBlock = Component => {
    class Drag extends React.Component {

        componentDidMount() {
            Draggable.create(".draggable", {type: "x, y"});
        }

        render() {
            return (
                <Component />
            )
        }
    }
    return Drag;
}
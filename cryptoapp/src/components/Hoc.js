import React from "react";
import { DraggableBlock } from "./DraggableBlock";

const RedBlock = () => {
    return <span className="draggable" id="red"></span>
}
const GreenBlock = () => {
    return <span className="draggable" id="green"></span>
}
const BlueBlock = () => {
    return <span className="draggable" id="blue"></span>
}

const DraggableRedBlock = DraggableBlock(RedBlock);
const DraggableGreenBlock = DraggableBlock(GreenBlock);
const DraggableBlueBlock = DraggableBlock(BlueBlock);

export class Hoc extends React.Component {
    render() {
        return (
            <div id="hoc">
                <DraggableRedBlock />
                <DraggableGreenBlock />
                <DraggableBlueBlock />
            </div>
        )
    }
}
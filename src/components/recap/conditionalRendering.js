import { useState } from "react";
import SumFunction from "../sum/sumFunction";
import "./style.css";
//ASSIGNMENT
//on click of the change color button we have to change the color of the div from green to yellow.
//advanced: change color from green to yellow to orange using the colors array

export default function ConditionalRendering() {
    const [name, setName] = useState("Akash");
    const [colors, setColors] = useState(["green", "yellow", "orange"]);
    const [condition, setCondition] = useState(true);
    const [mystyle, setStyle] = useState({
        backgroundColor: "green", height: 200, width: 200
    })
    return (
        <div>
            {condition === true ? "Condition is true" : "Condition is false"}

            {condition === true && <SumFunction />}

            <div className="mydiv">
                This is my styled component
            </div>

            <div style={mystyle}>

            </div>
            <button>Change color</button>
        </div>
    )
}
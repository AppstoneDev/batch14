import { useState } from "react";
import SumFunction from "../sum/sumFunction";
import "./style.css";
//ASSIGNMENT
//on click of the change color button we have to change the color of the div from green to yellow.
//advanced: change color from green to yellow to orange using the colors array

export default function ConditionalRendering() {
    const [name, setName] = useState("Akash");
    const [colors, setColors] = useState(["green", "yellow", "orange", "purple", "blue"]);
    const [condition, setCondition] = useState(true);
    const [selectedColor, setSelectedColor] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [mystyle, setStyle] = useState({
        backgroundColor: "green", height: 200, width: 200
    })



    function handleClick() {
        setToggle(!toggle);
        setStyle({
            backgroundColor: toggle ? "green" : "yellow", height: 200, width: 200
        })
    }

    function handleClick2(){
        setSelectedColor(selectedColor+1);
        setStyle({
            backgroundColor: colors[selectedColor%colors.length], height: 200, width: 200
        })
    }

    return (
        <div>
            {condition === true ? "Condition is true" : "Condition is false"}

            {condition === true && <SumFunction />}

            <div className="mydiv">
                This is my styled component
            </div>

            <div style={mystyle}>

            </div>
            <button
                onClick={() => { handleClick2() }}
            >Change color</button>
        </div>
    )
}
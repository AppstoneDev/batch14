import React, { useState } from "react";

export default function SumFunction() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    return (
        <div>
            <input
                placeholder="enter number 1"
                onChange={(e) => { setNum1(e.target.value) }}
            />

            <input
                placeholder="enter number 2"
                onChange={(e) => { setNum2(parseInt(e.target.value)) }}
            />

            <button onClick={() => { setSum(num1 + num2) }}>
                add
            </button>
            <br />

            the sum is: {sum}
        </div>
    )
}
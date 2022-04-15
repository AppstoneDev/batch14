import { useState } from "react";
var sum = 0;
export default function Summer() {
    const [arr, setArr] = useState([10, 20, 30, 40, 50]);

    return (
        <div>
            THIS IS USING REDUCE
            {arr
                .filter((val) => {
                    return val > 30
                })
                .reduce((sum, current) => {
                    return sum + current
                }, 0)}

            <br />
            <br />

            THIS IS USING MAP
            {arr.map((val, index) => {
                if (val > 30) {
                    sum = sum + val;
                }

                if (index == arr.length - 1) {
                    return sum;
                }
            })}
        </div>
    )
} 
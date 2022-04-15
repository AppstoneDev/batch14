import { useState } from "react"
import Sum, { Difference, Product } from "./components";

export default function Calculator() {
    const [a, storeA] = useState(20);
    const [b, storeB] = useState(10);

    return (
        <div>
            <Sum
                vala={a}
                valb={b}
            />

            <Difference
                vala={a}
                valb={b}
            />

            <Product
                vala={a}
                valb={b}
            />
        </div>
    )
}
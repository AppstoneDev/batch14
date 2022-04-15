export default function Sum(props) {
    return (
        <div>sum is: {props.vala + props.valb}</div>
    )
}

export function Difference(props) {
    return (
        <div>difference is: {props.vala - props.valb}</div>
    )
}

export function Product(props) {
    return (
        <div>product is: {props.vala * props.valb}</div>
    )
}
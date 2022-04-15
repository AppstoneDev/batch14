import React from "react";

export default class SumClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      sum: 0,
      arr: [10, 20, 30, 40, 50]
    }
  }

  handleNum1 = (value) => {
    this.setState({
      num1: parseInt(value)
    })
  }

  handleNum2 = (value) => {
    this.setState({
      num2: parseInt(value)
    })
  }

  handleSum = () => {
    this.setState({
      sum: this.state.num1 + this.state.num2
    })
  }


  render() {
    return (
      <div>
        Hello from Sum Class
        <input
          onChange={(e) => { this.handleNum1(e.target.value) }}
        />

        <input
          onChange={(e) => { this.handleNum2(e.target.value) }}
        />

        <button
          onClick={()=>{ this.handleSum()}}
        >
          Sum
        </button>

        <br />

        Sum: {this.state.sum}
      </div>
    )
  }
}
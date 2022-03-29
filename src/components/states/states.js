import React from "react";

var b = 50;

export default class States extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      a: 0
    }
  }

  handleClick = () => {
    b = 500;
    console.log(b);
    // this.setState({
    //   a: 100
    // })
  }

  render() {
    return (
      <div>
        {b}
        <button onClick={() => { this.handleClick() }}>
          click me
        </button>
      </div>
    )
  }
}
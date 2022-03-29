import React from "react";
import LifecycleFunctional from "./lifecycleFunctional";

export default class ConditionalRendering extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      a: 0
    }
  }

  handleClick = () => {
    this.setState({
      a: 100
    })
  }

  render() {
    return (
      <div>
        {this.state.a}
        <button onClick={() => { this.handleClick() }}>
          click me
        </button>

        {/* if a is 0 then show lifecycle component */}
        {/* for any other value of a show some text */}

        {this.state.a === 0 ? <LifecycleFunctional /> : "failure"}
      </div>
    )
  }
}
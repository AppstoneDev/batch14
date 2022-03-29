import React from "react";

export default class Lifecycle extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      a: 0
    }
  }

  componentDidMount() {
    console.log("component has been mounted");
  }

  componentDidUpdate() {
    console.log("component has been updated");
  }

  handleClick = () => {
    this.setState({
      a: this.state.a + 1
    })
  }

  render() {
    console.log("component has been rendered");
    return (
      <div>
        Hello from Lifecycle
        <br />
        {this.state.a}
        <br />
        <button onClick={()=>{this.handleClick()}}>increase</button>
      </div>
    )
  }

  componentWillUnmount() {
    console.log("component has been unmounted");
  }
}
import React, { Component } from "react";
import CounterDisplayer from './CounterDisplayer'
import counter from '../Components/ClassStateExample/counter.css'

class MyCounter extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      
    };
  }


  allClicksCounter = () => {
      this.setState((state) => {
        return { count: state.count + 1 };
      });

    // this.setState({
    //   count: this.state.count + 1,
    // });
  };

  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      document.title = `Count: ( ${this.state.count} )`;
    }
  }
render() {
    return (
      <>
        <button
          onClick={() =>
            this.setState((state) => {
              return { count: state.count + 1 };
            })
          }
        >
          {this.state.count}
          <h1 style={{ color: "red" }}>Count</h1>
        </button>
        <CounterDisplayer childCompo={this.props.count} />
        {/* render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}>
          Count: {this.state.count}
        </button> */}
      </>
    );
  }
}
export default MyCounter;

import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increase = (e) => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.increase}>Click me</button>
      </div>
    );
  }
}
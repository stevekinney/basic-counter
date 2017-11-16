import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <section className="Counter">
        <h1>Count: {0}</h1>
        <button onClick={() => {}} className="full-width">Increment</button>
        <button onClick={() => {}} className="full-width">Decrement</button>
        <button onClick={() => {}} className="full-width">Reset</button>
      </section>
    );
  }
}

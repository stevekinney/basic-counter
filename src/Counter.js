import React, { Component } from 'react';

import Counter from './Counter';

export default class Application extends Component {
  render() {
    return (
      <section className="Counter">
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => {}}>Increment</button>
        <button onClick={() => {}}>Decrement</button>
        <button onClick={() => {}}>Reset</button>
      </section>
    );
  }
}

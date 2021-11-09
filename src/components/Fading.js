//import React from 'react';
import * as React from "react";

export default class Fading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sign: 1,
      opacity: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      setInterval(() => {
        let sign =
          this.state.opacity < 0 || this.state.opacity > 1
            ? this.state.sign * -1
            : this.state.sign;
        this.setState({ sign, opacity: this.state.opacity + sign * 0.1 });
      }, 100);
    }, this.props.offset);
  }

  render() {
    return (
      <div style={{ opacity: this.state.opacity }}>{this.props.children}</div>
    );
  }
}

import React from 'react';
import throttle from 'lodash/throttle';

export default function withMouseRatio(WrappedComponent) {
  return React.createClass({
    componentDidMount() {
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', throttle(this.handleMouseMove, 30));
      }
    },

    handleMouseMove(event) {
      const { height, width } = this.element.getBoundingClientRect();
      this.setState({
        y: event.clientY / height,
        x: event.clientX / width
      });
    },

    render() {
      const props = Object.assign({ mouseOffset: this.state }, this.props);

      const wrappedComponent = React.createElement(WrappedComponent, props);

      return React.createElement('div', {
        ref: (instance) => this.element = instance
      }, wrappedComponent);
    }
  });
}

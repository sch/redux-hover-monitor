import React from 'react';
import withMouse from 'react-with-mouse';
import ToggleStateButton from './ToggleStateButton';

function Line({ completion, isVisible }) {
  const style = {
    borderLeftWidth: 1,
    borderColor: '#FF9176',
    borderLeftStyle: 'solid',
    transform: `translate(${completion * 100}%, 0)`,
    // top: 0,
    // bottom: 0,
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1,
    pointerEvents: 'none',
    transitionDuration: 0.25,
    transitionProperty: 'opacity',
    opacity: isVisible ? 1 : 0
  };
  return React.createElement('div', { style });
}

const ScrubberFrame = withMouse(React.createClass({
  componentWillReceiveProps(nextProps) {
    if (nextProps.isSuspended) {
      nextProps.jumpToState(nextProps.mouse.ratio.x);
    }
  },

  render() {
    const { children, isSuspended, onClick, mouse } = this.props;

    const line = React.createElement(Line, {
      completion: mouse.ratio.x,
      isVisible: isSuspended
    });

    const frame = React.createElement('div', {
      onClick,
      style: Object.assign({
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: 0,
        width: '100vw',
        height: '100vh',
        transitionDuration: '0.25s',
        transitionProperty: 'transform, box-shadow, filter',
        transitionTimingFunction: 'cubic-bezier(0.6, 0, 0.4, 1)'
      }, isSuspended ? {
        transform: 'perspective(80vh) scale(0.95) rotateX(2deg) translateY(8em) translateZ(-1em)',
        transformStyle: 'preserve-3d',
        boxShadow: '0 0 20px rgba(1, 1, 1, 0.2)',
        filter: 'grayscale(100%)',
        WebkitUserSelect: 'none', MozUserSelect: 'none', MsUserSelect: 'none',
        cursor: 'ew-resize'
      } : {})
    }, children);

    return React.createElement('div', null, line, frame);
  }
}));

export const ScrubberContainer = ({ children }) => React.createElement('div', {
  style: {
    backgroundColor: '#FBFAF9',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100vw',
    height: '100vh'
  }
}, children);


export const ScrubberAction = ({ children }) => React.createElement('div', {
  style: {
    textAlign: 'center',
    fontFamily: '-apple-system, sans-serif',
    padding: '1em',
    color: 'rgba(0,0,0, 0.6)'
  }
}, children);

const Scrubber = ({ actions, isVisible, children }) => (
  <ScrubberContainer>
    <ScrubberAction>select a state</ScrubberAction>
    <ScrubberFrame isSuspended={isVisible} onClick={actions.hideTools} jumpToState={actions.jumpToState}>
      {children}
    </ScrubberFrame>
    <ToggleStateButton onPress={actions.showTools} withAction={isVisible} />
  </ScrubberContainer>
);


export default Scrubber;

import React, { PropTypes } from 'react';
import withMouseRatio from './withMouseRatio';

const iconMarkup = {
  __html: `<svg height="32" class="octicon octicon-versions" viewBox="0 0 14 16" version="1.1" width="28" aria-hidden="true"><path d="M13 3H7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-1 8H8V5h4v6zM4 4h1v1H4v6h1v1H4c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1zM1 5h1v1H1v4h1v1H1c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1z"></path></svg>`
};

const Icon = () => React.createElement('div', {
  style: { color: 'rgba(1, 1, 1, 0.2)' },
  dangerouslySetInnerHTML: iconMarkup
});


function Line({ completion }) {
  const style = {
    width: 1,
    backgroundColor: '#FF9176',
    left: completion * 100 + '%',
    top: 0,
    bottom: 0,
    height: '100%',
    position: 'relative'
  };
  return React.createElement('div', { style });
}

const ScrubberFrame = withMouseRatio(React.createClass({
  getDefaultProps() {
    return {
      mouseOffset: { x: 0, y: 0 }
    };
  },

  render() {
    const { children, isSuspended, onClick, mouseOffset } = this.props;
    const line = React.createElement(Line, { completion: (mouseOffset || {}).x });

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
        transform: 'perspective(80vh) scale(0.95) rotateX(2deg) translateY(8em)',
        transformStyle: 'preserve-3d',
        boxShadow: '0 0 20px rgba(1, 1, 1, 0.2)',
        filter: 'grayscale(100%)',
        WebkitUserSelect: 'none', MozUserSelect: 'none', MsUserSelect: 'none',
        // pointerEvents: 'none',
        cursor: 'ew-resize'
      } : {})
    }, children);

    return React.createElement('div', null, frame, line);
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

export const ScrubberInitiateButton = ({ onPress, isVisible }) => React.createElement('button', {
  style: {
    position: 'absolute',
    bottom: '1em',
    borderRadius: '0.2em',
    left: '1em',
    fill: 'rgba(1, 1, 1, 0.5)',
    backgroundColor: 'rgba(256, 256, 256, 0.8)',
    padding: '0.618em',
    transitionDuration: '0.25s',
    transitionProperty: 'opacity',
    pointerEvents: isVisible ? 'all' : 'none',
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0
  },
  onClick: onPress
}, React.createElement(Icon));

const Scrubber = ({ actions, isVisible, children }) => (
  <ScrubberContainer>
    <ScrubberAction>select a state</ScrubberAction>
    <ScrubberFrame isSuspended={isVisible} onClick={actions.hideTools}>
      {children}
    </ScrubberFrame>
    <ScrubberInitiateButton onPress={actions.showTools} isVisible={!isVisible} />
  </ScrubberContainer>
);


export default Scrubber;

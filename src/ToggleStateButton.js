import React from 'react';
import Icon from './Icon';

const styles = {
  ToggleStateButtonContainer: {
    position: 'fixed',
    bottom: '1em',
    right: '1em'
  },
  ToggleStateButton: {
    borderRadius: '0.2em',
    fill: 'rgba(1, 1, 1, 0.5)',
    backgroundColor: 'rgba(256, 256, 256, 0.8)',
    padding: '0.618em',
    transitionDuration: '0.25s',
    transitionProperty: 'fill, backgroundColor',
    cursor: 'pointer'
  },
  ToggleStateButtonSelected: {
    fill: 'white',
    backgroundColor: '#FF9176',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    cursor: 'none'
  }
};

export default function ToggleStateButton({ onPress, withAction }) {
  const button = React.createElement('button', {
    style: Object.assign({}, styles.ToggleStateButton, withAction ? styles.ToggleStateButtonSelected : {}),
    onClick: onPress
  }, React.createElement(Icon));

  return React.createElement('div', {
    style: styles.ToggleStateButtonContainer
  }, button);
}

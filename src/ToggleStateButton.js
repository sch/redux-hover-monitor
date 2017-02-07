import React from 'react';
import Icon from './Icon';

const styles = {
  ToggleStateButtonContainer: {
    position: 'fixed',
    bottom: '1em',
    right: '1em',
    display: 'flex',
    alignItems: 'center'
  },
  ToggleStateActionInfo: {
    display: 'block',
    backgroundColor: 'white',
    height: '100%',
    paddingRight: '1.618em',
    fontFamily: 'SFMono-Medium, "Inconsolata", monospace',
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

function ActionInfo({ metaAction }) {
  const { action: { type: actionType, ...actionParams } } = metaAction

  const actionTypeElement = React.createElement('div', {
    style: {
      fontFamily: 'SFMono-Medium, monospace',
      textAlign: 'right'
    }
  }, actionType);

  const actionParamsElement = React.createElement('div', {
    style: { fontFamily: 'SFMono-Regular, monospace' }
  }, JSON.stringify(actionParams, null, 2));

  return React.createElement('div', {
    style: styles.ToggleStateActionInfo
  }, actionTypeElement, actionParamsElement);
}

function Fader({ visible, children }) {
  return React.createElement('div', {
    style: {
      transitionDuration: '0.25s',
      transitionProperty: 'opacity',
      opacity: visible ? 1 : 0
    }
  }, children);
}

export default function ToggleStateButton({ onPress, withAction, currentAction }) {
  const info = React.createElement(Fader, { visible: withAction },
    React.createElement(ActionInfo, { metaAction: currentAction }));

  const button = React.createElement('button', {
    style: Object.assign({}, styles.ToggleStateButton, withAction ? styles.ToggleStateButtonSelected : {}),
    onClick: onPress
  }, React.createElement(Icon));

  return React.createElement('div', {
    style: styles.ToggleStateButtonContainer
  }, info, button);
}

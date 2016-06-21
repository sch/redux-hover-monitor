import React, { PropTypes, Component } from 'react';
import { ActionCreators } from 'redux-devtools';

import reducer from './reducers';
import { showTools, hideTools } from './actions';
import Scrubber, { ScrubberAction, ScrubberContainer, ScrubberInitiateButton } from './Scrubber';

const { jumpToState } = ActionCreators;


export default class HoverMonitor extends Component {
  static update = reducer;

  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func,
    monitorState: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { children, dispatch, monitorState } = this.props;
    const { isVisible } = monitorState;

    return React.createElement(Scrubber, {
      actions: {
        showTools() { dispatch(showTools()); },
        hideTools() { dispatch(hideTools()); }
      },
      isVisible
    }, children);
    // return (
    //   <ScrubberContainer>
    //     <ScrubberAction>select a state</ScrubberAction>
    //     <Scrubber isSuspended={isVisible} onClick={() => dispatch(hideTools())}>
    //       {children}
    //     </Scrubber>
    //     <ScrubberInitiateButton onPress={() => dispatch(showTools())} isVisible={!isVisible} />
    //   </ScrubberContainer>
    // );
  }
}

import React from 'react';
import { createDevTools } from 'redux-devtools';
import HoverMonitor from 'redux-hover-monitor';
import TodoApp from './TodoApp';

export default createDevTools((
  <HoverMonitor>
    <TodoApp/>
  </HoverMonitor>
));

## Redux Timeline

[![npm version](https://img.shields.io/npm/v/redux-slider-monitor.svg?style=flat-square)](https://www.npmjs.com/package/redux-slider-monitor)

![hover monitor in action](http://g.recordit.co/Tnzt5F7yV5.gif)

Redux Timeline is a small drop-in developer tool for jumping back in time to
a previous point in your Redux app's session. Its goal is to be out-of-the-way
until you need to inspect the state of your app or jump to a known good state.

```js
import { Timeline } from "redux-timeline";
import { Provider } from "react-redux";
import App from "./App";

function App ({ store }) {
  return (
    <Provider store={createStore()}>
      <Timeline>
        <App/>
      </Timeline>
    </Provider>
  );
}
```

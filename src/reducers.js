import { SHOW_TOOLS, HIDE_TOOLS } from './actions';

const initialState = { isVisible: false };

export default function reducer(props, state = initialState, action) {
  switch (action.type) {
    case SHOW_TOOLS:
      return { isVisible: true };
    case HIDE_TOOLS:
      return { isVisible: false };
    default:
      return state;
  }
}

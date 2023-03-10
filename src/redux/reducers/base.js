import { TOGGLE_MODAL } from "../actionTypes";

const initialState = {
  isModalShowing: false,
  timer: 0,
};

// eslint-disable-next-line default-param-last
const base = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        isModalShowing: !state.isModalShowing,
      };
    }
    default: {
      return state;
    }
  }
};

export default base;

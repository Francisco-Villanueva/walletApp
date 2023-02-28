import { actionTypes } from "../actions";

const intialState = {
  users: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;

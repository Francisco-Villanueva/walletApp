import { actionTypes } from "../actions";

const intialState = {
  users: [],
  spents: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case actionTypes.GET_SPENTS: {
      return {
        ...state,
        spents: action.payload,
      };
    }

    case actionTypes.DELETE_SPENTS: {
      return {
        ...state,
        spents: state.spents.filter((spent) => spent.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default rootReducer;

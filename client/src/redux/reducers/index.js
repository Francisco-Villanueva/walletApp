import { actionTypes } from "../actions";

const intialState = {
  users: [],
  spents: [],
  spentsByTypes: [],
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

    case actionTypes.GET_SPENTS_BY_TYPES: {
      return {
        ...state,
        spentsByTypes: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;

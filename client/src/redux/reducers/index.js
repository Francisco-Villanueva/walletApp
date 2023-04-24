import { actionTypes } from "../actions";

const intialState = {
  users: [],
  actualUser: [],
  spents: [],
  spentsByTypes: [],
  wallets: [],
  userData: [],
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

    case actionTypes.SET_USER_ACTUAL: {
      return {
        ...state,
        actualUser: action.payload,
      };
    }

    case actionTypes.GET_WALLETS: {
      return {
        ...state,
        wallets: action.payload,
      };
    }

    case actionTypes.GET_USER_DATA: {
      return {
        ...state,
        userData: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;

import { SET_USERS, INCREASE_PAGE } from './user.Types';

const INITIAL_STATE = {
  users: [],
  currentPage: 1,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    }
    case INCREASE_PAGE: {
      return {
        ...state,
        currentPage: ++state.currentPage,
      }
    }

    default:
      return state;
  }
};

export default userReducer;

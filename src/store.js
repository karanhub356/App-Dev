import { createStore } from 'redux';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  // Add other initial states as needed
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;

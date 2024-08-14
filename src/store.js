import { createStore } from 'redux';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  // Add other initial states as needed
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      localStorage.removeItem('user');
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Optional: For Redux DevTools
);

export default store;

import {createContext, useReducer} from 'react'

const AppReducer = (state, action) => {
  switch (action, type) {
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
  ],
};

export const Appcontext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (<Appcontext.Provider value={{
    budget: state.budget,
    expense: state.expense,
    dispatch,
  }}>
    {props.childern}
  </Appcontext.Provider>)
};
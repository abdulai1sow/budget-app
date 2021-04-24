import {createContext, useReducer} from 'react'

const AppReducer = (state, action) => {
  switch (action,type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expense: [...state.expenses, action.payload],
      }
    default:
      return state;
  }
};

const initialState = {
  budget: 1000,
  expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'holiday', cost: 400 },
    { id: 13, name: 'car service', cost: 50 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (<AppContext.Provider value={{
    budget: state.budget,
    expense: state.expense,
    dispatch,
  }}>
    {props.childern}
  </AppContext.Provider>)
};
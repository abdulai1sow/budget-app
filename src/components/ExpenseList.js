import React, {useContext} from 'react'
import ExpenseItem from './ExpenseItem'
import {AppContext} from '../context/AppContext'

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  // const expenses = [
  //   { id: 1231232, name: 'shopping', cost: 50 },
  //   { id: 1231232, name: 'Holiday', cost: 300 },
  //   { id: 1231232, name: 'Transportation', cost: 70 },
  //   { id: 1231232, name: 'Fuel', cost: 40 },
  //   { id: 1231232, name: 'Child Care', cost: 500 },
  // ];

  return (
    <ul className='list-group'>
      {expenses.map(((expense) => (

        <ExpenseItem
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />

      )))}
  </ul>
  )

};

export default ExpenseList;
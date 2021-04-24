import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

const ExpenseTotal = () => {
  return (
    <div className='alert alert-primary'>
      <span>Spent so far $1000</span>
    </div>
  )
}
export default ExpenseTotal;
import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
  // Using 'State Slices' technique
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // Using one state technique
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   })

  const titleChangeHandler = (event) => {
    // Part of the 'State Slices' technique
    setEnteredTitle(event.target.value)

    // Using one state technique
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    // Better approach to using one state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
  }

  const amountChangeHandler = (event) => {
    // Part of the 'State Slices' technique
    setEnteredAmount(event.target.value)

    // Using one state technique
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })

    // Better approach to using one state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value }
    // })
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)

    // Using one state technique
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })

    // Better approach to using one state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value }
    // })
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm

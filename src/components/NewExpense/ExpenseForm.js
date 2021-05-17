import { useState } from 'react';
import classes from './ExpenseForm.module.css'
const ExpenseForm = () =>{
    const [currentTitle, updateTitle]=useState('');
    const [currentAmount, updateAmount]=useState('');
    const [currentDate, updateDate]=useState('');
    const titleChangeHandler=(event)=>{
        updateTitle(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        updateDate(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        updateAmount(event.target.value);
    }
    const submitHandler =(event)=>{
        event.preventDefault();
        const expenseData = {
            title : currentTitle,
            amount : currentAmount,
            date : new Date(currentDate)
        }
        updateTitle('');
        updateDate('');
        updateAmount('');
    }
    return (
    <form>
        <div className={classes.NewExpense__controls}>
            <div className={classes.NewExpense__control}>
                <label>Title</label>
                <input type='text' value={currentTitle} onChange={titleChangeHandler}/>
            </div>
            <div className={classes.NewExpense__control}>
                <label>Amount</label>
                <input type='number' value={currentAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className={classes.NewExpense__control}>
                <label>Date</label>
                <input type='date' value={currentDate} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className={classes.NewExpense__actions}>
            <button type='submit' onClick={submitHandler}>Add Expense</button>
        </div>
    </form>    
        )

}
export default ExpenseForm;
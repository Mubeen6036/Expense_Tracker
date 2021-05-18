import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import classes from './NewExpense.module.css';
const NewExpense = (props) =>{
    const [showForm, toggleShowExpense] = useState(false);
    const toggleShow=()=>{
        toggleShowExpense(previousState=>!previousState);
    }
    const onSaveDataHandler=(enteredExpenseData)=>{
        toggleShow();
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    }
    const formContent = showForm?<ExpenseForm onSaveData={onSaveDataHandler} onCancel={toggleShow}/>
                                :<button onClick={toggleShow}>Add Expense</button>;
    return (
    <div className={classes.NewExpense}>
        {formContent}
    </div>)
}
export default NewExpense;
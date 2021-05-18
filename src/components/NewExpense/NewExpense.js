import ExpenseForm from './ExpenseForm';
import classes from './NewExpense.module.css';
const newExpense = (props) =>{
    const onSaveDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    }
    return (
    <div className={classes.NewExpense}>
        <ExpenseForm onSaveData={onSaveDataHandler}/>
    </div>)
}
export default newExpense;
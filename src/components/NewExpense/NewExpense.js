import ExpenseForm from './ExpenseForm';
import classes from './NewExpense.module.css';
const newExpense = (props) =>{
    return (
    <div className={classes.NewExpense}>
        <ExpenseForm/>
    </div>)
}
export default newExpense;
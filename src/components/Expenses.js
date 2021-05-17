import ExpenseItem from './ExpenseItem';
import classes from './Expenses.module.css';
import Card from './Card';
const expenses = (props) =>{
    const expenseItems = props.expenses.map((x,i)=><ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date}/>)
    return(
        <Card className={classes.Expenses}>
            {expenseItems}
        </Card>
    );
}
export default expenses;
import classes from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
const ExpenseItem = (props) =>{
    return(
        <Card className={classes.ExpenseItem}>
            <ExpenseDate date={props.date}/>
            <div className = {classes.ExpenseItem__Description}>
                <h2>{props.title}</h2>
                <div className={classes.ExpenseItem__Price}>{props.amount}</div>
            </div> 
        </Card>
    )
}
export default ExpenseItem;
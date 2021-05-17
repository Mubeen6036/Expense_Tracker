import classes from './ExpenseDate.module.css';
const expenseDate = (props) =>{
    const month = props.date.toLocaleString("en-US", {month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US",{day:'2-digit'});
    return(
        <div className={classes.Expensedate}>
            <div className={classes.Expensedate__day}>{day}</div>
            <div className={classes.Expensedate__month}>{month}</div>
            <div className={classes.Expensedate__year}>{year}</div>
        </div>
    );
}
export default expenseDate;
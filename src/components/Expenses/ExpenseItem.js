import classes from './ExpenseItem.module.css';
import {useState} from 'react'; 
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) =>{
    const [title, setNewState] = useState(props.title);
    const changeHandler=()=>{
        setNewState("Updated !");
    }

    return(
        <Card className={classes.ExpenseItem}>
            <ExpenseDate date={props.date}/>
            <div className = {classes.ExpenseItem__Description}>
                <h2>{title}</h2>
                <div className={classes.ExpenseItem__Price}>{props.amount}</div>
            </div> 
            <div>
                <button onClick={changeHandler}>Button</button>
            </div>
        </Card>
    )
}
export default ExpenseItem;
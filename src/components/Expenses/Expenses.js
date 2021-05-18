import ExpenseItem from './ExpenseItem';
import classes from './Expenses.module.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
const Expenses = (props) =>{
    const [currentYear, updateYear]= useState('');
    const onChangeHadler = (event) =>{
        updateYear(event.target.value);
    };
    const expenseItems = props.expenses.length>0?props.expenses.map((x,i)=><ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date}/>):null;
    return(
        <Card className={classes.Expenses}>
            <ExpensesFilter onChange={onChangeHadler} selected={currentYear}/>
            {expenseItems}
        </Card>
    );
}
export default Expenses;
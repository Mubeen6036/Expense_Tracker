import ExpenseItem from './ExpenseItem';
import classes from './Expenses.module.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) =>{
    const [currentYear, updateYear]= useState('');
    const onChangeHadler = (event) =>{
        updateYear(event.target.value);
    };
    const filteredExpenses = props.expenses.length>0?props.expenses
                .filter(x=>x.date.getFullYear() === parseInt(currentYear))
                .map((x,i)=><ExpenseItem key={x.id} title={x.title} amount={x.amount} date={x.date}/>):[];
    const expenseItems = filteredExpenses.length>0?filteredExpenses:<p>No Expenses Found</p>;
    return( 
        <Card className={classes.Expenses}>
            <ExpensesFilter onChange={onChangeHadler} selected={currentYear}/>
            <ExpensesChart expenses={props.expenses
                .filter(x=>x.date.getFullYear() === parseInt(currentYear))}/>
            {expenseItems}
        </Card>
    );
}
export default Expenses;
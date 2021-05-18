import classes from './ExpenseFilter.module.css';

const ExpensesFilter = (props) => {
  return (
    <div className={classes.ExpensesFilter}>
      <div className={classes.ExpensesFilter__control}>
        <label>Filter by year</label>
        <select onChange={props.onChange} value={props.selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
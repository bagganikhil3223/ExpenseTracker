import React ,{useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  }

  const filteredItems = props.items.filter( items => {
    return items.date.getFullYear().toString() === filteredYear;
  });

// Also we can use ternary operator and && for abusing (like (100 && 50) will return 50 and (100 || 50) will return 100)
    return (
        <Card className="expenses">
          <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpensesChart expenses={filteredItems} />
          <ExpensesList items={filteredItems}/>
      {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
        </Card>
    );

}

export default Expenses;
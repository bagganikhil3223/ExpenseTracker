import React, {useState} from "react"; // no need to import but import it so that u can know it is working under the hood
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpense]=useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense,...prevExpenses];
    });
  };
 
  // return React.createElement( // under the hood this happens when we write jsx code
  //   'div',
  //   {},
  //   React.createElement('h2', {},'Let\'s get started!'),
  //   React.createElement(Expenses,{items:expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

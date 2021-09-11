import React, { useState } from "react";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // only one root element and wrap other elements inside it
    const [title,setTitle] = useState(props.title);
    console.log('props', props);
    const clickHandler = () => {
        setTitle('Updated');
        console.log('Clicked!!!!');
    }
return (
    <li>
    <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description"><h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Click Me</button> */}
    </Card>
    </li>
    );
}

export default ExpenseItem;
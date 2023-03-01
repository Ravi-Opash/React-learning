import React from "react";
import ExpenseItrm from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="App">
      <ExpenseItrm
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItrm>
      <ExpenseItrm
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItrm>
      <ExpenseItrm
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItrm>
    </Card>
  );
}

export default Expenses;

import React, { useState } from "react";
import ExpenseItrm from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {

  const [selectedValue, setSelectValue] = useState("2020");
  const onYearSelect = (addYear) => {
    setSelectValue(addYear);
    console.log(addYear)
  };

  return (
    <Card className="App">
      <ExpenseFilter selected={selectedValue} yaerSelecter={onYearSelect} />
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
};

export default Expenses;

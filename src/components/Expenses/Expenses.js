import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedValue, setSelectValue] = useState("2021");
  const onYearSelect = (addYear) => {
    setSelectValue(addYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    // expense.preventDefault();
    return expense.date.getFullYear().toString()===selectedValue;
  });

  // console.log(filteredExpenses)



  return (
    <Card className="App">
      <ExpenseFilter selected={selectedValue} yaerSelecter={onYearSelect} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;

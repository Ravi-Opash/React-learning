import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedValue, setSelectValue] = useState("2023");
  const onYearSelect = (addYear) => {
    setSelectValue(addYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===selectedValue;
  });



  return (
    <Card className="App">
      <ExpenseFilter selected={selectedValue} yaerSelecter={onYearSelect} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;

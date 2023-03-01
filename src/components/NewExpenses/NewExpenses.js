import React from "react";
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";
import Card from "../UI/Card";

const NewExpenses = (props) => {
  const saveNewData = (newExpensesData) => {
    const newData = {
        ...newExpensesData,
        id: Math.random().toString()
    };
    props.addexpense(newData);
  };
  return (
    <Card className="new_expenses_main">
      <ExpensesForm onNewData={saveNewData} />
    </Card>
  );
};

export default NewExpenses;

import React from "react";
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm";
import Card from "../UI/Card";

const NewExpenses = (props) => {
  return (
    <Card className="new_expenses_main">
      <ExpensesForm />
    </Card>
  );
}

export default NewExpenses;

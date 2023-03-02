import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItrm = (props) => {
  return (
    <li>
      <Card className="expense_item">
        <ExpenseDate date={props.date} />
        <div className="expense_item_info">
          <h2>{props.title}</h2>
          <Card className="expence_item_amount">${props.amount}</Card>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItrm;

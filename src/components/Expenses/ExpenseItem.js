import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

const ExpenseItrm = (props) => {

  const [title, setTitle] = useState(props.title)
 
  const onBtnClick = () => {
    setTitle('updated!');
  }

  return (
    <Card className="expense_item">
      <ExpenseDate date={props.date} />
      <div className="expense_item_info">
        <h2>{title}</h2>
        <Card className="expence_item_amount">${props.amount}</Card>
        <button onClick={onBtnClick}>CLick</button>
      </div>
    </Card>
  );
}

export default ExpenseItrm;

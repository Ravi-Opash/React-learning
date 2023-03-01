import React, { useState } from "react";
import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const onchangeTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const onChangeAmount = (event) => {
    setNewAmount(event.target.value);
  };

  const onchangeDate = (event) => {
    setNewDate(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newData = {
        title: newTitle,
        amount: newAmount,
        date: new Date(newDate)
    }
    props.onNewData(newData)
    setNewTitle('');
    setNewAmount('');
    setNewDate('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="main_box">
        <div className="box">
          <label>Title:</label>
          <input type="text" onChange={onchangeTitle} value={newTitle} />
        </div>
        <div className="box">
          <label>Amount:</label>
          <input type="number" min="0.01" step="0.01" onChange={onChangeAmount} value={newAmount} />
        </div>
        <div className="box">
          <label>Date:</label>
          <input type="date" min="2019-01-01" max="2023-12-31" onChange={onchangeDate} value={newDate} />
        </div>
      </div>
      <div className="Btn_box">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpensesForm;

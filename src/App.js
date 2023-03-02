import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const Demo_Expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 299.99,
    date: new Date(2021, 7, 21),
  },
  {
    id: "e2",
    title: "News Paper",
    amount: 120.85,
    date: new Date(2021, 12, 22),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 2200,
    date: new Date(2020, 1, 1),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 2200,
    date: new Date(2021, 1, 1),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 2200,
    date: new Date(2022, 1, 1),
  },
];

const App = () => {
  const [expenses, addExpenses] = useState(Demo_Expenses);

  const addNewExpenseData = (newExpenseData) => {
    addExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses]
    });
  };

  return (
    <div>
      <h2>Started</h2>
      <NewExpenses addexpense={addNewExpenseData} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

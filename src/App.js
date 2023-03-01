import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 200,
      date: new Date(2021, 3, 23),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 200,
      date: new Date(2021, 3, 23),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 200,
      date: new Date(2021, 3, 23),
    },
  ];

  const addNewExpenseData =(newExpenseData) => {
    const newData = {
      ...newExpenseData
    }
    console.log(newData);
  }

  return (
    <div>
      <h2>Started</h2>
      <NewExpenses addexpense={addNewExpenseData}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

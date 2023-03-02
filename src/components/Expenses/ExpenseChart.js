import { useState } from "react";
import Chart from "../Chart/Chart";

 const ExpenseChart = (props) => {
//   console.log(props.expenses);
  let expance = props.expenses;
 

  let chartDatapoints = [
    { lable: "Jan", value: 0 },
    { lable: "Feb", value: 0 },
    { lable: "Mar", value: 0 },
    { lable: "Apr", value: 0 },
    { lable: "May", value: 0 },
    { lable: "Jun", value: 0 },
    { lable: "Jul", value: 0 },
    { lable: "Aug", value: 0 },
    { lable: "Sep", value: 0 },
    { lable: "Oct", value: 0 },
    { lable: "Nov", value: 0 },
    { lable: "Dec", value: 0 },
  ];
//   let [state,setState] = useState(chartDatapoints)
//  
  //   console.log(props.expenses[0])
//   for (let expense of props.expenses) {
//     const expenseMonth = expense.date.getMonth();
//      console.log(expenseMonth)
//     chartDatapoints[expenseMonth].value += props.expenses[expenseMonth].amount;
//   }
expance.forEach(element => {
    const expenseMonth = element.date.getMonth();
    // console.log(expenseMonth)
    let val = element.amount;
    // console.log(element.amount);
    let x = chartDatapoints[expenseMonth].value;
    // console.log(x);
    // console.log(val);
     x = x+ val;
    chartDatapoints[expenseMonth].value = x;

    // let val = chartDatapoints[expenseMonth].value;
    // console.log(val);
    //  val += props.expenses[expenseMonth].amount;
});

  return <Chart datapoints={chartDatapoints} />;
};

export default ExpenseChart;

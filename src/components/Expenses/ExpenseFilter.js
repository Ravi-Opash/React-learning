import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const onChangeYear = (event) => {
    props.yaerSelecter(event.target.value);
  };

  return (
    <div className="year-selecter-main">
      <div className="year_selcter">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={onChangeYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

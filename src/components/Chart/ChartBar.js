import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
    console.log(props)

  let barHieght = '0%'
  let marginHeight = '0%'
  
  if(props.maxValue>0){
    barHieght = Math.floor((props.value / props.maxValue) * 100) + "%";  
  }

  console.log(barHieght);

  return (
    <div className="chart_bar">
      <div className="cahrt_bar_inner">
        <div className="chart_bar_fill" style={{ height: barHieght }}></div>
      </div>
      <div className="chart_bar_lable">{props.lable}</div>
    </div>
  );
};

export default ChartBar;

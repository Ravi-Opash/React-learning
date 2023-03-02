import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const datapointValues = props.datapoints.map(datapoint => {
        return datapoint.value
    });
    const totalMaximum = Math.max(...datapointValues)

  return (
    <div className="charts">
      {props.datapoints.map(
        datapoint => 
        <ChartBar
          key={datapoint.lable}
          value={datapoint.value}
          maxValue={totalMaximum}
          lable={datapoint.lable}
        />
        )}
    </div>
  );
};

export default Chart;

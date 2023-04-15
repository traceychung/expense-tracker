import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          ley={dataPoint.label}
        />
      ))}
    </div>
  );
}

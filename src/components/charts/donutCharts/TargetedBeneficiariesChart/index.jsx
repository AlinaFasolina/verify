import { PieChart, Pie, Cell } from "recharts";
import "./styles.scss";
import "../styles.scss";

const TargetedBeneficiariesChart = ({ percentsList, total }) => {
  const data = [
    { subtitle: "Girls", value: Number(percentsList[0]) },
    { subtitle: "Boys", value: Number(percentsList[1]) },
    { subtitle: "Women", value: Number(percentsList[2]) },
    { subtitle: "Men", value: Number(percentsList[3]) },
  ];
  const colors = ["#c8d6f0", "#c7c8ca", "#4f91cd", "#4d4e50"];

  return (
    <div className="targetedBeneficiaries-chart__wrapper">
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx={250}
          cy={250}
          labelLine={false}
          outerRadius={110}
          innerRadius={70}
          dataKey="value"
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
      <div>
        <div className="targetedBeneficiaries-chart__total-number donut-label">
          <p className="donut-total__top">{total}</p>
          <p className="donut-total__bottom ">people targeted</p>
        </div>
        <div className="targetedBeneficiaries__girls-label">
          <p className="donut-percent-label__white">{percentsList[0]}%</p>
        </div>
        <div className="targetedBeneficiaries__boys-label">
          <p className="donut-percent-label__white">{percentsList[1]}%</p>
        </div>
        <div className="targetedBeneficiaries__women-label">
          <p className="donut-percent-label__white">{percentsList[2]}%</p>
        </div>
        <div className="targetedBeneficiaries__men-label">
          <p className="donut-percent-label__white">{percentsList[3]}%</p>
        </div>
      </div>
    </div>
  );
};

export default TargetedBeneficiariesChart;

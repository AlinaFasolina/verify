import { PieChart, Pie, Cell } from "recharts";
import "./styles.scss";
import "../styles.scss";

const WomanDonutChart = () => {
  const data = [
    { name: "23.2K", subtitle: "Girls", value: 30 },
    { name: "56.2K", subtitle: "Woman", value: 70 },
  ];
  const colors = ["#99b9e0", "#468ac9"];

  return (
    <div className="woman-chart__wrapper">
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx={250}
          cy={250}
          labelLine={false}
          outerRadius={110}
          innerRadius={90}
          dataKey="value"
          isAnimationActive={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
      <div>
        <div className="woman-chart__total-number donut-label">
          <p className="donut-total__top">79K</p>
          <p className="donut-total__bottom ">targeted</p>
        </div>
        <div className="woman-chart__girls-label donut-label">
          <p className="donut-label__top">23.2K</p>
          <p className="donut-label__bottom">Girls</p>
        </div>
        <div className="woman-chart__women-label donut-label">
          <p className="donut-label__top">56.2K</p>
          <p className="donut-label__bottom">Women</p>
        </div>
      </div>
    </div>
  );
};

export default WomanDonutChart;

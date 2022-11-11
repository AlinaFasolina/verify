import { PieChart, Pie, Cell } from "recharts";
import "./styles.scss";
import "../styles.scss";

const EducationDonutChart = () => {
  const data = [
    { name: "7K", subtitle: "Girls", value: 32 },
    { name: "6.5K", subtitle: "Boys", value: 30 },
    { name: "6.1", subtitle: "Women", value: 23 },
    { name: "3.6K", subtitle: "Men", value: 15 },
  ];

  const colors = ["#468ac9", "#99b9e0", "#c7d5ef", "#e1e9f6"];

  return (
    <div className="education__wrapper">
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
        <div className="education__total-number donut-label">
          <p className="education-total__top">22K</p>
          <p className="education-total__bottom">targeted</p>
        </div>
        <div className="education__boys-label donut-label">
          <p className="donut-label__top">6.5K</p>
          <p className="donut-label__bottom">Boys</p>
        </div>
        <div className="education__girls-label donut-label">
          <p className="donut-label__top">7K</p>
          <p className="donut-label__bottom">Girls</p>
        </div>
        <div className="education__men-label donut-label">
          <p className="donut-label__top">3.6K</p>
          <p className="donut-label__bottom">Men</p>
        </div>
        <div className="education__women-label donut-label">
          <p className="donut-label__top">6.1K</p>
          <p className="donut-label__bottom">Women</p>
        </div>
      </div>
    </div>
  );
};

export default EducationDonutChart;

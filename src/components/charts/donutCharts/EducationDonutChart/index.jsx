import { PieChart, Pie, Cell } from "recharts";
import "./styles.scss";
import "../styles.scss";

const EducationDonutChart = ({ women, girls, boys, men }) => {
  const total = Math.round(
    Number(women) + Number(girls) + Number(boys) + Number(men)
  );
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
          innerRadius={60}
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
          <p className="donut-total__top">{total}K</p>
          <p className="donut-total__bottom">targeted</p>
        </div>
        <div className="education__boys-label donut-label">
          <p className="donut-label__top">{boys}K</p>
          <p className="donut-label__bottom">Boys</p>
        </div>
        <div className="education__girls-label donut-label">
          <p className="donut-label__top">{girls}K</p>
          <p className="donut-label__bottom">Girls</p>
        </div>
        <div className="education__men-label donut-label">
          <p className="donut-label__top">{men}K</p>
          <p className="donut-label__bottom">Men</p>
        </div>
        <div className="education__women-label donut-label">
          <p className="donut-label__top">{women}K</p>
          <p className="donut-label__bottom">Women</p>
        </div>
      </div>
    </div>
  );
};

export default EducationDonutChart;

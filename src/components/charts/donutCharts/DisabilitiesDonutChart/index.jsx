import { PieChart, Pie, Cell } from "recharts";
import "./styles.scss";
import "../styles.scss";

const DisabilitiesDonutChart = ({ women, girls, boys, men }) => {
  const total = Math.round(
    Number(women) + Number(girls) + Number(boys) + Number(men)
  );
  const data = [
    { name: "1.3K", subtitle: "Boys", value: 9 },
    { name: "1.6K", subtitle: "Girls", value: 11 },
    { name: "4.2K", subtitle: "Men", value: 30 },
    { name: "7.2", subtitle: "Women", value: 50 },
  ];
  const colors = ["#e1e9f6", "#aec7e6", "#99b9e0", "#468ac9"];

  return (
    <div className="disabilities__wrapper">
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
      <div className="disabilities__labels">
        <div className="disabilities__total-number donut-label">
          <p className="donut-total__top">{total}K</p>
          <p className="donut-total__bottom">targeted</p>
        </div>
        <div className="disabilities__boys-label donut-label">
          <p className="donut-label__top">{boys}K</p>
          <p className="donut-label__bottom">Boys</p>
        </div>
        <div className="disabilities__girls-label donut-label">
          <p className="donut-label__top">{girls}K</p>
          <p className="donut-label__bottom">Girls</p>
        </div>
        <div className="disabilities__men-label donut-label">
          <p className="donut-label__top">{men}K</p>
          <p className="donut-label__bottom">Men</p>
        </div>
        <div className="disabilities__women-label donut-label">
          <p className="donut-label__top">{women}K</p>
          <p className="donut-label__bottom">Women</p>
        </div>
      </div>
    </div>
  );
};

export default DisabilitiesDonutChart;

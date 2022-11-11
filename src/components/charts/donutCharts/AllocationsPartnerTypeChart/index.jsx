import { PieChart, Pie, Cell } from "recharts";
import "./styles.scss";
import "../styles.scss";

const AllocationsPartnerTypeChart = () => {
  const data = [
    { subtitle: "United Nations", value: 22 },
    { subtitle: "National NGOs", value: 27 },
    { subtitle: "International NGOs", value: 51 },
  ];
  const colors = ["#dde6f5", "#aec7e6", "#458bc9"];

  return (
    <div className="allocationsPartnerTypeChart__wrapper">
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
        <div className="allocationsPartnerTypeChart__total-number donut-label">
          <p className="donut-total__top">55</p>
          <p className="donut-total__bottom ">projects</p>
        </div>
        <div className="allocationsPartnerType__un-percent">
          <p className="donut-percent-label__white">22%</p>
        </div>
        <div className="allocationsPartnerType__un-label allocationsPartnerType-label">
          <p>26.3M</p>
          <p>
            <span>United Nations</span>
            <span>8 Partners</span>
            <span>12 Projects</span>
          </p>
        </div>
        <div className="allocationsPartnerType__nngo-percent">
          <p className="donut-percent-label__white">27%</p>
        </div>
        <div className="allocationsPartnerType__nngo-label allocationsPartnerType-label">
          <p>16.8M</p>
          <p>
            <span>National NGOs</span>
            <span>10 Partners</span>
            <span>15 Projects</span>
          </p>
        </div>
        <div className="allocationsPartnerType__ingo-percent">
          <p className="donut-percent-label__white">51%</p>
        </div>
        <div className="allocationsPartnerType__ingo-label allocationsPartnerType-label">
          <p>47.9M</p>
          <p>
            <span>International NGOs</span>
            <span>20 Partners</span>
            <span>28 Projects</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllocationsPartnerTypeChart;

import { PieChart, Pie, Cell } from "recharts";
import "./styles.scss";
import "../styles.scss";
import { fetchAllocatedByPartnerType } from "../../../../store/allocatedByPartnerTypeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AllocationsPartnerTypeChart = () => {
  const allocatedByPartnerType = useSelector(
    (state) => state.allocatedByPartnerType
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllocatedByPartnerType());
  }, [dispatch]);

  const records =
    allocatedByPartnerType?.allocatedByPartnerTypeList?.acf?.data || [];

  const projectsTotal =
    records.length > 0 &&
    records
      .map((item) => item.projects)
      .reduce((prev, current) => Number(prev) + Number(current));

  const allocatedTotal =
    records.length > 0 &&
    records
      .map((item) => item.value)
      .reduce((prev, current) => Number(prev) + Number(current));

  const percentsList =
    records.length &&
    records.map((item) => Math.round((item.value * 100) / allocatedTotal));

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
        {projectsTotal && (
          <div className="allocationsPartnerTypeChart__total-number donut-label">
            <p className="donut-total__top">{projectsTotal}</p>
            <p className="donut-total__bottom ">projects</p>
          </div>
        )}

        <div className="allocationsPartnerType__un-percent">
          {percentsList.length > 0 && (
            <p className="donut-percent-label__white">{percentsList[0]}%</p>
          )}
        </div>
        {records.length > 0 && (
          <div className="allocationsPartnerType__un-label allocationsPartnerType-label">
            <p>{records[0].value} </p>
            <p>
              <span>{records[0].name}</span>
              <span>{records[0].partners} Partners</span>
              <span>{records[0].projects} Projects</span>
            </p>
          </div>
        )}
        <div className="allocationsPartnerType__nngo-percent">
          {percentsList.length > 0 && (
            <p className="donut-percent-label__white">{percentsList[2]}%</p>
          )}
        </div>
        {records.length > 0 && (
          <div className="allocationsPartnerType__nngo-label allocationsPartnerType-label">
            <p>{records[2].value}</p>
            <p>
              <span>{records[2].name}</span>
              <span>{records[2].partners} Partners</span>
              <span>{records[2].projects} Projects</span>
            </p>
          </div>
        )}
        <div className="allocationsPartnerType__ingo-percent">
          {percentsList.length > 0 && (
            <p className="donut-percent-label__white">{percentsList[1]}%</p>
          )}
        </div>
        {records.length > 0 && (
          <div className="allocationsPartnerType__ingo-label allocationsPartnerType-label">
            <p>{records[1].value}</p>
            <p>
              <span>{records[1].name}</span>
              <span>{records[1].partners} Partners</span>
              <span>{records[1].projects} Projects</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllocationsPartnerTypeChart;

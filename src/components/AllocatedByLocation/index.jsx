import React from "react";
import "./styles.scss";
import IconInfo from "../IconInfo";
import { fetchAllocatedByLocation } from "../../store/allocatedByLocationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AllocatedByLocation = () => {
  const allocatedByLocation = useSelector((state) => state.allocatedByLocation);

  const dispatch = useDispatch();

  const records = allocatedByLocation?.allocatedByLocationList?.acf?.data || [];

  useEffect(() => {
    dispatch(fetchAllocatedByLocation());
  }, [dispatch]);

  return (
    <div className="allocatedByLocation">
      <h2 className="allocatedByLocation-title" id="allocated-location">
        Allocated by location
      </h2>
      <div className="allocatedByLocation-content">
        {records &&
          records?.length > 0 &&
          records.map((item) => (
            <IconInfo
              key={item.name}
              hasDollarSign={item["has-dollar-sign"] === "Yes" ? true : false}
              name={item.name}
              icon={item.icon}
              value={item.value}
              size="lg"
            />
          ))}
      </div>
    </div>
  );
};

export default AllocatedByLocation;

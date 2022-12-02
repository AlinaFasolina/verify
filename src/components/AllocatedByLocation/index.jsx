import React from "react";
import "./styles.scss";
import IconInfo from "../IconInfo";
import { fetchAllocatedByLocation } from "../../store/allocatedByLocationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AllocatedByLocation = () => {
  const allocatedByLocation = useSelector((state) => state.allocatedByLocation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllocatedByLocation());
  }, [dispatch]);

  return (
    <div className="allocatedByLocation">
      <h2 className="allocatedByLocation-title">Allocated by location</h2>
      <div className="allocatedByLocation-content">
        {allocatedByLocation?.allocatedByLocationList?.length > 0 &&
          allocatedByLocation.allocatedByLocationList.map((item) => (
            <IconInfo
              key={item.acf.name}
              hasDollarSign={
                item.acf["has-dollar-sign"] === "Yes" ? true : false
              }
              name={item.acf.name}
              icon={item.acf.icon}
              value={item.acf.value}
              size="lg"
            />
          ))}
      </div>
    </div>
  );
};

export default AllocatedByLocation;

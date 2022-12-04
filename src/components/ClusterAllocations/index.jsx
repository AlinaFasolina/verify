import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllocationsByCluster } from "../../store/allocationsByClusterSlice";
import ProgressBar from "../ProgressBar";
import "./styles.scss";

const ClusterAllocations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllocationsByCluster());
  }, [dispatch]);

  const allocationsByCluster = useSelector(
    (state) => state.allocationsByCluster
  );

  const records = allocationsByCluster?.allocationsByClusterList?.acf?.data || [];
  
  return (
    <div className="allocationsByCluster">
      <h2 className="allocationsByCluster-title" id="allocations-cluster">
        Allocations by cluster
      </h2>
      {records &&
        records.length > 0 &&
        records.map((item) => (
          <ProgressBar
            key={item.title}
            title={item.title}
            img={item.img}
            count={item.count}
          />
        ))}
    </div>
  );
};

export default ClusterAllocations;

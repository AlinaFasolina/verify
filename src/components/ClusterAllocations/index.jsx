import React from "react";
import { clusterAllocationsList } from "../../consts/consts";
import ProgressBar from "../ProgressBar";
import "./styles.scss";

const ClusterAllocations = () => {
  return (
    <div className="allocationsByCluster">
      <h2 className="allocationsByCluster-title">Allocations by cluster</h2>
      {clusterAllocationsList.map((item) => (
        <ProgressBar
          key={item.id}
          title={item.title}
          img={item.img}
          count={item.count}
        />
      ))}
    </div>
  );
};

export default ClusterAllocations;

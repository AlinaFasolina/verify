import React from "react";
import "./styles.scss";
import IconInfo from "../IconInfo";
import location from "../../img/icons/location.svg";
import peopleTarget from "../../img/icons/people-target.svg";

const AllocatedByLocation = () => {
  return (
    <div className="allocatedByLocation">
      <h2 className="allocatedByLocation-title">Allocated by location</h2>

      <div className="allocatedByLocation-allocated">
        <IconInfo
          hasDollarIcon
          title="Allocated"
          icon={location}
          amount="91M"
          size="lg"
        />
      </div>

      <div>
        <IconInfo
          title="People targeted"
          icon={peopleTarget}
          amount="4.9M"
          size="lg"
        />
      </div>
    </div>
  );
};

export default AllocatedByLocation;

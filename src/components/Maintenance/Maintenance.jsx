import React from "react";
import Maintenance_img from "../../assets/images/constructions.webp";

const Maintenance = () => {
  return (
    <>
      <div className="maintenance-wrapper">
        <h2>Under Maintenance</h2>
        <img src={Maintenance_img} alt="Maintenance" width={400} />
      </div>
    </>
  );
};

export default Maintenance;

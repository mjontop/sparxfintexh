import React from "react";
import profilePic from "../assets/MaskGroup.png";
import bellIcon from "../assets/BellIcon.png";
const Base = ({ children }) => (
  <>
    <div className="row shadow p-3  bg-white rounded">
      <div className="col-md-2 col-12 ">
        <img
          src="http://myvds.in/design/assets/images/v1126_50.png"
          width={80}
        />
      </div>
      <div className="col-md-10 col-12 py-3">
        <b style={{ fontSize: "32px" }}>Spark Trending Report</b>
        <div className="float-right">
          <img src={profilePic} alt="" width={50} className=" mr-4" />
          <span>Ramon Ridwan</span>
          <img src={bellIcon} alt="" width={24} className="mx-4" />
        </div>
      </div>
    </div>
    <div>
      <div className="row pb-3 ">
        <div className="col-md-2 right-shadow pt-5 screen-sm-hidden">
          <button className="btn bg-grad btn-block rounded text-left py-3 hide-2x mb-5 text-white text-center">
            <i className="fa fa-eye mx-2" aria-hidden="true"></i> Overview
          </button>
          <button className="btn bg-grad btn-block rounded text-left py-3 hide-2x text-white text-center">
            Logout
          </button>
        </div>
        <div className=" col-12  col-md-10 pt-5">{children}</div>
      </div>
    </div>
  </>
);

export default Base;

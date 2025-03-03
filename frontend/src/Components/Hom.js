import React from "react";
import "./Hom.css";
import { Link, Outlet } from "react-router-dom";
function Hom() {
  return (
    <div>
      <div className="hom1">
        <h1 className="hom2">Employee Leave Balance Tracker</h1>
      </div>
      <div className="hom11">
      <div className="hom3">
        
        <div className="hom4">
          <nav>
            <Link to="/aboutus">About Us</Link>
          </nav>
        </div>
        <div className="hom5">
          <nav>
            <Link to="/contactus">Contact Us</Link>
          </nav>
        </div>
        <div className="hom6">
          <nav>
            <Link to="/signup">Sign Up</Link>
          </nav>
        </div>
        <div className="hom15">
          <nav>
            <Link to="/login">Login</Link>
          </nav>
        </div>
        <div className="hom7">
          <nav>
            <Link to="/leaveinfo">Leave Info</Link>
          </nav>
        </div>
        
      </div>
      <Outlet />
      <div className="hom8">
        <h3 className="hom9">
          An Employee Leave Balance Tracker is a system designed to help
          employees and HR teams efficiently manage leave requests, track
          available leave balances, and streamline approvals. It provides a
          user-friendly interface where employees can check their leave
          entitlements, apply for time off, and receive notifications on
          approval status.
        </h3>
        <h3 className="hom10">
          For HR and managers, the system offers real-time insights into team
          availability, ensuring proper workforce planning and preventing
          scheduling conflicts. Features may include automated leave
          calculations, policy compliance tracking, calendar integration, and
          reporting tools. By reducing manual tracking efforts, this tool
          enhances transparency, improves efficiency, and promotes a better
          work-life balance for employees.
        </h3>
      </div>
      </div>
      
    </div>
  );
}
export default Hom;

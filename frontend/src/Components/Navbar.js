import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav class="nav">
        <h2 className="nav1">
          "Sick days and vacation days are meant for YOU—use them wisely!
          Track, Manage, and Plan Employee Leaves with Ease! Stay updated on
          leave balances, requests, and approvals for a smoother workflow. "
        </h2>
        <center>
        <NavLink className='no1'to="/hom">Home</NavLink>
        </center>
      </nav>
    </div>
  );
}
export default Navbar;

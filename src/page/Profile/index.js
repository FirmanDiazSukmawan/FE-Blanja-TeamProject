import React from "react";
import Dashboard from "../../component/Dashboard/Dashboard";
import StoreProfile from "../../component/Dashboard/StoreProfil";

function Profile() {
  const role = localStorage.getItem("role");

  return <>{role === "seller" ? <StoreProfile /> : <Dashboard />}</>;
}

export default Profile;

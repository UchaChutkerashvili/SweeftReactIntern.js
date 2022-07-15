import React from "react";
import classes from "./UserAddress.module.css";

function UserAddress({
  city,
  country,
  name,
  state,
  streetAddress,
  suffix,
  zipCode,
}) {
  return (
    <div className={classes.address}>
      <p className={classes.title}>Address</p>

      <h3>{`${name} ${suffix}`}</h3>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <p>State: {state}</p>
      <p>Street Address: {streetAddress}</p>
      <p>ZIP: {zipCode}</p>
    </div>
  );
}

export default UserAddress;

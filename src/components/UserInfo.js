import React from "react";
import classes from "./UserInfo.module.css";

function UserInfo({
  name,
  lastName,
  prefix,
  title,
  jobArea,
  jobType,
  email,
  ip,
}) {
  return (
    <div className={classes.info}>
      <p className={classes.title}>Info</p>

      <div className={classes.name}>
        <h3>{`${prefix} ${name} ${lastName}`}</h3>
        <p>{title}</p>
      </div>

      <p>Email: {email}</p>
      <p>Ip Address: {ip}</p>
      <p>Job Area: {jobArea}</p>
      <p>Job Type: {jobType}</p>
    </div>
  );
}

export default UserInfo;

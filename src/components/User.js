import React from "react";
import { Link } from "react-router-dom";
import classes from './User.module.css'

function User({ id, imageUrl, lastName, name, prefix, title }) {
  return (
    <>
      <Link to={`/user/${id}`} className={classes.user} >
        <img
          src={`${imageUrl}?v=${id}`}
          alt={`${prefix} ${name} ${lastName}`}
        />
        <h3>{`${prefix} ${name} ${lastName}`}</h3>
        <p>{title}</p>
      </Link>
    </>
  );
}

export default User;

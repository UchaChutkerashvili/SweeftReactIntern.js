import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from './History.module.css'

function History({ id, prefix, name, lastName }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory([
      ...history,
      {
        id,
        prefix,
        fullName: `${name} ${lastName}`,
      },
    ]);
  }, [id]);

  return (
    <div className={classes.history} >
      {history.map((user, index) => {
        const { id, prefix, fullName } = user;
        if (index === history.length - 1) {
          return (
            <Link
              key={index}
              to={`/user/${id}`}
            >{`${prefix} ${fullName}`}</Link>
          );
        }
        return (
          <p key={index}>
            <Link to={`/user/${id}`}>{`${prefix} ${fullName}`}</Link>
            <span>&gt;</span>
          </p>
        );
      })}
    </div>
  );
}

export default History;

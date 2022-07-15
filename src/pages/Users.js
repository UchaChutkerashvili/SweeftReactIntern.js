import React, { useState, useEffect } from "react";
import User from "../components/User";
import { getUsers } from "../api";
import { useInfiniteScroll } from "../store/infiniteScroll-Context";
import classes from './Users.module.css'

function Users() {
  const { pageNumber, loading, setLoading } = useInfiniteScroll();
  const [users, setUsers] = useState([]);
  const [usersTotalControl, setUsersTotalControl] = useState({ nextPage: 1 });

  async function fetchData() {
    setLoading(true);
    const { list: tempUsers, pagination } = await getUsers(pageNumber);
    setUsers([...users, ...tempUsers]);
    setUsersTotalControl({
      ...usersTotalControl,
      nextPage: pagination.nextPage,
    });
    setLoading(false);
  }

  useEffect(() => {
    if (!usersTotalControl.nextPage) return;
    fetchData();
  }, [pageNumber]);

  if (Object.keys(users).length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <main className={classes.users} >
      {users.map((user) => {
        return <User key={user.id} {...user} />;
      })}
      {loading && <div className="loading">Loading...</div>}
    </main>
  );
}

export default Users;

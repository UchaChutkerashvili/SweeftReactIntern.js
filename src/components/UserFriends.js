import React, { useState, useEffect } from "react";
import User from "./User";
import { getUserFriends } from "../api";
import { useInfiniteScroll } from "../store/infiniteScroll-Context";
import classes from './UserFriends.module.css'

function UserFriends({ Id, userFriends, setUserFriends }) {
  const { pageNumber, loading, setLoading } = useInfiniteScroll();
  const [userFriendsTotalControl, setUserFriendsTotalControl] = useState({
    nextPage: 1,
  });

  async function fetchData() {
    setLoading(true);
    const { list: tempUserFriends, pagination } = await getUserFriends(
      Id,
      pageNumber
    );
    setUserFriends([...userFriends, ...tempUserFriends]);
    setUserFriendsTotalControl({
      ...userFriendsTotalControl,
      nextPage: pagination.nextPage,
    });
    setLoading(false);
  }

  useEffect(() => {
    if (!userFriendsTotalControl.nextPage) return;
    fetchData();
  }, [pageNumber]);

  return (
    <div>
      <h3>Friends:</h3>
      <div className={classes.users} >
        {userFriends.map((user) => {
          return <User key={user.id} {...user} />;
        })}
        {loading && <div className="loading">Loading...</div>}
      </div>
    </div>
  );
}

export default UserFriends;

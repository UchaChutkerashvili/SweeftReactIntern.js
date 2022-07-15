import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUserFriends, getUser } from "../api";
import UserInfo from "../components/UserInfo";
import UserAddress from "../components/UserAddress";
import UserFriends from "../components/UserFriends";
import History from "../components/History";
import classes from './SingleUser.module.css'

function UserDetailed() {
  const { Id } = useParams();
  const [user, setUser] = useState({});
  const [userFriends, setUserFriends] = useState([]);

  async function fetchData() {
    const tempUser = await getUser(Id);
    setUser(tempUser);
    const { list: tempUserFriends } = await getUserFriends(Id, 1);
    setUserFriends([...tempUserFriends]);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [Id]);

  if (Object.keys(user).length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <section className={classes.singleUser} >
      <div className={classes.details} >
        <img
          src={`${user.imageUrl}?v=${user.id}`}
          alt={`${user.prefix} ${user.name} ${user.lastName}`}
        />
        <UserInfo {...user} />
        <UserAddress {...user.company} {...user.address} />
      </div>
      <History {...user} />
      <UserFriends
        Id={Id}
        userFriends={userFriends}
        setUserFriends={setUserFriends}
      />
    </section>
  );
}

export default UserDetailed;

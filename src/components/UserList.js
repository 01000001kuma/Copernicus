import React from 'react';
import UserDetail from './UserDetail';
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/api/user/list')
      .then((res) => {
        console.log(res.data);
        setDataUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userList = dataUsers.map((user) => {
    return (
      <div key={user.id}>
        <UserDetail user={user} />
      </div>
    );
  });

  return (
    <>
      <h2>UserList</h2>
      {userList}
    </>
  );
};

export default UserList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetail from './UserDetail';

const UserList = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/user/list?page=${currentPage}`)
      .then((res) => {
        console.log(res.data);
        setDataUsers(res.data.users);
        setTotalPages(res.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

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
      {currentPage > 1 && (
        <button onClick={handlePrevPage}>Previous</button>
      )}
      {totalPages && currentPage < totalPages && (
        <button onClick={handleNextPage}>Next</button>
      )}
    </>
  );
};

export default UserList;
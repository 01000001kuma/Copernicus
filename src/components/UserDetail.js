import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';

function UserDetail(props) {
  const nav = useNavigate();

  //animation scrolling  down
  useEffect(() => {
    AOS.init();
  }, []);

  // delete user
  function deleteuser(iduser) {
    axios
      .post('/api/user/deleteuser', { iduser: iduser })
      .then((res) => {
        console.log(res.data[0]);
        alert(res.data);
        nav(0);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const user = props.user;

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 offset-3' data-aos='flip-right'>
            <ul className='list-group'>
              <li className='list-group-item'>Name: {user.first}</li>
              <li className='list-group-item'>Last name: {user.last}</li>
              <li className='list-group-item'>Email: {user.email}</li>
              <li className='list-group-item'>Company: {user.company}</li>
              <li className='list-group-item'>Country: {user.country}</li>
              <li className='list-group-item'>Id: {user.id}</li>
            </ul>
            <Link to={`/edituser/${user.id}`} className='btn btn-success'>
              Edit
            </Link>
            &nbsp;
            <button onClick={() => deleteuser(user.id)} className='btn btn-danger'>
              Delete
            </button>
            <hr className='mt-4' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
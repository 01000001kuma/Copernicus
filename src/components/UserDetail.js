import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UserDetail(user) {

  const nav = useNavigate()

  // delete user

  function deleteuser(iduser) {
    axios.post('/api/user/deleteuser', { iduser: iduser })
      .then((res) => {
        console.log(res.data[0])
        alert(res.data)
        nav(0)
      }
      ).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
        <div className='container'>
          <div className='row'>

            <div className='col-sm-6 offset-3'>

              <ul className='list-group'>
                <li className='list-group-item'>Name: {user.name}</li>
                <li className='list-group-item'>Last name: {user.last}</li>
                <li className='list-group-item'>Email: {user.email}</li>
                <li className='list-group-item'>Company: {user.company}</li>
                <li className='list-group-item'>Country: {user.country}</li>
                <li className='list-group-item'>Id: {user.iduser}</li>
              </ul>

              <Link to={`/edituser/${user.iduser}`} className='btn btn-success'>Edit</Link>
              &nbsp;
              <button onClick={()=>{deleteuser(user.name)}} className='btn btn-danger'>Delete</button>
              <hr className='mt-4'></hr>

            </div>

          </div>

        </div>
    </div>
  )
}

export default UserDetail
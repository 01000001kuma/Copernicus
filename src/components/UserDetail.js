import React from 'react'
import { Link } from 'react-router-dom'

function UserDetail(user) {

  // delete user
  
  function delete(user) {

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
              <button onClick={()=>{delete(user.name)}} className='btn btn-danger'>Delete</button>
              <hr className='mt-4'></hr>

            </div>

          </div>

        </div>
    </div>
  )
}

export default UserDetail
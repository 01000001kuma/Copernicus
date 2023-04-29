import React from 'react'

function UserDetail(user) {
  return (
    <div>
        <div className='container'>
          <div className='row'>
          <ul className='list-group'>
            <li className='list-group-item'>Name: {user.name}</li>
            <li className='list-group-item'>Last name: {user.last}</li>
            <li className='list-group-item'>Email: {user.email}</li>
            <li className='list-group-item'>Company: {user.company}</li>
            <li className='list-group-item'>Country: {user.country}</li>
          </ul>
          <button className='btn btn-primary'>Edit</button>
          <button className='btn btn-danger'>Delete</button>
          <hr className='mt-4'></hr>
          </div>

        </div>
    </div>
  )
}

export default UserDetail
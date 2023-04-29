import React from 'react'

const AddUser = () => {
  
  const addUser = () => {

  }

  
  return (
    <div className='container'>
        
        <div className='row'>
            <h2 className='mt-4'>Add User</h2>
        </div>

        <div className='row'>
          <div className='col-sm-6 offset-3'>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name</label>
              <input type='text' className='form-control'></input>
            </div> 
            <div className='mb-3'>
              <label htmlFor='last' className='form-label'>Last name</label>
              <input type='text' className='form-control'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input type='text' className='form-control'></input>
            </div> 
            <div className='mb-3'>
              <label htmlFor='company' className='form-label'>Company</label>
              <input type='text' className='form-control'></input>
            </div>
            <div className='mb-3'>
              <label htmlFor='country' className='form-label'>Country</label>
              <input type='text' className='form-control'></input>
            </div> 
            <button onClick={addUser} className='btn btn-success'>Add</button>
          </div>
        </div>

    </div>
  )
}

export default AddUser
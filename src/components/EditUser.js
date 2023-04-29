import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const EditUser = () => {

  const params = useParams()

  const [name, setName] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [country, setCountry] = useState('')
  const [iduser, setIduser] = useState('')

  useEffect(() => {
    axios.post('/api/user/obtaildatauser', { iduser: params.iduser })
      .then((res) => {
        console.log(res.data[0])
        const datauser = res.data[0]
        setName(datauser.name)
        setLast(datauser.last)
        setEmail(datauser.email)
        setCompany(datauser.company)
        setCountry(datauser.country)
        setIduser(datauser.iduser)
      }
      ).catch((err) => {
        console.log(err)
      })
  }, [])

  //Updating user

  function updating() {
    const updateUser = {
      name: name,
      last: last,
      email: email,
      company: company,
      country: country,
      iduser: params.iduser()
    }
    console.log(updateUser)

    axios.post('/api/user/updating', updateUser)
      .then((res) => {
        console.log(res.data)
        alert(res.data)
      }).then((err) => {
        console.log(err)
        alert('Error updating user')
      })
  }

  return (
    <div className='container'>
      <div className='row'>
        <h2 className='mt-4'>Edit User</h2>
      </div>

      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='last' className='form-label'>
              Last name
            </label>
            <input
              type='text'
              className='form-control'
              value={last}
              onChange={(e) => {
                setLast(e.target.value);
              }}
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='text'
              className='form-control'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='company' className='form-label'>
              Company
            </label>
            <input
              type='text'
              className='form-control'
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='country' className='form-label'>
              Country
            </label>
            <input
              type='text'
              className='form-control'
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            ></input>
          </div>
          <button onClick={updating} className='btn btn-success'>
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditUser
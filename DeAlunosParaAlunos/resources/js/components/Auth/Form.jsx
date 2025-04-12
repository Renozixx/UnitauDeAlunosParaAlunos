import React, { useState } from 'react'
import api from '../../api'
import { Link, useForm } from '@inertiajs/inertia-react'

const Form = ({ route, method }) => {
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [register, setRegister] = React.useState(false)
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState({ 
    name: '',
    email: '',
    password: '',
  })

  const handleSubmit = () => {

    api.post("127.0.0.1:8000\login", 
      data
    )
  }

  useState(() => {
    if(method == 'login'){
      setRegister(false)
    } else {
      setRegister(true)
    }
  },[])

  return (
    <form onSubmit={handleSubmit} className="md:w-1/3 md:m-0 w-full form-container">
      <div className='flex text-lg flex-col gap-y-4'>
        {register &
        <div className='flex flex-col'>
          <div>
            <label htmlFor="name">Username</label>
          </div>
          <input
            type="name"
            className='py-2 w-full'
            placeholder='email'
            value={data.name}
            onChange={e => setData('name', e.target.value)}
          />
        </div>
        }
        <div className='flex flex-col'>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input
            type="email"
            className='py-2 w-full'
            placeholder='email'
            value={data.name}
            onChange={e => setData('email', e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <div>
            <label htmlFor="email">Password</label>
          </div>
          <input
            type="email"
            className='py-2 w-full'
            placeholder='email'
            value={data.name}
            onChange={e => setData('password', e.target.value)}
          />
        </div>
      </div>
    </form>
  )
}

export default Form
import React from 'react'
import MyHeader from '../components/MyHeader'
import Form from '../components/Form'


const Register = () => {
  return (      
    <>
      <MyHeader />
      <Form route="/api/user/register/" method="register"></Form>
    </>
  )
}

export default Register
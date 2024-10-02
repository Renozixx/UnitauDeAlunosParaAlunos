import React from 'react'
import MyHeader from '../components/MyHeader'
import Form from '../components/Form'

const Login = () => {
  return (
    <>
      <MyHeader />
      <Form route="/api/token/" method="login"></Form>
    </>
  )
}

export default Login
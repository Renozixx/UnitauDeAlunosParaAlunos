import React from 'react'
import MyHeader from '../components/MyHeader'
import Form from '../components/Form'


const Register = () => {
  return (      
    <>
      <body className='h-screen darkmode-backgroundcolor'>
        <MyHeader />
        <Form route="/api/user/register/" method="register"></Form>  
      </body>
    </>
  )
}

export default Register
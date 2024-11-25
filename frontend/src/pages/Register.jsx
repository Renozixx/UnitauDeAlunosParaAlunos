import React from 'react'
import MyHeader from '../components/MyHeader'
import Form from '../components/Form'


const Register = () => {
  return (      
    <>
      <body className='h-screen darkmode-backgroundcolor'>
        <MyHeader />
        <main className='w-full flex items-center justify-center'>
          <Form route="/api/user/register/" method="register"></Form>  
        </main>
      </body>
    </>
  )
}

export default Register
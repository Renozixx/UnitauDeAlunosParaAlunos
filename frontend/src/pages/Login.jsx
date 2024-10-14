import React from 'react'
import MyHeader from '../components/MyHeader'
import Form from '../components/Form'

const Login = () => {
  return (
    <>
      <body className='h-screen darkmode-backgroundcolor'>
        <MyHeader/>
        <main>
          <Form route="/api/token/" method="login"></Form>
        </main>
      </body>
    </>
  )
}

export default Login
import React from 'react'
import MyHeader from '../../components/MyHeader'
import Form from '../../components/Auth/Form'
import Main from '../../layout/Main';

const Login = () => {
  console.log("Componente Home carregado");

  return (
    <Main>
      <section className='w-full flex items-center justify-center'>
        <Form method="login"></Form>
      </section>
    </Main>
  )
}

export default Login 
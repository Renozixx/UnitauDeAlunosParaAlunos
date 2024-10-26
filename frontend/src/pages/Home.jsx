import { Link } from 'react-router-dom'
import api from '../api'
import ProtectedRoute from '../components/ProtectedRoute'
import React, { useState, useEffect } from 'react'
import MyHeader from '../components/MyHeader'
// Promessa é divida, Olá, eu venho explicar para vocês porque não faz sentido usa classe. 
// O uso da classe até pouco tempo atrás era necessario por conta de algumas funções que a classe "Component" tinhe.
// Porem nos tempos recentes essas funções foram basicamente "Emancipadas" assim não é mais necessario o uso de
// Componentes baseados em Classe

const Home = () => {
  const [Post, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  // Essa função pega os posts do usuario no geral
  const getPosts = () => {
    api
    .get("/api/Posts/")
    .then((res) => res.data )
    .then((data, status) => { 
      setPosts(data)
      console.log(data, status)
    })
    .catch((error) => alert(error))
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <main className='darkmode-backgroundcolor h-screen'>
        <MyHeader />
        <article>
          <div>
            <form action="">

            </form>
          </div>
        </article>
      </main>
    </>
  )
}

export default Home
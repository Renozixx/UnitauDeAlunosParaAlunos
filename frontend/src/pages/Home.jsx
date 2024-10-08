import api from '../api'
import ProtectedRoute from '../components/ProtectedRoute'
import React, { useState, useEffect } from 'react'

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
    .get("/api/post/")
    .then((res) => res.data)
    .then((data) => { setPosts(data); console.log(data)} )
    .catch((error) => alert(error))
  }

  
  return (
    <>
      <h1>Home Page</h1>
      {Post.map(Post => {
        <div key={Post.id}>
          <h3>{Post.title}</h3>
          <p>{Post.title}</p>
        </div>
      })}
    </>
  )
}

export default Home
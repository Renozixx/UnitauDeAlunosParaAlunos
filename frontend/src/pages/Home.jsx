import { Link } from 'react-router-dom'
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

  useEffect(() => {
    getPosts();
  }, [])

  // Essa função pega os posts do usuario no geral
  const getPosts = () => {
    api
    .get("/api/Posts/")
    .then((res) => res.data)
    .then((data) => { setPosts(data); console.log(data)} )
    .catch((error) => alert(error))
  }

  
  return (
    <>
      <h1>Home Page</h1>
      <div>
        {Post.map(Post => {
          <div key={Post.id}>
            <h3>{Post.titulo}</h3>
            <p>{Post.conteudo}</p>
          </div>
        })}
      </div>
      <Link to={"UserPage"}>Teste</Link>
    </>
  )
}

export default Home
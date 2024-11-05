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
  const [PostsFiltered, setPostsFiltered] = useState([])
  const [pesquisa, setPesquisa] = useState("")

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
        <article className='darkmode-backgroundcolor py-4 px-6'>
          <div className='tophomepage-container mb-8 justify-between flex'>
            <form onSubmit={pesquisarPost}>
              <input 
                className='text-black py-2 px-3 rounded-md'
                type="text" 
                placeholder='O que deseja pesquisar'
                value={pesquisa}
                onChange={e => setPesquisa(e.target.value)}
              />
              <button onClick={pesquisarPost} className='py-2 px-3 ml-4 rounded-md bg-blue-950'>Pesquisar</button>
            </form>
            <Link to={"/PostCreate"} className='py-2 px-3 ml-4 rounded-md bg-blue-950'>+ Criar Postagem</Link>
          </div>
          <div>
            <h2 className='text-2xl mb-2'>Postagens Recentes</h2>
            <hr className='w-full fill-white opacity-30'/>
            {Post.map((post) => {
              const dateObj = new Date(post.criadoem);
              const formattedDate = dateObj.toLocaleDateString();
              
              return(
              <div key={post.id} className='w-full'>
                <h2 className='text-xl'>{post.titulo}</h2>
                <p className='text-base'>{post.descricao}</p>
                <div className='inline-flex mt-3 justify-between w-full'>
                  <div className='flex items-center'>
                    <Link to={`/Post/${post.id}`} state={{id: post.id}} className='bg-blue-950 py-2 px-4 rounded-md'>Ler Publicação</Link>
                  </div>
                  <div className='text-left break-words'>
                    <p>criado por: {post.autor}</p>
                    <p>criado em: {formattedDate}</p>
                  </div>
                </div>
                <hr className='w-full fill-white opacity-30 mt-1'/>
              </div>
              
              )
            })}
          </div>
        </article>
      </main>
    </>
  )
}

export default Home
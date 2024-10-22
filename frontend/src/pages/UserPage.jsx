import React, { useEffect, useState } from 'react'
import api from '../api'
import MyHeader from '../components/MyHeader'
import ProtectedRoute from '../components/ProtectedRoute'
import { Link, Navigate } from 'react-router-dom'

function UserPage() {
    const Username = localStorage.getItem("Username")
    const [todosPosts, setTodosPosts] = useState([])
    const [Posts, setPosts] = useState([])
    const [counter, setCounter] = useState(0)
    
    useEffect(() => {
        getPosts()
        dividirPost()
    }, [])

    const getPosts = () => {
        api
            .get("/api/User/Post/")
            .then((res) => res.data)
            .then((data) => {
                setTodosPosts(data);
            })
            .catch((err) => alert(err));
    }
    const deletePost = async (e) => {
        api.delete(`/api/Post/delete/${id}/`)
        .then((res) => {
            if (res.status === 204) alert("Post Deleted!")
            else alert("Failed to delete Post!")
            getPosts()
        })
        .catch((error) => alert(error))
    }

    const Logout = () => {
      localStorage.clear()
      Navigate("/login")
    }

    const dividirPost = () => {
      setPosts([])
      console.log(todosPosts.slice(counter, counter+3))
      console.log(todosPosts)
      setPosts(todosPosts.slice(counter, counter+3))
    }

    const ProximoPost = () => {
      setCounter(counter + 3)
      if(counter + 3 > todosPosts.length){
        btn = document.getElementById("btn-avancar")
        btn.enable = False
      }
      dividirPost()
    }

    const VoltarPosts = () => {
      setCounter(counter - 3)
      dividirPost()
    }

    return (
      <>
        <ProtectedRoute>
          <body className="darkmode-backgroundcolor lato-regular h-screen flex flex-col">
            <div>
                <MyHeader />
            </div>
            <main className="w-full lg:gap-4 lg:inline-flex h-full darkmode-backgroundcolor">
              <aside className="darkmode-itemscolor lg:w-44 lg:h-full break-words">
                <div className="ml-2 mr-2">
                  <h3 className="mb-5 mt-5">Foto do usuario</h3>
                  <h2 className="text-lg">
                    <b>{Username}</b>
                  </h2>
                  <div className="mt-3">
                    <p>
                      Olá, sou o Vinicius Ribeiro Renó, Estudante da
                      Universidade de Taubaté (UNITAU), atualmente trabalhando
                      em projetos pessoais apenas.
                    </p>
                    <button onClick={Logout} className='bg-blue-950 rounded-md p-2'>Logout</button>
                  </div>
                </div>
              </aside>
              <div className="inline-flex break-words w-full">
                <div className="darkmode-itemscolor rounded-md m-5 p-3 flex flex-col w-1/2">
                  <h2 className="text-2xl ml-2">Posts de {Username}</h2>
                  {Posts.map((Post) => (
                    <div
                      key={Post.id}
                      className="darkmode-backgroundcolor px-3 py-2 mt-4 break-words rounded-md"
                    >
                      <p className="note-titulo text-xl mb-3">{Post.titulo}</p>
                      <Link to={`Post/Edit/${Post.id}`} className='button p-2 rounded'>Editar Post</Link>
                      <br />
                      <button
                        className="button p-2 rounded mt-3 mb-2"
                        onClick={() => deletePost(Post.id)}
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <div className='flex'>
                    <button id='btn-voltar' className='mx-3' onClick={VoltarPosts}>-</button>
                    <button id='vtn-avancar' className='ml-5' onClick={ProximoPost}>+</button>
                  </div>
                </div>
                <Link to={"/PostCreate"} className='bg-blue-950 rounded-md p-2 h-min mt-5'>+ Criar Novo Post</Link>
                <p>{counter}</p>
              </div>
              
            </main>
          </body>
        </ProtectedRoute>
      </>
    );
}

export default UserPage

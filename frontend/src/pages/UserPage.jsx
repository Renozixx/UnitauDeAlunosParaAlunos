import React, { useEffect, useState } from 'react'
import api from '../api'
import MyHeader from '../components/MyHeader'
import ProtectedRoute from '../components/ProtectedRoute'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function UserPage() {
  const navigate = useNavigate()
  const Username = localStorage.getItem("Username")
  const [todosPosts, setTodosPosts] = useState([])
  const [Posts, setPosts] = useState([])
  const [counter, setCounter] = useState(0)
  const [btnvoltar, setBtnvoltar] = useState(true)
  const [btnavancar, setBtnavancar] = useState(false)

  const getPosts = () => {
    api
    .get("/api/User/Post/")
    .then((res) => {
      setTodosPosts(res.data)
    })
    .catch((err) => alert(err));
  }

  const deletePost = async (id) => {
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
    navigate("/login")
  }

  const ProximoPost = () => {
    setCounter(counter + 3)
    setBtnvoltar(false)
    if(counter + 3 >= todosPosts.length){
      setBtnavancar(true)
    }
  }

  const VoltarPosts = () => {
    setCounter(counter - 3)
    setBtnavancar(false)
    if(counter === 0){
      setBtnvoltar(true)
    }
  }

  const verBtn = () => {
    if(counter === 0){
      setBtnvoltar(true)
    } else {
      setBtnvoltar(false)
    }
    if((counter+3) >= todosPosts.length){
      setBtnavancar(true)
    } else {
      setBtnavancar(false)
    }
  }

  const dividirPost = () => {
    setPosts([])
    setPosts(todosPosts.slice(counter, counter+3))
  }
    
  // Esse primeiro "UseEffect" serve para rodar o "getPosts()", para pegar os Posts no nosso databse e trazer para
  // o react
  useEffect(() => {
      getPosts()
  }, [])
  // Aqui no final, como você pode ver tem essas chaves vazias, no contexto do "useEffect" essas chaves vazias dizem
  // para o navegador, fazer essa ação uma vez, e depois nao fazer mais.

  useEffect(() => {
    dividirPost()
    verBtn()
  }, [counter])
  // Já nesse caso veja que eu passei um parametro para esse useEffect, esse parametro diz para para o seu hook, rodar
  // toda vez que vc mudar a varivel counter, e porque isso é necessario. Isto é necessario em alguns contextos.
  // Para trazer os mesmos, eu vou relembrar o exemplo do contador que eu te mostrei na madrugada do dia 22/10
  // Se vc se lembra, toda vez que vc mudava o contador, ele renderizava novamente sem precisar disso, e de fato ele
  // Fazia isso, porem quando você precisa atualizar 2 componentes diferentes, as vezes vai ser necessario que você
  // Use essa feature do React, de ter esse "useEffect" condicionado a mudança de uma variavel.
  // Se ficou confuso me zapeia

  useEffect(() => {
    setPosts(todosPosts.slice(counter, (counter+3)))
    if(todosPosts.length <= 3){
      console.log('falso positivo')
      setBtnavancar(true)
    }
    else{
      setBtnavancar(false)
    }
  }, [todosPosts])
  return (
    <>
      <ProtectedRoute>
        <main className="darkmode-backgroundcolor lato-regular h-screen flex flex-col">
          <div>
              <MyHeader />
          </div>
          <article className="w-full lg:gap-4 lg:inline-flex h-full darkmode-backgroundcolor">
            <aside className="darkmode-itemscolor lg:w-56 lg:h-full break-words">
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
                  <button onClick={Logout} Navigate={'/login'} className='bg-blue-950 rounded-md p-2'>Logout</button>
                </div>
              </div>
            </aside>
            <div className="inline-flex break-words w-full">
              <div className="darkmode-itemscolor rounded-md m-5 p-3 flex flex-col w-1/2">
                <div className='flex justify-between'>
                  <h2 className="text-2xl ml-2">Posts de {Username}</h2>
                  <Link to={"/PostCreate"} className='bg-blue-950 rounded-md p-2 h-min'>+ Criar Novo Post</Link>
                </div>
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
                <div className='flex justify-between'>
                  <button disabled={btnvoltar} className='ml-3 text-3xl' onClick={VoltarPosts}>-</button>
                  <button disabled={btnavancar} className='text-3xl mr-3' onClick={ProximoPost}>+</button>
                </div>
              </div>
            </div> 
          </article>
        </main>
      </ProtectedRoute>
    </>
  );
}

export default UserPage

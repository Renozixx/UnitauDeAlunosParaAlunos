import React, { useEffect, useState } from 'react'
import api from '../api'

function UserPage() {
    const Username = localStorage.getItem("Username")
    const [Posts, setPosts] = useState([])
    const [conteudo, setConteudo] = useState("")
    const [titulo, setTitulo] = useState("")

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = () => {
        api
            .get("/api/User/Post/")
            .then((res) => res.data)
            .then((data) => {
                setPosts(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deletePost = async (e) => {
        api.delete(`/api/Post/delete/${id}/`).then((res) => {
          if(res.status === 204) alert("Post Deleted!")
          else alert("Failed to delete Post!")
          getPosts()
        })
        .catch((error) => alert(error))
    }

    const addPost = (e) => {
        e.preventDefault()
        api
        .post("/api/User/Post/", { titulo, conteudo })
        .then((res) => {
            if(res.status === 201) alert("Post Criado")
            else alert("Failed to make note.")
            getPosts();
        })
        .catch((err) => alert(err))
    }
    
    return (
        <>
            <h1>{Username}</h1>
            <div>
                <h2>Posts Desse Usuario</h2>
                {Posts.map((Post) => {
                    1
                    // <div className="note-container">
                    //     <p className="note-titulo">{Post.titulo}</p>
                    //     <p className="note-Conteudo">{Post.conteudo}</p>
                    //     <button className="delete-button" onClick={() => deletePost(Post.id)}>
                    //         Delete
                    //     </button>
                    // </div>
                })}    
            </div>    
            <h2>Create a Note</h2>
            <form onSubmit={addPost}>
                <label htmlFor="titulo">titulo:</label>
                <br />
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    required
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                />
                <label htmlFor="Conteudo">Conteudo:</label>
                <br />
                <textarea
                    id="Conteudo"
                    name="Conteudo"
                    required
                    value={conteudo}
                    onChange={(e) => setConteudo(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}
export default UserPage

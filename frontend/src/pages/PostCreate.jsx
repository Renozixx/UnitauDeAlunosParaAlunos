import React, { useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import ProtectedRoute from "../components/ProtectedRoute";
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import api from "../api";

const PostCreate = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  useEffect(() => {}, []);

  const handleChange = (conteudo) => {
    setConteudo(conteudo)
  }

  const addPost = (e) => {
    e.preventDefault();
    api
      .post("/api/User/Post/", { titulo, conteudo })
      .then((res) => {
        if (res.status === 201) alert("Post Criado");
        else alert("Failed to make note.");
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <ProtectedRoute>
        <body className="darkmode-backgroundcolor h-screen">
          <MyHeader></MyHeader>
          <main className="darkmode-itemscolor m-3 rounded-md">
            <form onSubmit={addPost} className="m-3 p-3">
              <div className="block mb-4">
                <label htmlFor="titulo" className="text-xl mb-5">
                  Titulo
                </label>
                <br />
                <input
                  value={titulo}
                  type="text"
                  placeholder="titulo"
                  className="text-lg rounded-sm shadow border w-full py-2 px-3 leading-tight focus:outline-none
                  focus:shadow-black focus:shadow-md text-black mt-3"
                  onChange={(e) => {setTitulo(e.target.value)}}
                />
              </div>
              <div className="mb-4">
                <ReactQuill value={conteudo} onChange={handleChange} className="text-white"></ReactQuill>
              </div>
              <p>{titulo}</p>
            </form>
          </main>
        </body>
      </ProtectedRoute>
    </>
  );
};

export default PostCreate;

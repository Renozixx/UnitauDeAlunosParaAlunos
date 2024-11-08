import React, { useState, useEffect } from "react";
import api from "../api";
import { useLocation } from "react-router-dom";
import MyHeader from "../components/MyHeader";

const Post = () => {
  const location = useLocation();
  const data = location.state
  const [post, setPost] = useState({});
  // const [date, setDate] = useState("");
  // const [hour, getHour] = useState("");
  console.log(data)
  
  useEffect(() => {
    getPost();
    console.log(post)
  }, [])

  const getPost = () => {
    api
    .get(`/api/Post/${data.id}/`)
    .then((res) => { setPost(res.data) })
    .catch(err => console.log(err))
  };

  return (
    <>
      <main className="darkmode-backgroundcolor h-screen ">
        <div>
          <MyHeader></MyHeader>
        </div>
        <article className="p-2">
          <div className="content-container">
            <div>
              <div>
              <h1 className="text-2xl">{post.titulo}</h1>
              <div>
                <span>Autor : {post.autor}</span>
                <br />
              </div>
                <br />
            </div>
              <hr className="w-full" />
            </div>
            <div dangerouslySetInnerHTML={{__html: post.conteudo}}></div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Post;

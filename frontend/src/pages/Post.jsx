import React, { useState, useEffect } from "react";
import api from "../api";
import { useLocation } from "react-router-dom";
import MyHeader from "../components/MyHeader";

const Post = ({ id }) => {
  const location = useLocation();
  const [post, setPost] = useState();

  const data = location.state
  
  useEffect(() => {
    getPost()
  }, [])

  const getPost = () => {
    api
    .get(`/api/Post/${data.id}/`)
    .then((res) => {
      setPost(res.data); 
      console.log(res.data)
    })
    .catch(err => console.log(err))
  };

  return (
    <>
      <main className="darkmode-backgroundcolor h-screen">
        <MyHeader></MyHeader>
        <article>
          <div className="content-container">
            <h1 className="text-2xl"></h1>
          </div>
        </article>
      </main>
    </>
  );
};

export default Post;

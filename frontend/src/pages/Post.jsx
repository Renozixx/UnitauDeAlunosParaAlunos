import React, { useState } from 'react'
import api from '../api'

const Post = ({ id }) => {
    const [post, setPost] = useState()

    const getPost = () => {
        api
        .get(`/api/Post/${id}`)
        .then(res => console.log(res))
    }

  
    return (
        <>
            <h1>Post</h1>
        </>
    )
}

export default Post
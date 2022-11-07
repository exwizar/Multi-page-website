import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Rectangle from '../../../components/UI/rectangle/Rectangle';

const Post = () => {
  const {id} = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
     fetch (`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((result) => setPost(result))
  },[])
  
  return (
    <div>
      {post && (
          <div>
            <Rectangle>{post.title}</Rectangle>
            <p>{post.body}</p>
          </div>
      )}  
    </div>
  )
}

export default Post
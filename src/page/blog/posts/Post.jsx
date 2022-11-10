import React from 'react';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Heading from '../../../components/UI/heading/Heading';
import './postStyle.scss';
import './postMedia.scss'
import postImg from '../../../scss/img/news-img/newsImg.png'
const Post = () => {
  const {id} = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
     fetch (`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((result) => setPost(result))
  },[])
  
  return (
    <div className='post'>
    <Heading>{post.title}</Heading>
      {post && (
        <div className="post-block" key={post.id}>
          <div className="post-content">
            <div className="data-block">13.02.2022</div>
            <h3 className='post-content__title'>{post.title}</h3>
            <p className='post-content__body'>{post.body}</p>
          </div>
          <div className="post-img">
            <img src={postImg} alt="post-img" />
          </div>
        </div>
      )}  
    </div>
  )
}

export default Post
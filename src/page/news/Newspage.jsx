import React from 'react'
import "./newsStyle.scss"
import Rectangle from '../../components/UI/rectangle/Rectangle'
import Post from './posts/Post'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import postImg from '../../scss/img/news-img/newsImg.png'

const Newspage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
     fetch ('http://jsonplaceholder.typicode.com/posts?_limit=50&_page=2')
      .then((res) => res.json())
      .then((result) => setPosts(result))
  },[])

  return (
    <div className='news'>
      <Rectangle>Блог</Rectangle>
      <div>
        {
          posts.map(post => (
             <div className="news-wrapper">
                <div className="wrapper-img">
                  <img src={postImg} alt="post-img" />
                </div>
                <div className="wrapper-content">
                  <div className="data-block">13.02.2022</div>
                  <h3 className='wrapper-content__title'>{post.title}</h3>
                  <p className='wrapper-content__body' maxlength='5'>
                  {post.body.length > 100 ?
                  `${post.body.substring(0, 100)}...`: post.body}
                  </p>
                  <Link key={post.id} to={`/news/${post.id}`}>
                    <button className='wrapper-content__btn'>Читать статью</button>
                  </Link>
                </div>
             </div>
          ))
        }


      </div>
    </div>
  )
}

export default Newspage
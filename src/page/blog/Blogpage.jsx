import React from 'react'
import "./blogStyle.scss"
import './blogMedia.scss'
import Rectangle from '../../components/UI/heading/Heading.jsx'
import { useState } from 'react'
import { Link} from 'react-router-dom'
import { useEffect } from 'react'
import postImg from '../../scss/img/news-img/newsImg.png'

const Blogpage = () => {
  const [posts, setPosts] = useState([])
  const [currentPost, setCurrentPost] = useState(1)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (fetching) {
      fetch (`http://jsonplaceholder.typicode.com/posts?_limit=2&_page=${currentPost}`)
       .then((res) => res.json())
       .then((result) => {
        setPosts([...posts, ...result])
        setCurrentPost(prevState => prevState + 1)
      })
      .finally(() => setFetching(false))
    }
  },[fetching])

  useEffect(() => {
    document.addEventListener('click', scrollHandler)

    return function() {
      document.removeEventListener('click', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
      setFetching(true)
  }

  return (
    <div className='blog'>
      <Rectangle>Блог</Rectangle>
        {
          posts.map(post => (
             <div className="blog-wrapper" key={post.id}>
                <div className="wrapper-img">
                  <img src={postImg} alt="post-img" />
                </div>
                <div className="wrapper-content">
                  <div className="data-block">13.02.2022</div>
                  <h3 className='wrapper-content__title'>{post.title}</h3>
                  <p className='wrapper-content__body'>
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
        <button className='posts-loading' onClick={scrollHandler}>Загрузить ещё</button>
    </div>
  )
}

export default Blogpage
import React from 'react'
import classes from './subSession.module.scss'

const subSession = ({setModalActive}) => {
  return (
    <button className={classes.subsession} onClick={() => {setModalActive(true)}}>Записаться на сеанс</button>
  )
}

export default subSession
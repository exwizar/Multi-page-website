import React from 'react'
import classes from './rectangle.module.scss'

const Rectangle = ({children}) => {
  return (
    <h2 className={classes.title}>{children}</h2>
  )
}

export default Rectangle
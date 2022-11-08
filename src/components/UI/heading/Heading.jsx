import React from 'react'
import classes from './rectangle.module.scss'

const Heading = ({children}) => {
  return (
    <div>
      <h1 className={classes.title}>
      <span className={classes.before}></span>
      {children}
      <span className={classes.after}></span>
      </h1>
    </div>
  )
}

export default Heading
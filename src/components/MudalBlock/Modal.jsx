import React from 'react'
import './modal.scss'

const Modal = ({active, setActive}) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
            <input type="text" />
        </div>
    </div>
  )
}

export default Modal
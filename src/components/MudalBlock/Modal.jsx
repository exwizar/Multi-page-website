import React from 'react'
import './modal.scss'
import { useForm } from 'react-hook-form';


const Modal = ({active, setActive}) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>

        <form onSubmit={handleSubmit(onSubmit)}>
            <span className="text-center">login</span>
            <div className="input-container">
              <input type="text" required="" {...register("First name", {required: true, maxLength: 80})}/>
              <label>Имя</label>		
            </div>
            <div className="input-container">		
              <input type="tel" required="" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
              <label>Номер телефона</label>
            </div>
              <input type="Submit" className="btn" disabled={!isValid} onClick={() => setActive(false)}/>
        </form>	

        </div>
    </div>
  )
}

export default Modal
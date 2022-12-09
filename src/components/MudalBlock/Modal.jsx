import React from 'react'
import './modal.scss'
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Modal = ({active, setActive}) => {
  const TOKEN = "5824337953:AAH0l341FlZ8GtZuvTlwbjiTDoLdRmida88";
  const CHAT_ID = "-1001815132509";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const { register, getValues, handleSubmit, reset, formState: { isValid } } = useForm();

  function subForm(e) {
    e.preventDefault();
    setActive(false)
    const info = getValues()
    let message = `<b>Заявка с сайта!</b>\n<b>Отправитель: </b> ${info.FirstName}\n<b>Номер телефона: </b> ${info.MobileNumber}`

    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })
    reset({
      FirstName: '',
      MobileNumber: ''
    })
  }

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>

        <form onSubmit={handleSubmit()}>
            <span className="text-center">Запись на сеанс</span>
            <div className="input-container">
              <input type="text" required="" {...register("FirstName", {required: true, maxLength: 80})}/>
              <label>Имя</label>		
            </div>
            <div className="input-container">		
              <input type="tel" required="" {...register("MobileNumber", {required: true, minLength: 6, maxLength: 12})} />
              <label>Номер телефона</label>
            </div>
              <input type="Submit" className="btn" disabled={!isValid} onClick={subForm}/>
        </form>	

        </div>
    </div>
  )
}

export default Modal
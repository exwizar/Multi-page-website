import React from 'react'
import location from '../../scss/img/main-img/location.png'
import metro from '../../scss/img/main-img/metro.png'
import calendar from '../../scss/img/main-img/calendar.png'
import Subsession from "../../components/UI/btnSubSession/Subsession.jsx";
import './contactStyle.scss' 
import Rectangle from '../../components/UI/rectangle/Rectangle';

const Contactpage = ({setModalActive}) => {
  return (
    <div className='contact'>
      <Rectangle>Контакты</Rectangle>
    <div className="address">
          <div className='address-block'>
          <iframe className='address-block__map' src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1de3be547615126f0c0bb68d8da7a47357419c01a0c5f1b73351225589d506d&amp;source=constructor"></iframe>
            <div className='first-address address-position'>
            <div className="address-title"><h3>Бассейн WorkClass</h3></div>
                <ul className="address-info">
                  <li className='address-info__block'><img src={location} alt="" />Невская 140</li>
                  <li className='address-info__block'><img src={metro} alt="" />м. Спасская</li>
                  <li className='address-info__block'><img src={calendar} alt="" />Запись по договоренности</li>
                </ul>
              <Subsession className='address-info__btn' setModalActive={setModalActive}/>
            </div>
            <div className='second-address address-position'>
              <div className="address-title"><h3>Бассейн "На Гороховой</h3></div>
                <ul className='address-info'>
                  <li className='address-info__block'><img src={location} alt="" />3-й проезд Иванова</li>
                  <li className='address-info__block'><img src={metro} alt="" />м. Крестовский остров</li>
                  <li className='address-info__block'><img src={calendar} alt="" />Запись по договоренности</li>
                </ul>
            <Subsession className='address-info__btn' setModalActive={setModalActive}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contactpage
import './mainStyle.scss'
import Rectangle from '../../components/UI/rectangle/Rectangle.jsx'
import Slider from "react-slick";
import { useState } from 'react';
import swimGrl from '../../scss/img/main-img/swimming-girl_2.png'

const Mainpage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    centerMode: true,
    arrows: false,
    beforeChange: (current, next)=>setSlideIndex(next),
    customPaging: () => (
      <div className='papa'
        style={{
          width: "16px",
          height: "16px",
          background: "#FFFFFF",
          opacity: "0.4",
          borderRadius: "3px",
          paddingTop: '10px',

        }}
      >
      </div>
    )
  };
  const arr = [
      {id: 1, name: 'Андрей Иванов', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. '},
      {id: 2, name: 'Анна Иванова', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. '},
      {id: 3, name: 'Вова Иванов', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. '},
      {id: 4, name: 'Никита Иванов', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis. '},
  ]

  return (
    <div className='main'>
      <div className='main-img'>
          <p className='main-img__title'>Укрепление здоровья</p>
          <div className='main-img__text'>Акватерапия RimStyle</div>
      </div>

      <div className="main-session">
        <div className='main-session__title'>
          <Rectangle>Сеансы RitmStyle</Rectangle>
        </div>

        <div className="main-session__imgs">

          <div className='main-session__img-1 session__img'>
            <p className='main-session__img-text'>Стандартный RitmStyle</p>
          </div>

          <div className='main-session__img-2 session__img'>
            <p className='main-session__img-text'>RitmStyle для пар</p>
          </div>

          <div className='main-session__img-3 session__img'>
            <p className='main-session__img-text'>RitmStyle для беременных</p>
          </div>

          <div className='main-session__img-4 session__img'>
            <p className='main-session__img-text'>RitmStyle с полным погружением под воду</p>
          </div>

          <div className='main-session__img-5 session__img'>
            <p className='main-session__img-text'>RitmStyle + красочная подводная фотосессия</p>
          </div>

        </div>
      </div>

      <div className='reviews'>
        <Rectangle>Отзывы</Rectangle>
      
        <div className='slider'>
          <Slider {...settings}>
            {
            arr.map((item, index) => (
              <div className={index === slideIndex ? 'card-active' : 'card' } key={item.id}>
                <h2 className='card-title'>{item.name}</h2>
                <p className='card-text'>{item.text}</p>
              </div>
            ))
            }
          </Slider>
        </div>
      </div>
      <div className='about'>
        <Rectangle>Об RitmStyle</Rectangle>
        
        <div className='about-massage'>
          <div className='about-massage__info'>
            <h2 className='about-massage__title'>RitmStyle массаж</h2>
            <p className='about-massage__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.
            Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.</p>
          </div>
            <div className='about-massage__img'>
              <img src={swimGrl} alt="" />
            </div>
        </div>

        <div className='about-massage'>
            <div className='about-massage__img'>
              <img src={swimGrl} alt="" />
            </div>
          <div className='about-massage__info'>
            <h2 className='about-massage__title'>RitmStyle массаж</h2>
            <p className='about-massage__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.
            Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis amet diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant tortor at tempor.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mainpage
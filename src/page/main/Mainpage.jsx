import './mainStyle.scss'
import Rectangle from '../../components/UI/rectangle/Rectangle.jsx'

const Mainpage = () => {
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
      </div>
    </div>
  )
}

export default Mainpage
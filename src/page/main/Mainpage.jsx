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
          <div className='main-session__img-1'></div>
          <div className='main-session__img-2'></div>
          <div className='main-session__img-3'></div>
          <div className='main-session__img-4'></div>
          <div className='main-session__img-5'></div>
        </div>
      </div>
    </div>
  )
}

export default Mainpage
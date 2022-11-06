import './scss/appStyle.scss';
import { Link, Route, Routes } from "react-router-dom";
import Aboutpage from './page/About/Aboutpage.jsx'
import Contactpage from './page/contact/Contactpage.jsx'
import Newspage from './page/news/Newspage.jsx'
import Mainpage from './page/main/Mainpage.jsx'
import logo from './scss/img/logo.svg'
import Subsession from "./components/UI/btnSubSession/Subsession.jsx";
import { useState } from 'react';
import Modal from './components/MudalBlock/Modal';

function App() {
  const [modalAcitve, setModalActive] = useState(false);
  return (
    <div className="app">
      <Modal active={modalAcitve} setActive={setModalActive}/>
      <div className="wrapper">
        <header className="menu">
        <div className="menu-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-links">
          <Link className = 'link' to="/">Главная</Link>
          <Link className = 'link' to="/news">Новости</Link>
          <Link className = 'link' to="/about">О нас</Link>
          <Link className = 'link' to="/contact">Контакты</Link>
        </div>
        <div>
          <Subsession setModalActive={setModalActive}/>
        </div>
        </header>
        <Routes>
          <Route path="/" element={<Mainpage setModalActive={setModalActive} />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage setModalActive={setModalActive} />} />
        </Routes>
        <footer className='footer'>
        <p>© 2018-2022 RitmStyle</p>
        <p>Сделано d-e-n.info</p>
      </footer>
      </div>

    </div>
  );
}

export default App;

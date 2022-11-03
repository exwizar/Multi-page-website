import React from "react";
import './scss/appStyle.scss';
import { Link, Route, Routes } from "react-router-dom";
import Aboutpage from './page/About/Aboutpage.jsx'
import Contactpage from './page/contact/Contactpage.jsx'
import Newspage from './page/news/Newspage.jsx'
import Mainpage from './page/main/Mainpage.jsx'
import logo from './scss/img/logo.svg'
import Subsession from "./components/UI/btnSubSession/Subsession.jsx";

function App() {
  return (
    <div className="app">
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
          <Subsession />
        </div>
        </header>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/news" element={<Newspage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;

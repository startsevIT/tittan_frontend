import React from 'react';
import logo from "./img/footer-logo.svg"
import "./header.css";

class Header extends React.Component{
    render(){
        return(
            <div className="main-header">
                <img src = {logo} className="logo"/>
                <nav className="main-nav">
                    <a href="" className="header-link">Информация</a>
                    <a href="" className="header-link">Карта офиса</a>
                    <a href="" className="header-link">Тесты</a>
                    <a href="" className="header-link">Чат</a>
                    <a href="" className="header-link">Личный кабинет</a>
                </nav>
                <button type="button" className="support-button">Техподдержка</button>
            </div>
        )
    }
}

export default Header
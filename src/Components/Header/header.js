import React from 'react';
import logo from "../1img/footer-logo.svg"
import "./header.css";
import { Link as NavLink } from 'react-router-dom';

class Header extends React.Component{
    
    render(){
        return(
            <div className="main-header">
                <NavLink to="" className='logo'><img src={logo} className='logo-img'/></NavLink>
                <nav className="main-nav">
                    <NavLink to="info" className='header-link' >Информация</NavLink>
                    <NavLink to="office_map" className='header-link'>Карта офиса</NavLink>
                    <NavLink to="tests" className='header-link'>Тесты</NavLink>
                    {/* <NavLink to="chat" className='header-link'>Чат</NavLink> */}
                    <NavLink to="account" className='header-link'>Личный кабинет</NavLink>
                </nav>
                <button type="button" className="support-button">Техподдержка</button>

            </div>
        )
    }
}

export default Header
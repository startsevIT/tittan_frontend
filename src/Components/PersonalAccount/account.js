import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../1img/avatar.png'
import ExitIcon from '../1img/exit-icon.svg'
import './account.css'

class Account extends React.Component{
    render(){
        return(
            <div className='main-personal-account-wrapper'>
                <NavLink className='exit-link'>
                    <div className='exit-button-wrapper'>
                        <img src={ ExitIcon } className='exit-icon'></img>
                        <p className='exit-text'>Выход</p>
                    </div>
                </NavLink>
                <div className='personal-account-wrapper'>
                    <div className='photo-wrapper'>
                        <img src={ Avatar } className='avatar-img'></img>
                        <button className='edit-photo-btn'><p className='edit-photo-btn-text'>Редактировать</p></button>
                    </div>
                    <div className='personal-info-wrapper'>
                        <p className='person-name'>Иванов Иван Иванович</p>
                        <div className='personal-info-content-wrapper'>
                            <div className='titles-wrapper'>
                                <p className='birth-date-title'>Дата рождения:</p>
                                <p className='subdivision-title'>Подразделение:</p>
                                <p className='profession-title'>Должность:</p>
                                <p className='email-title'>Электронная почта:</p>
                                <p className='phone-number-title'>Телефон:</p>
                            </div>
                            <div className='info-wrapper'>
                                <p className='birth-date'>10.11.2000</p>
                                <p className='subdivision'>Офис</p>
                                <p className='profession'>Нет</p>
                                <p className='email'>ivanov.ivan@gmail.com</p>
                                <p className='phone-number'>8 (999) 555-44-33</p>
                            </div>
                        </div>
                        <button className='edit-info-btn'>Редактировать</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account
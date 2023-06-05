import React from 'react';
import { NavLink } from 'react-router-dom';
import './info.css';
import InfoIcon from '../1img/amico.png' 
import FirstMeetingImg from '../1img/first-meeting.png'
import MainStagesImg from '../1img/main-stages.png'
import WorkSubtletiesImg from '../1img/work-subtleties.png'

class Info extends React.Component{
    render(){
        return(
            <div className='main-info-wrapper'>
                <div className='info-head-wrapper'>
                    <p className='info-text'>Здесь Вы найдёте всю необходимую информацию, 
                    которая поможет успешно пройти тесты и влиться в рабочий процесс</p>
                    <img src={InfoIcon} className='info-icon'></img>
                </div>
                <div className='cards-wrapper'>
                    <NavLink to='#' className='first-info-card'>
                        <div className='info-card-wrapper'>
                            <img src={FirstMeetingImg} className='info-first-card-img'></img>
                            <p className='info-card-title'>Знакомство с компанией</p>
                        </div>
                    </NavLink>
                    <NavLink to='#' className='second-info-card'>
                        <div className='info-card-wrapper'>
                            <img src={MainStagesImg} className='info-first-card-img'></img>
                            <p className='info-card-title'>Основные этапы</p>
                        </div>
                    </NavLink>
                    <NavLink to='#' className='third-info-card'>
                        <div className='info-card-wrapper'>
                            <img src={WorkSubtletiesImg} className='info-first-card-img'></img>
                            <p className='info-card-title'>Тонкости работы</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Info
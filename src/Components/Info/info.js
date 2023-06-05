import React from 'react';
import { NavLink } from 'react-router-dom';
import './info.css';
<<<<<<< HEAD
import InfoIcon from '../1img/amico.png' 
import FirstMeetingImg from '../1img/first-meeting.png'
import MainStagesImg from '../1img/main-stages.png'
import WorkSubtletiesImg from '../1img/work-subtleties.png'
=======
>>>>>>> e8e7c926a4ed4203854bd699c7d35da91d9ea506

class Info extends React.Component{
    render(){
        return(
            <div className='main-info-wrapper'>
                <div className='info-head-wrapper'>
                    <p className='info-text'>Здесь Вы найдёте всю необходимую информацию, 
                    которая поможет успешно пройти тесты и влиться в рабочий процесс</p>
                    <img src={InfoIcon} className='info-icon'></img>
                </div>
<<<<<<< HEAD
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
=======
                <div className='about-company-wrapper'>
                    <div className='company-description-wrapper'>
                        <p className='company-description-info'>Основной целью создания ОЭЗ ППТ «Титановая долина» является создание 
                        современных промышленно-производственных комплексов, способныхобеспечить производство высокотехнологичной 
                        продукции глубокой промышленной переработки. </p>
                    </div>
>>>>>>> e8e7c926a4ed4203854bd699c7d35da91d9ea506
                </div>
            </div>
        )
    }
}

export default Info
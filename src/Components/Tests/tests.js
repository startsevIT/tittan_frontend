import React from 'react';
import FirstMeetingImg from '../1img/first-meeting.png'
import MainStagesImg from '../1img/main-stages.png'
import WorkSubtletiesImg from '../1img/work-subtleties.png'
import './tests.css';
import { NavLink } from 'react-router-dom';

class Tests extends React.Component{
    render(){
        return(
            <div className='tests-wrapper'>
                <NavLink to='test-page' className='card'>
                    <div className='test-card-wrapper'>
                        <img src={FirstMeetingImg} className='first-meeting-img'></img>
                        <p className='card-title'>Знакомство с компанией</p>
                        {/* <div className='progress-wrapper'>
                            <p className='percent-progress'>0%</p>
                            <div className='score-wrapper'>
                                <p className='score'>0/10</p>
                                <p className='score-message'>ответов</p>
                            </div>
                        </div>
                        <p className='progress-text'>Прогресс прохождения</p> */}
                    </div>
                </NavLink>
                <NavLink to='test-page' className='card'>
                    <div className='test-card-wrapper'>
                        <img src={MainStagesImg} className='main-stages-img'></img>
                        <p className='card-title'>Основные этапы</p>
                        {/* <div className='progress-wrapper'>
                            <p className='percent-progress'>0%</p>
                            <div className='score-wrapper'>
                                <p className='score'>0/10</p>
                                <p className='score-message'>ответов</p>
                            </div>
                        </div>
                        <p className='progress-text'>Прогресс прохождения</p> */}
                    </div>
                </NavLink>
                <NavLink to='test-page' className='card'>
                    <div className='test-card-wrapper'>
                        <img src={WorkSubtletiesImg} className='work-subtleties-img'></img>
                        <p className='card-title'>Тонкости работы</p>
                        {/* <div className='progress-wrapper'>
                            <p className='percent-progress'>0%</p>
                            <div className='score-wrapper'>
                                <p className='score'>0/10</p>
                                <p className='score-message'>ответов</p>
                            </div>
                        </div>
                        <p className='progress-text'>Прогресс прохождения</p> */}
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default Tests
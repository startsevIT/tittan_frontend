import React from 'react';
import FirstMeetingImg from '../1img/first-meeting.png'
import './final-test-page.css';
import { NavLink } from 'react-router-dom';

class TestsFinal extends React.Component{
    render(){
        return(
            <div className='final-test-wrapper'>
                <h2>Успешное завершение!</h2>
                <div className='final-test-1-wrapper'>
                    <NavLink to='test-page-1' className='card-f'>
                        <div className='final-tes-card-wrapper'>
                            <img src={FirstMeetingImg} className='first-meeting-img'></img>
                            <p className='card-title'>Знакомство с компанией</p>
                        </div>
                    </NavLink>
                    <NavLink to='../tests' className='return-to-tests'>Вернуться к тестам</NavLink>
                </div>
            </div>
        )
    }
}

export default TestsFinal
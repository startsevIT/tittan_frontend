import React from 'react';
import './test-page-93.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 90 },
  ];

class Test93 extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>9/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>Ежегодный основной оплачиваемый отпуск в Компании составляет</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper-93'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1">31 календарный день</label>
                    </div>
                    <div className='answer-wrapper-93'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2">28 календарных дней</label>
                    </div>
                    <div className='answer-wrapper-93'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3">35 календарных дней</label>
                    </div>
                </div>
                <div className='test-footer'>
                    <p className='true-answer-text' hidden>Правильно!</p>
                    <p className='false-answer-text'>Ознакомтесь с теорией по теме <NavLink to='../info/info-page-1' className='theory-link'>Знакомство с компанией</NavLink></p>
                    <button className='next-question-btn' disabled>
                        <NavLink to='' className='next-link'>Далее</NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

export default Test93
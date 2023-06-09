import React from 'react';
import './test-page-9.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 90 },
  ];

class Test9 extends React.Component{
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
                    <div className='answer-wrapper-9'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1"><NavLink to='../tests/test-page-91' className='link'>31 календарный день</NavLink></label>
                    </div>
                    <div className='answer-wrapper-9'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2"><NavLink to='../tests/test-page-92' className='link'>28 календарных дней</NavLink></label>
                    </div>
                    <div className='answer-wrapper-9'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3"><NavLink to='../tests/test-page-93' className='link'>35 календарных дней</NavLink></label>
                    </div>
                </div>
                <div className='test-footer'>
                    <p className='true-answer-text' hidden>Правильно!</p>
                    <p className='false-answer-text' hidden>Ознакомтесь с теорией по теме Знакомство с компанией</p>
                    <button className='next-question-btn' disabled>Далее</button>
                </div>
            </div>
        )
    }
}

export default Test9
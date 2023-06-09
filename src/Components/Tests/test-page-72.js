import React from 'react';
import './test-page-72.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 70 },
  ];

class Test72 extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>7/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>Год создания площадки "Верхняя Салда"</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper-72'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1">2010</label>
                    </div>
                    <div className='answer-wrapper-72'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2">2012</label>
                    </div>
                    <div className='answer-wrapper-72'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3">2018</label>
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

export default Test72
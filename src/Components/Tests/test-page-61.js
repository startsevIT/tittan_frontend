import React from 'react';
import './test-page-61.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 60 },
  ];

class Test61 extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>6/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>Срок существования ОЭЗ "Титановая долина"</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper-61'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1">49 лет</label>
                    </div>
                    <div className='answer-wrapper-61'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2">15 лет</label>
                    </div>
                    <div className='answer-wrapper-61'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3">39 лет</label>
                    </div>
                </div>
                <div className='test-footer'>
                    <p className='true-answer-text'>Правильно!</p>
                    <p className='false-answer-text' hidden>Ознакомтесь с теорией по теме <NavLink to='../info/info-page-1' className='theory-link'>Знакомство с компанией</NavLink></p>
                    <button className='next-question-btn'>
                        <NavLink to='../tests/test-page-7' className='next-link'>Далее</NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

export default Test61
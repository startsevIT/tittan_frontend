import React from 'react';
import './test-page-6.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 60 },
  ];

class Test6 extends React.Component{
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
                    <div className='answer-wrapper-6'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1"><NavLink to='../tests/test-page-61' className='link'>49 лет</NavLink></label>
                    </div>
                    <div className='answer-wrapper-6'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2"><NavLink to='../tests/test-page-62' className='link'>15 лет</NavLink></label>
                    </div>
                    <div className='answer-wrapper-6'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3"><NavLink to='../tests/test-page-63' className='link'>39 лет</NavLink></label>
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

export default Test6
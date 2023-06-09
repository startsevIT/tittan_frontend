import React from 'react';
import './test-page-32.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 30 },
  ];

class Test32 extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>3/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>К кому из сотрудников компании ты можешь обратиться, 
                если у тебя возникли проблемы с техникой: компьютером/телефоном?</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper-32'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1">К начальнику отдела по работе с персоналом</label>
                    </div>
                    <div className='answer-wrapper-32'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2">К системному администратору</label>
                    </div>
                    <div className='answer-wrapper-32'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3">К непосредственному руководителю</label>
                    </div>
                </div>
                <div className='test-footer'>
                    <p className='true-answer-text'>Правильно!</p>
                    <p className='false-answer-text' hidden>Ознакомтесь с теорией по теме <NavLink to='../info/info-page-1' className='theory-link'>Знакомство с компанией</NavLink></p>
                    <button className='next-question-btn'>
                        <NavLink to='../tests/test-page-4' className='next-link'>Далее</NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

export default Test32
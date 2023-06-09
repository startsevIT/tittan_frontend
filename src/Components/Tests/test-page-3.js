import React from 'react';
import './test-page-3.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 30 },
  ];

class Test3 extends React.Component{
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
                    <div className='answer-wrapper-3'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1"><NavLink to='../tests/test-page-31' className='link'>К начальнику отдела по работе с персоналом</NavLink></label>
                    </div>
                    <div className='answer-wrapper-3'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2"><NavLink to='../tests/test-page-32' className='link'>К системному администратору</NavLink></label>
                    </div>
                    <div className='answer-wrapper-3'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3"><NavLink to='../tests/test-page-33' className='link'>К непосредственному руководителю</NavLink></label>
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

export default Test3
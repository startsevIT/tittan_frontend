import React from 'react';
import './test-page-10.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 100 },
  ];

class Test10 extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>10/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>С какой периодичностью и когда выплачивается  заработная плата сотруднику?</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper-10'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1"><NavLink to='../tests/test-page-101' className='link'>1-го числа месяца, следующего за расчетным (окончательный расчет за месяц), 15-го числа расчетного месяца за первую половину месяца</NavLink></label>
                    </div>
                    <div className='answer-wrapper-10'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2"><NavLink to='../tests/test-page-102' className='link'>10-го числа месяца, следующего за расчетным (окончательный расчет за месяц), 25-го числа расчетного месяца за первую половину месяца</NavLink></label>
                    </div>
                    <div className='answer-wrapper-10'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3"><NavLink to='../tests/test-page-103' className='link'>5-го числа месяца, следующего за расчетным (окончательный расчет за месяц), 20-го числа расчетного месяца за первую половину месяца</NavLink></label>
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

export default Test10
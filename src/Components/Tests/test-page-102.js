import React from 'react';
import './test-page-102.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 100 },
  ];

class Test102 extends React.Component{
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
                    <div className='answer-wrapper-102'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1">1-го числа месяца, следующего за расчетным (окончательный расчет за месяц), 15-го числа расчетного месяца за первую половину месяца</label>
                    </div>
                    <div className='answer-wrapper-102'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2">10-го числа месяца, следующего за расчетным (окончательный расчет за месяц), 25-го числа расчетного месяца за первую половину месяца</label>
                    </div>
                    <div className='answer-wrapper-102'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3">5-го числа месяца, следующего за расчетным (окончательный расчет за месяц), 20-го числа расчетного месяца за первую половину месяца</label>
                    </div>
                </div>
                <div className='test-footer'>
                    <p className='true-answer-text'>Правильно!</p>
                    <p className='false-answer-text' hidden>Ознакомтесь с теорией по теме <NavLink to='../info/info-page-1' className='theory-link'>Знакомство с компанией</NavLink></p>
                    <button className='next-question-btn'>
                        <NavLink to='../tests/final-test-page-1' className='next-link'>Далее</NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

export default Test102
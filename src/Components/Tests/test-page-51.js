import React from 'react';
import './test-page-51.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 50 },
  ];

class Test51 extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>5/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>Укажи полное фирменное и сокращенное наименование Общества</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper-51'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1">Акционерное общество "Особая экономическая зона "Титановая долина"/АО "ОЭЗ "Титановая долина"</label>
                    </div>
                    <div className='answer-wrapper-51'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2">Открытое акционерное общество "Особая экономическая зона "Титановая долина"/ОАО "ОЭЗ "Титановая долина"</label>
                    </div>
                    <div className='answer-wrapper-51'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3">Публичное акционерное общество "Особая экономическая зона "Титановая долина"/ПАО "ОЭЗ "Титановая долина"</label>
                    </div>
                </div>
                <div className='test-footer'>
                    <p className='true-answer-text'>Правильно!</p>
                    <p className='false-answer-text' hidden>Ознакомтесь с теорией по теме <NavLink to='../info/info-page-1' className='theory-link'>Знакомство с компанией</NavLink></p>
                    <button className='next-question-btn'>
                        <NavLink to='../tests/test-page-6' className='next-link'>Далее</NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

export default Test51
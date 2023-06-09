import React from 'react';
import './test-page-5.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 50 },
  ];

class Test5 extends React.Component{
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
                    <div className='answer-wrapper-5'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1"><NavLink to='../tests/test-page-51' className='link'>Акционерное общество "Особая экономическая зона "Титановая долина"/АО "ОЭЗ "Титановая долина"</NavLink></label>
                    </div>
                    <div className='answer-wrapper-5'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2"><NavLink to='../tests/test-page-52' className='link'>Открытое акционерное общество "Особая экономическая зона "Титановая долина"/ОАО "ОЭЗ "Титановая долина"</NavLink></label>
                    </div>
                    <div className='answer-wrapper-5'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3"><NavLink to='../tests/test-page-53' className='link'>Публичное акционерное общество "Особая экономическая зона "Титановая долина"/ПАО "ОЭЗ "Титановая долина"</NavLink></label>
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

export default Test5
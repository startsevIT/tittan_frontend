import React from 'react';
import './test-page-42.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 40 },
  ];

class Test42 extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>4/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>Где находится управляющий офис ОЭЗ "Титановая долина"?</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper-42'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1">Верхнесалдинский городской округ</label>
                    </div>
                    <div className='answer-wrapper-42'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2">Сысертский городской округ</label>
                    </div>
                    <div className='answer-wrapper-42'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3">Муниципальное образование "город Екатеринбург"</label>
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

export default Test42
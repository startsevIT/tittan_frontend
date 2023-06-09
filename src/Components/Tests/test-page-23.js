import React from 'react';
import './test-page-23.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 20 },
  ];

class Test23 extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>2/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>Кто является твоим наставником в период испытательного срока по всем общим вопросам, 
                связанным с жизнедеятельностю в офисе?</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper-23'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1">Непосредственный руководитель</label>
                    </div>
                    <div className='answer-wrapper-23'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2">Начальник отдела по работе с персоналом (Наумова Анна)</label>
                    </div>
                    <div className='answer-wrapper-23'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3">Менеджер отдела по работе с персоналом (Косман Наталья)</label>
                    </div>
                </div>
                <div className='test-footer'>
                    <p className='true-answer-text'>Правильно!</p>
                    <p className='false-answer-text' hidden>Ознакомтесь с теорией по теме <NavLink to='../info/info-page-1' className='theory-link'>Знакомство с компанией</NavLink></p>
                    <button className='next-question-btn'>
                        <NavLink to='../tests/test-page-3' className='next-link'>Далее</NavLink>
                    </button>
                </div>
            </div>
        )
    }
}

export default Test23
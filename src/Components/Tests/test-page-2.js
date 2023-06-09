import React from 'react';
import './test-page-2.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 20 },
  ];

class Test2 extends React.Component{
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
                    <div className='answer-wrapper-2'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1"><NavLink to='../tests/test-page-21' className='link'>Непосредственный руководитель</NavLink></label>
                    </div>
                    <div className='answer-wrapper-2'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2"><NavLink to='../tests/test-page-22' className='link'>Начальник отдела по работе с персоналом (Наумова Анна)</NavLink></label>
                    </div>
                    <div className='answer-wrapper-2'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3"><NavLink to='../tests/test-page-23' className='link'>Менеджер отдела по работе с персоналом (Косман Наталья)</NavLink></label>
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

export default Test2
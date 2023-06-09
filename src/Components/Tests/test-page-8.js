import React from 'react';
import './test-page-8.css';
import ProgressBar from "./progress-bar";
import { NavLink } from 'react-router-dom';

const testData = [
    { bgcolor: "#da7d32", completed: 80 },
  ];

class Test8 extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>8/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>Год создания площадки "Уктус"</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper-8'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1"><NavLink to='../tests/test-page-81' className='link'>2019</NavLink></label>
                    </div>
                    <div className='answer-wrapper-8'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2"><NavLink to='../tests/test-page-82' className='link'>2018</NavLink></label>
                    </div>
                    <div className='answer-wrapper-8'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3"><NavLink to='../tests/test-page-83' className='link'>2020</NavLink></label>
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

export default Test8
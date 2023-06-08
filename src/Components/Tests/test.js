import React from 'react';
import './test.css';
import ProgressBar from "./progress-bar";

const testData = [
    { bgcolor: "#da7d32", completed: 10 },
  ];

class Test extends React.Component{
    render(){
        return(
            <div className='main-test-wrapper'>
                <div className='progress-wrapper'>
                    <p className='progress-score'>1/10</p>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                </div>
                <h2 className='question'>Кто ставит тебе задачи на месяц и согласует итоги работы?</h2>
                <div className='answers-wrapper'>
                    <div className='answer-wrapper'>
                        <input type="radio" id="1" name='drone'/>
                        <label for="1">Начальник отдела по работе с персоналом</label>
                    </div>
                    <div className='answer-wrapper'>
                        <input type="radio" id="2" name='drone'/>
                        <label for="2">Непосредственный руководитель</label>
                    </div>
                    <div className='answer-wrapper'>
                        <input type="radio" id="3" name='drone'/>
                        <label for="3">Генеральный директор</label>
                    </div>
                </div>
                <div className='test-footer'>
                    <p className='true-answer-text' hidden>Правильно!</p>
                    <p className='false-answer-text' hidden>Ознакомтесь с теорией по теме Знакомство с компанией</p>
                    <button className='next-question-btn'>Далее</button>
                </div>
            </div>
        )
    }
}

export default Test
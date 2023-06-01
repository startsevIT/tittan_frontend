import React from 'react';
import './main.css';
import workerImage from '../1img/rafiki.svg'

class Main extends React.Component{
    render(){
        return(
            <div className='main-info-wrapper'>
                <div className='qoute-wrapper'>
                    <p className='qoute-text'>“Здесь, опираясь на опыт ВСМПО-АВИСМА и зарубежных резидентов, 
                    специалисты будут развивать высокие технологии”</p>
                    <p className='qoute-author'>Владислав Тетюхин, генеральный директор «ВСМПО-Ависма».</p>
                </div>
                <div className='about-company-wrapper'>
                    <div className='company-description-wrapper'>
                        <p className='company-description-info'>Основной целью создания ОЭЗ ППТ «Титановая долина» является создание 
                        современных промышленно-производственных комплексов, способныхобеспечить производство высокотехнологичной 
                        продукции глубокой промышленной переработки. </p>
                    </div>
                    <img src={ workerImage } className='worker-img'></img>
                </div>
            </div>
        )
    }
}

export default Main
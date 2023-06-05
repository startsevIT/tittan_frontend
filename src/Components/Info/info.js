import React from 'react';
import './info.css';

class Info extends React.Component{
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
                </div>
            </div>
        )
    }
}

export default Info
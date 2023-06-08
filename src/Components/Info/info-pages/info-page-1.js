import React from 'react';
import './info-page-1.css';
import { NavLink } from 'react-router-dom';

class InfoPage1 extends React.Component{
    render(){
        return(
            <div className='main-info-page-1-wrapper'>
                <h2>
                    Доброго времени суток, коллега!
                </h2>
                <p>
                    Сейчас мы находимся на начальном этапе знакомства с компанией.
                </p>
                <p>
                    <u>Титановая долина</u> — особая экономическая зона промышленно-производственного типа в Свердловской области. 
                    Приоритетные отраслевые направления ОЭЗ: авиастроение, производство изделий из титана, 
                    производство оборудования и компонентов для машиностроения и металлургии, деревообработка, 
                    медицинская промышленность, производство строительных материалов.
                </p>
                <p>
                    Единственным акционером АО «ОЭЗ «Титановая долина» является субъект Российской Федерации — 
                    Свердловская область в лице Министерства по управлению государственным имуществом.
                </p>
                <h2>
                Хронология развития
                </h2>
                <p>
                    Создана Постановлением Правительства Российской Федерации № 1032 от 16 декабря 2010 года. 
                    Наименование: ОАО «ОЭЗ «Титановая долина». Учредители: Правительство Свердловской области и 
                    АО «Особые экономические зоны».
                </p>
                <p>
                    14 мая 2012 года УК «Титановая долина» получила от Министерства строительства и 
                    архитектуры Свердловской области разрешение № RU 66-1/2012 на начало строительства I этапа, I очереди.
                </p>
                <p>
                    21 июля 2012 года в Москве подписано Соглашение №С-219-ОС/Д25 о передаче функций управления
                     особой экономической зоной вблизи Верхней Салды от Министерства экономического развития РФ к 
                     ОАО «ОЭЗ «Титановая долина». Заключение Соглашения стало результатом внесения изменений в российское 
                     законодательство: 1 января 2012 года вступили в силу поправки в закон об ОЭЗ, которые предполагают 
                     передачу управляющим компаниям большего числа функций и полномочий.
                </p>
                <p>
                    18 августа 2018 года была создана вторая очередь ОЭЗ — площадка «Уктус».
                </p>
                <p>
                    Акционерное общество “Особая экономическая зона “Титановая долина”/АО “ОЭЗ “Титановая долина” 
                    ведет свою деятельность с 1973 года. Управляющий офис находится в муниципальном образовании 
                    “город Екатеринбург”.
                </p>
                <p>
                    Что ж, мы познакомились с основной информацией о компании.
                </p>
                <h3>
                    Перейдем к рабочему процессу:
                </h3>
                <p>
                    В период испытательного срока твоим наставником будет менеджер отдела по работе с персоналом Косман Наталья. 
                    К ней ты можешь обращаться по-любому вопросу, связанному с жизнедеятельностью в офисе. 
                    Непросведственный руководитель ставит задачи на месяц и согласует итоги работы.
                </p>
                <p>
                    Если у тебя вдруг произошли проблемы с техникой: компьютером или телефоном, 
                    ты можешь обратиться к нашему системному администратору.
                </p>
                <p>
                    Заработная плата выплачивается сотруднику 10-го числа месяца, 
                    следующего за расчетным (окончательный расчет за месяц), 
                    25-го числа расчетного месяца за первую половину месяца.
                </p>
                <p>
                    Также, в компании есть ежегодный оплачиваемый отпуск, который составляет 31 календарный день.
                </p>
                <p>
                    На этом всё! Проходи <NavLink to='../tests/test'>тест по этой теме</NavLink> и переходи дальше.
                </p>
                <h2>
                    Желаем успехов!
                </h2>
            </div>
        )
    }
}

export default InfoPage1
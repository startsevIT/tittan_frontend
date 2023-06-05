import React from 'react';
import './account.css';
import exitButton from "../1img/exitButton.svg";

class Account extends React.Component{
    render(){
      return(
            <div className="profile">
              <div className="profile-image-container">
                <div className="profile-image">Фотография</div>
                <button className="profile-button">Редактировать</button>
              </div>
              <div className="profile-details">
                <h2>Фамилия Имя Отчество</h2>
                <p>Дата рождения:</p>
                <p>Подразделение:</p>
                <p>Должность:</p>
                <p>Электронная почта:</p>
                <p>Телефон:</p>
                <button className="profile-details-button">Редактировать</button>
              </div>
            </div>
        )
    }
}

export default Account;
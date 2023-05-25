import React from 'react';
import "./chat.css";
import technicalSupportIcon from "../1img/technical-support-icon.png";
import mentorIcon from "../1img/mentor-icon.png";
import { Link as NavLink } from 'react-router-dom';

class Chat extends React.Component{
    render(){
        return(
            <div className="chat-wrapper">
                <div className="choose-companion-wrapper">
                    <button className="companion-btn">
                        <div className="companion-wrapper">
                            <img src = {technicalSupportIcon} className="technical-support-icon"/>
                            <NavLink to="/technical-support" className='companion-link' >Техподдержка</NavLink>
                        </div>  
                    </button>
                    <button className="companion-btn">
                        <div className="companion-wrapper">
                            <img src = {mentorIcon} className="mentor-icon"/>
                            <NavLink to="/mentor" className='companion-link' >Наставник</NavLink>
                        </div>
                    </button>
                </div>
                <div className="chat-zone-wrapper">123</div>
            </div>
        )
    }
}

export default Chat
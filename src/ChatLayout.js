import React from 'react';
import { Outlet } from 'react-router-dom';
import Chat from './Components/Chat/chat';

class ChatLayout extends React.Component{
    render(){
        return(
            <>
                <Chat/>
                <Outlet/>
            </>
        )
    }
}

export default ChatLayout
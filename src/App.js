import React from 'react';
import { Routes, Route} from "react-router-dom"
import Info from './Components/Info/info';
import OfficeMap from './Components/OfficeMap/map';
import Tests from './Components/Tests/tests';
import Chat from './Components/Chat/chat';
import Account from './Components/PersonalAccount/account';
import Layout from './Layout';
import Login  from './Components/Auth/Login/login'
import Reg from './Components/Auth/Reg/reg'
import ChatLayout from './ChatLayout';
import TechnicalSupport from './Components/Chat/technical-support/technical-support';
import Mentor from './Components/Chat/mentor/mentor';

class App extends React.Component{
    render(){
        return(
            <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Info/>}/>
                    <Route path="office_map" element={<OfficeMap/>}/>
                    <Route path="tests" element={<Tests/>}/>
                    <Route path="chat" element={<Chat/>}/>
                        <Route path="/" element={<ChatLayout/>}/>
                            <Route index element={<Chat/>}/>
                            <Route path="technical-support" element={<TechnicalSupport/>}/>
                            <Route path="mentor" element={<Mentor/>}/>
                    <Route path="account" element={<Account/>}/>
                    <Route path="*" element={<Info/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="reg" element={<Reg/>}/>
                </Route>
            </Routes>
        </>
        )
    }
}

export default App
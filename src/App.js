import React from 'react';
import { Routes, Route} from "react-router-dom"
import Main from './Components/Main/main';
import Info from './Components/Info/info';
import OfficeMap from './Components/OfficeMap/map';
import Tests from './Components/Tests/tests';
import Chat from './Components/Chat/chat';
import Account from './Components/PersonalAccount/account';
import Layout from './Layout';
import Login  from './Components/Auth/Login/login'
import Reg from './Components/Auth/Reg/reg'
import Test from './Components/Tests/test';
import InfoPage1 from './Components/Info/info-pages/info-page-1';

class App extends React.Component{
    render(){
        return(
            <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="info" element={<Info/>}/>
                    <Route path="info/info-page-1" element={<InfoPage1/>}/>
                    <Route path="office_map" element={<OfficeMap/>}/>
                    <Route path="tests" element={<Tests/>}/>
                    <Route path="tests/test" element={<Test/>}/>
                    <Route path="test-page" element={<Test/>}/>
                    {/* <Route path="chat" element={<Chat/>}/> */}
                    <Route path="account" element={<Account/>}/>
                    <Route path="*" element={<Main/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="reg" element={<Reg/>}/>
                </Route>
            </Routes>
        </>
        )
    }
}

export default App
import React from 'react';
import { Routes, Route} from "react-router-dom"
import Info from './Info/info';
import OfficeMap from './OfficeMap/map';
import Tests from './Tests/tests';
import Chat from './Chat/chat';
import Account from './PersonalAccount/account';
import Layout from './Layout';
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
                    <Route path="account" element={<Account/>}/>
                    <Route path="*" element={<Info/>}/>
                </Route>
            </Routes>
        </>
        )
    }
}

export default App
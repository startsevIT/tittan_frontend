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
import Test1 from './Components/Tests/test-page-1';
import Test11 from './Components/Tests/test-page-11';
import Test12 from './Components/Tests/test-page-12';
import Test13 from './Components/Tests/test-page-13';
import Test2 from './Components/Tests/test-page-2';
import Test21 from './Components/Tests/test-page-21';
import Test22 from './Components/Tests/test-page-22';
import Test23 from './Components/Tests/test-page-23';
import Test3 from './Components/Tests/test-page-3';
import Test31 from './Components/Tests/test-page-31';
import Test32 from './Components/Tests/test-page-32';
import Test33 from './Components/Tests/test-page-33';
import Test4 from './Components/Tests/test-page-4';
import Test41 from './Components/Tests/test-page-41';
import Test42 from './Components/Tests/test-page-42';
import Test43 from './Components/Tests/test-page-43';
import Test5 from './Components/Tests/test-page-5';
import Test51 from './Components/Tests/test-page-51';
import Test52 from './Components/Tests/test-page-52';
import Test53 from './Components/Tests/test-page-53';
import Test6 from './Components/Tests/test-page-6';
import Test61 from './Components/Tests/test-page-61';
import Test62 from './Components/Tests/test-page-62';
import Test63 from './Components/Tests/test-page-63';
import Test7 from './Components/Tests/test-page-7';
import Test71 from './Components/Tests/test-page-71';
import Test72 from './Components/Tests/test-page-72';
import Test73 from './Components/Tests/test-page-73';
import Test8 from './Components/Tests/test-page-8';
import Test81 from './Components/Tests/test-page-81';
import Test82 from './Components/Tests/test-page-82';
import Test83 from './Components/Tests/test-page-83';
import Test9 from './Components/Tests/test-page-9';
import Test91 from './Components/Tests/test-page-91';
import Test92 from './Components/Tests/test-page-92';
import Test93 from './Components/Tests/test-page-93';
import Test10 from './Components/Tests/test-page-10';
import Test101 from './Components/Tests/test-page-101';
import Test102 from './Components/Tests/test-page-102';
import Test103 from './Components/Tests/test-page-103';
import InfoPage1 from './Components/Info/info-pages/info-page-1';
import TestsFinal from './Components/Tests/final-test-page';

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
                    <Route path="tests/test-page-1" element={<Test1/>}/>
                    <Route path="tests/test-page-11" element={<Test11/>}/>
                    <Route path="tests/test-page-12" element={<Test12/>}/>
                    <Route path="tests/test-page-13" element={<Test13/>}/>
                    <Route path="tests/test-page-2" element={<Test2/>}/>
                    <Route path="tests/test-page-21" element={<Test21/>}/>
                    <Route path="tests/test-page-22" element={<Test22/>}/>
                    <Route path="tests/test-page-23" element={<Test23/>}/>
                    <Route path="tests/test-page-3" element={<Test3/>}/>
                    <Route path="tests/test-page-31" element={<Test31/>}/>
                    <Route path="tests/test-page-32" element={<Test32/>}/>
                    <Route path="tests/test-page-33" element={<Test33/>}/>
                    <Route path="tests/test-page-4" element={<Test4/>}/>
                    <Route path="tests/test-page-41" element={<Test41/>}/>
                    <Route path="tests/test-page-42" element={<Test42/>}/>
                    <Route path="tests/test-page-43" element={<Test43/>}/>
                    <Route path="tests/test-page-5" element={<Test5/>}/>
                    <Route path="tests/test-page-51" element={<Test51/>}/>
                    <Route path="tests/test-page-52" element={<Test52/>}/>
                    <Route path="tests/test-page-53" element={<Test53/>}/>
                    <Route path="tests/test-page-6" element={<Test6/>}/>
                    <Route path="tests/test-page-61" element={<Test61/>}/>
                    <Route path="tests/test-page-62" element={<Test62/>}/>
                    <Route path="tests/test-page-63" element={<Test63/>}/>
                    <Route path="tests/test-page-7" element={<Test7/>}/>
                    <Route path="tests/test-page-71" element={<Test71/>}/>
                    <Route path="tests/test-page-72" element={<Test72/>}/>
                    <Route path="tests/test-page-73" element={<Test73/>}/>
                    <Route path="tests/test-page-8" element={<Test8/>}/>
                    <Route path="tests/test-page-81" element={<Test81/>}/>
                    <Route path="tests/test-page-82" element={<Test82/>}/>
                    <Route path="tests/test-page-83" element={<Test83/>}/>
                    <Route path="tests/test-page-9" element={<Test9/>}/>
                    <Route path="tests/test-page-91" element={<Test91/>}/>
                    <Route path="tests/test-page-92" element={<Test92/>}/>
                    <Route path="tests/test-page-93" element={<Test93/>}/>
                    <Route path="tests/test-page-10" element={<Test10/>}/>
                    <Route path="tests/test-page-101" element={<Test101/>}/>
                    <Route path="tests/test-page-102" element={<Test102/>}/>
                    <Route path="tests/test-page-103" element={<Test103/>}/>
                    <Route path="tests/final-test-page-1" element={<TestsFinal/>}/>
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
import React from 'react'
import {Route, Routes, useLocation} from "react-router-dom";

import { Navbar, Footer, Payloads, SecList, Tools, Homepage } from './components/';

const xssPayloads = [
    'onload=alert(1)><svg/1=',
    '>alert(1)</script><script/1='
]

const App = () => {
    return (
        <div style={{height: '30rem', width: '10rem', marginTop: '80px'}}>
            <Navbar/>
            <Routes>
                <Route path={"/*"} element={<Homepage/>}></Route>
                <Route path={"/payloads/*"} element={<Payloads/>}></Route>
                <Route path={"/tools/*"} element={<Tools/>}></Route>
                <Route path={"/sec-list/*"} element={<SecList/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App

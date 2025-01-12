import React from "react";
import Home from '../Home Module/Components/Home';
import CustomIndex from '../Customization Module/Components/CustomIndex';
import {  Route, Routes } from 'react-router-dom'
import NavbarLayout from "../Layout/Components/NavbarLayout";
import AllOpen from "../Task/Components/AllOpen";
import ChatRoom from '../Chat Module/Components/ChatRoom'
const LoginRouteMapping = () =>{
    return(
        <>
            <NavbarLayout>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path="/AllOpen" Component={AllOpen} />
                <Route path='/Custom' Component={CustomIndex} />
                <Route path='/Chat' Component={ChatRoom} />
            </Routes>
            </NavbarLayout>
        </>
    )
}

export default LoginRouteMapping
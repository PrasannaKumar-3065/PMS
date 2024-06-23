import React from "react";
import Home from '../Home Module/Components/Home';
import CustomIndex from '../Customization Module/Components/CustomIndex';
import {  Route, Routes } from 'react-router-dom'
const LoginRouteMapping = () =>{
    return(
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/Custom' Component={CustomIndex} />
        </Routes>
    )
}

export default LoginRouteMapping
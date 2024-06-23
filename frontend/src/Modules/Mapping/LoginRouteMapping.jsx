import React from "react";
import Home from '../Home Module/Components/Home';
import CustomIndex from '../Customization Module/Components/CustomIndex';
import {  Route, Routes } from 'react-router-dom'
import NavbarLayout from "../Layout/Components/NavbarLayout";
const LoginRouteMapping = () =>{
    return(
        <>
            <NavbarLayout/>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/Custom' Component={CustomIndex} />
            </Routes>
        </>
    )
}

export default LoginRouteMapping
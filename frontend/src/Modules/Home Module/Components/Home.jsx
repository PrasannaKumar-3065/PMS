import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../../Context/LoginContext";
import Loader from "../../Common/Components/Loader";
import { Button } from "@mui/material";
const Home = () => {
    const [username, setUsername] = useState('');
    const { formData } = useContext(SessionContext);
    const [isLoading, setIsLoading] = useState(true);
    const Navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            setUsername(formData?.username || '');
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [formData]);

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <><h1>Hello {username}</h1><Button onClick={()=>{Navigate('/Home/Custom')}}>Custom</Button></>
    );
}

export default Home;

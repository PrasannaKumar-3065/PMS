import React, {useContext } from 'react';
import Button from '../../Common/Components/Button';
import Input from '../../Common/Components/Input';
import { SessionContext } from '../../../Context/LoginContext';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const {formData, setFormData} = useContext(SessionContext)
    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value
        setFormData({username,password})
        console.log('Login form data:', formData);
        Navigate('/Home');
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    id='username'
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder="Username"
                />
                <Input
                    id='password'
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                />
                <Button type="submit">Login</Button>
            </form>
        </div>
    );
};

export default LoginPage;

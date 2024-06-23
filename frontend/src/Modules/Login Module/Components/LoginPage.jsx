import React, { useContext } from 'react';
import Button from '../../Common/Components/Button';
import { SessionContext } from '../../../Context/LoginContext';
import { useNavigate } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const LoginPage = () => {
    const { formData, setFormData } = useContext(SessionContext)
    const Navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        var username = document.getElementById('username').value
        var password = document.getElementById('password').value
        setFormData({ username, password })
        console.log('Login form data:', formData);
        Navigate('/Home');
    };

    return (
        <Form onSubmit={handleSubmit} className='m-5 p-10'>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" >
                <Form.Label column sm="3">
                    Email
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="email" placeholder="Email" id='username' />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="3">
                    Password
                </Form.Label>
                <Col sm="9">
                    <Form.Control type="password" placeholder="Password" value={formData.password} id='password' />
                </Col>
            </Form.Group>
            <Button type="submit">Login</Button>
        </Form>
    );
};

export default LoginPage;



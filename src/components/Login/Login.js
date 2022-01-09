import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Login = (props) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const {signIn,currentUser}= useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate= useNavigate();
    const location= useLocation();
    const handleSubmit=async (event)=>{

        event.preventDefault();
       
        try{
            setIsLoading(true);
            setError('');
           await signIn(emailRef.current.value,passwordRef.current.value);
           navigate("/")
        }catch(err){
            console.log(err);
            setError("Invalid email or password")
        }
        setIsLoading(false);
        
    }
    return (
       <>
        <Card>
           <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">
                    {error}
                </Alert>
            }
            <Form onSubmit={handleSubmit} >
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                </Form.Group>

                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required/>
                </Form.Group>
                <Form.Group id="forgot-password">
                    <Form.Label><Link to="/forgot-password"> Forgot password?</Link></Form.Label>
                </Form.Group>
                <Button className="btn-success w-100 text-center btn-lg mt-4" type="submit" disabled={isLoading}>Login</Button>
            </Form>
           </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup"> Sign up</Link>
        </div>
        </>
    )
}

export default Login

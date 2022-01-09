import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const SignUp = (props) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signUpUser,currentUser}= useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate= useNavigate();
    const handleSubmit=async (event)=>{

        event.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("password does not match");
        }
        try{
            setIsLoading(true);
            setError('');
            let result=await signUpUser(emailRef.current.value,passwordRef.current.value);
            console.log(result);
            navigate("/");
        }catch{
            setError("Invalid email or password")
        }
        setIsLoading(false);
        
    }
    return (
       <>
        <Card>
           <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
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
                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required/>
                </Form.Group>
                <Button className="btn-success w-100 text-center btn-lg mt-4" type="submit" disabled={isLoading}>Sign Up</Button>
            </Form>
           </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login"> Login</Link>
        </div>
        </>
    )
}

export default SignUp

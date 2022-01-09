import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function ForgotPasswordPage() {
    const emailRef = useRef();
    const {resetUserPassword}= useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate= useNavigate();


    const handleSubmit=async (event)=>{

        event.preventDefault();
       
        try{
            setIsLoading(true);
            setError('');
           await resetUserPassword(emailRef.current.value);
           navigate("/login")
        }catch(err){
            console.log(err);
            setError("Error while sending reset link")
        }
        setIsLoading(false);
        
    }

    return (
       <>
        <Card>
           <Card.Body>
            <h2 className="text-center mb-4">Reset password</h2>
            {error && <Alert variant="danger">
                    {error}
                </Alert>
            }
            <Form onSubmit={handleSubmit} >
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                </Form.Group>

                
                <Button className="btn-success w-100 text-center btn-lg mt-4" type="submit" disabled={isLoading}>Reset Password</Button>
            </Form>
           </Card.Body>
        </Card>
       
        </>
    )
}

export default ForgotPasswordPage

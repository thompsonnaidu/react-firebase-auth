import React from 'react'
import { Container } from 'react-bootstrap'
import SignUp from '../../components/SignUp/SignUp'

function SignUpPage() {
    return (
        <Container

        className="d-flex algin-items-center justify-content-center"
        style={{ minHeight: "100vh" , marginTop:"50px"}}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
            <SignUp/>
        </div>
      </Container>
    
    )
}

export default SignUpPage

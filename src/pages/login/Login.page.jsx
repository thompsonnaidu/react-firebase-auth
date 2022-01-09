import React from 'react'
import { Container } from 'react-bootstrap'
import Login from '../../components/Login/Login'

function LoginPage() {
    return (
        <Container

        className="d-flex algin-items-center justify-content-center"
        style={{ minHeight: "100vh" , marginTop:"50px"}}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
            <Login/>
        </div>
      </Container>
    )
}

export default LoginPage

import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext'

const Dashboard = (props) => {
    
    const {currentUser,logOut}=useAuth();
    const [loading, setLoading] = useState(false);
    const navigate= useNavigate();
    const handleLogOut=async (event)=>{
        event.preventDefault();
        try{
            setLoading(true);
            await logOut();
            navigate("/login");
        }catch{

        }
        setLoading(true);
    }
    return (
        <div>
            Hello {currentUser && currentUser.email}
            <Button variant="link" onClick={handleLogOut} disabled={loading}> Log out</Button>
        </div>
    )
}

export default Dashboard

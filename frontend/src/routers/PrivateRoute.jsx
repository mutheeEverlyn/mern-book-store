import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {currentUser, loading} = useAuth();
    const token = localStorage.getItem('token');

    if(loading) {
        return <div>Loading..</div>
    }
    if(currentUser && token) {
        return children;
    }
  
    return <Navigate to="/login" replace/>
}

export default PrivateRoute
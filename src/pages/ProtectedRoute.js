import React from 'react';

// components
import { Navigate } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';
import { LinearProgress } from '@mui/material';

const ProtectedRoute = ({ children }) => {

    const { loading, user } = useSelector(state => state.authState)

    return (
        loading ? <LinearProgress /> : 
        user ? children : <Navigate to='/auth/login' replace={true} />
    )
}

export default ProtectedRoute;

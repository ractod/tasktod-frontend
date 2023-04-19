import React from 'react';

// component
import { Navigate } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';

const ProtectedAuthRoute = ({ children }) => {

    const { user } = useSelector(state => state.authState)

    return user ? <Navigate to="/dashboard/schedule" replace /> : children
}

export default ProtectedAuthRoute;

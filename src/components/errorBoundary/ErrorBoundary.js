import React , { useEffect } from 'react';

// component
import { useNavigate } from 'react-router-dom';

const ErrorBoundary = ({ children }) => {

    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('error', (event) => {
            event.preventDefault()
            navigate("/error", { replace: true })
        })
    }, [])

    return children
}

export default ErrorBoundary;

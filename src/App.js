import React, { useEffect } from 'react';

// global styles 
import "./assets/styles/global/global.css"
import "./assets/styles/global/toastify.css"

// mui theme
import { ThemeProvider } from '@mui/material';
import muiTheme from 'muiTheme/muiTheme';

// React Router Dom
import { 
    Navigate, Route, createBrowserRouter, 
    createRoutesFromElements, RouterProvider, Routes 
} from 'react-router-dom';

// components
import HomePage from 'pages/HomePage';
import SchedulePage from 'pages/dashboard/SchedulePage';
import MeetingPage from 'pages/dashboard/MeetingPage';
import Dashboard from 'pages/dashboard';
import AuthPage from 'pages/authPage';
import LoginPage from 'pages/authPage/LoginPage';
import RegisterPage from 'pages/authPage/RegisterPage';
import ProtectedRoute from 'pages/ProtectedRoute';
import ProtectedAuthRoute from 'pages/ProtectedAuthRoute';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';
import ErrorPage from 'pages/ErrorPage';
import NotFound from 'pages/NotFound';

// redux 
import { Provider as ReduxProvider } from 'react-redux';
import store from 'redux/store';
import { loadUser } from 'redux/auth/actions';

// react toastify
import { Slide, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from 'components/common/ScrollToTop';

const MyRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/*' element={ <Navigate to="/404" replace={true} />}  />
        <Route path='/404' element={<NotFound />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/auth/*" element={ <ProtectedAuthRoute> <AuthPage /> </ProtectedAuthRoute> } >
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path='*' element={ <Navigate to="/404" replace={true} />}  />
        </Route>
        <Route path="/dashboard/*" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute>} >
            <Route path="schedule" element={<SchedulePage />}  />
            <Route path="meeting" element={<MeetingPage />} />
            <Route path='*' element={ <Navigate to="/404" replace={true} />}  />
        </Route>
    </Routes>
)

const App = () => {

    useEffect(() => { loadUser() }, [])

    return (
        <ErrorBoundary>
            <ThemeProvider theme={muiTheme}>
                <ReduxProvider store={store}>
                    <MyRoutes />
                    <ToastContainer transition={Slide} hideProgressBar position='top-center' autoClose={2000} />
                    <ScrollToTop />
                </ReduxProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default App;

import React from 'react';

// component
import Layout from 'layouts/authPage';
import { Outlet } from 'react-router-dom';

// this page is working with nested routing check the App.js to understand
const AuthPage = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default AuthPage;

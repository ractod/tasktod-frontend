import React from 'react';

// components
import Layout from 'layouts/dashboardPage';
import { Outlet } from 'react-router-dom';

// custom hook
import useTitle from 'hooks/useTitle';


// this page is working with nested routing check the App.js to understand
const Dashboard = () => {

    useTitle("Dashboard")

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default Dashboard;

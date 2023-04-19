import React from 'react';

// components
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';

const classNames = {
    container: "flex items-start",
}

const Layout = ({ children, headerTitle }) => {
    return (
        <>
            <MobileHeader headerTitle={headerTitle} />
            <div className={classNames.container}>
                <Sidebar />
                { children }
            </div>
        </>
    );
}

export default Layout;

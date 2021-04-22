import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Footer from './Footer';

// css
import './mainLayout.css';

const MainLayout = () => {
    return (
        <div className="root" >
            <Topbar />
            <div className="wrapper">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;

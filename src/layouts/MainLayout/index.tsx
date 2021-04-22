import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import Topbar from './Topbar';
import Footer from './Footer';

// css
import './mainLayout.css';

const MainLayout = () => {
    return (
        <div className="root" >
            <Topbar />
            <Box flex={1}>
                <Outlet />
            </Box>
            <Footer />
        </div>
    );
};

export default MainLayout;

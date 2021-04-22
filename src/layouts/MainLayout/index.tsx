import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import Topbar from './Topbar';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <Box display="flex" flexDirection="column" width="100%" height="100%" overflow="hidden">
            <Topbar />
            <Box flex={1}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;

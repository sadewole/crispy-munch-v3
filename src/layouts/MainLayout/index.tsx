import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import Topbar from './Topbar';
import Footer from './Footer';
import AuthBase from './Topbar/Auth';

const MainLayout = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleAuthBase = () => { setIsOpen(!isOpen); };

    return (
        <>
            <Box display="flex" flexDirection="column" width="100%" height="100%" overflow="hidden">
                <Topbar toggleLogin={handleAuthBase} />
                <Box flex={1}>
                    <Outlet />
                </Box>
                <Footer />
            </Box>
            <AuthBase isOpen={isOpen} onClose={handleAuthBase} />
        </>
    );
};

export default MainLayout;

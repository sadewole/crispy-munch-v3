import React, { ReactNode } from 'react';
import { Box, Heading } from '@chakra-ui/layout';

import './topHeadLines.css';

const TopHeadLines = ({ children }: { children: ReactNode; }) => {
    return (
        <Box mt="2" mb="4" className='top-line' textTransform="capitalize" >
            <Heading fontSize={{ base: 'xl', sm: '3xl', md: '4xl' }} >{children}</Heading>
        </Box>
    );
};

export default TopHeadLines;

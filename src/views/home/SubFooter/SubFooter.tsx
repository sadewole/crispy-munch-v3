import { Box, Container, Grid, Heading, LinkBox, Text } from '@chakra-ui/layout';
import React from 'react';

import './subFooter.css';

const SubFooter = () => {
    return (
        <Box my="40" >
            <Container maxWidth={{ base: "90%", sm: "85%" }} minHeight="500px" bgColor="red.700" borderRadius="10px" >
                <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6} my="10">
                    <Box position="relative" width="100%" minH={{ base: "300px", sm: "500px" }} display="flex" alignItems="center" justifyContent="center" >
                        <Box maxWidth="400px" className="absolute-image" height="inherit" >
                            <img src="./images/home/multi-device.png" alt="sub-footer-img" />
                        </Box>
                    </Box>
                    <Box minH="400px" padding="10px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="whiteAlpha.800" >
                        <Heading as="h1" mb="5">Get Our App</Heading>
                        <Text fontSize={{ base: "base", sm: "xl" }} >The Crispy Munch app makes it simple for anybody to use a mobile device to look over the menu of the best vendors and place an order for home delivery.</Text>
                        <LinkBox width="200px" my="4">
                            <img src="./images/home/google-play-store-badge.png" alt="GPS-badge" />
                        </LinkBox>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
};

export default SubFooter;

import { Box, Container, Grid, Heading, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import TopHeadLines from 'src/components/TopHeadLines';
import { data } from 'src/utils/content_data';

type dataProps = {
    "name": string,
    "img": string,
    "text": string,
    "content": string;
};

const FunFact = () => {
    const [datas, setDatas] = useState<dataProps[]>(data);

    const content = datas.map((data, index) => {
        return (
            <Box w="100%" textAlign="center" px="4" key={index}>
                <Box display={{ base: 'block', sm: 'flex', lg: 'block' }} >
                    <Box minHeight="250px">
                        <img src={data.img} alt={data.name} />
                    </Box>
                    <div>
                        <Heading as="h4" fontSize="lg" mb="2">{data.text}</Heading>
                        <Text textAlign='left'>{data.content}</Text>
                    </div>
                </Box>
            </Box>
        );
    });
    return (
        <Container minWidth="85%">
            <Box m="auto" my="10" className='tops'>
                <TopHeadLines>Fact about Crispy Munch</TopHeadLines>
                <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={4} my="20" >
                    {content}
                </Grid>
            </Box>
        </Container>
    );
};

export default FunFact;

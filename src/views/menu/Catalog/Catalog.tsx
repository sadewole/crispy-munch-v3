import { Image } from '@chakra-ui/image';
import { Box, Container, Grid, Text } from '@chakra-ui/layout';
import React from 'react';
import LargeScreenCard from './Cards/LargeScreenCard';
import MobileCard from './Cards/MobileCard';
import { Meal } from './models';

import './catalog.css';

const EmptyCatalog = () => (
  <Container
    display='flex'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    flexDirection='column'
    position='relative'
  >
    <Image src='./images/fast_food.svg' alt='Fast food' mb='2' width='200px' />
    <Text fontSize='3xl' fontWeight='bold'>
      We're sorry!
    </Text>
    <Text fontSize={{ base: '2xl', sm: '3xl' }}>
      We will make all meal available very soon.
    </Text>
  </Container>
);

const Catalog = ({ meals }: { meals: any }) => {
  return (
    <Box my='10'>
      {meals && meals.length ? (
        <Container maxWidth='container.xl'>
          <Grid
            templateColumns={{
              base: '1fr',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={4}
          >
            {meals.map((meal: Meal, index: number) => (
              <Box key={index}>
                <LargeScreenCard className='smHidden' meal={meal} />
                <MobileCard className='mdHidden' meal={meal} />
              </Box>
            ))}
          </Grid>
        </Container>
      ) : (
        <EmptyCatalog />
      )}
    </Box>
  );
};

export default Catalog;

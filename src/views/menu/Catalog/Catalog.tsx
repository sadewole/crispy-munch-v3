import { Box, Container, Grid } from '@chakra-ui/layout';
import React from 'react';
import LargeScreenCard from './Cards/LargeScreenCard';
import MobileCard from './Cards/MobileCard';
import { Meal } from '../../../utils/models';

const Catalog = ({ meals }: { meals: Array<Meal> }) => {
  return (
    <Container maxWidth='container.xl'>
      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={4}
      >
        {meals.map((meal, index: number) => (
          <Box key={index}>
            <LargeScreenCard className='smHidden' meal={meal} />
            <MobileCard className='mdHidden' meal={meal} />
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Catalog;

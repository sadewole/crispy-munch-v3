import React, { useEffect, useState } from 'react';
import Catalog from './Catalog';
import Hero from './Hero';
import { useDispatch, useSelector } from 'src/store';
import { fetchMeals } from 'src/slices/meal';
import { Meal } from 'src/utils/models';
import { Image } from '@chakra-ui/image';
import { Box, Container, Text } from '@chakra-ui/layout';

type EmptyCatalogProps = {
  headText: string;
  subText: string;
};

const noResult = {
  headText: 'No search results.',
  subText: 'Kindly clear your search to see our available meal.',
};

const noMeal = {
  headText: 'Meal catalog is empty!',
  subText: 'We will make all meal available very soon.',
};

const EmptyCatalog = ({ headText, subText }: EmptyCatalogProps) => (
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
      {headText}
    </Text>
    <Text fontSize={{ base: '2xl', sm: '3xl' }}>{subText}</Text>
  </Container>
);

const ExploreMeals = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();
  // @ts-ignore
  const { allMeal, loading } = useSelector((state) => state.meal);

  let emptyCatalog: EmptyCatalogProps = noMeal;

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const meals = allMeal.filter((meal: Meal) =>
    meal.name.toLowerCase().includes(search.toLowerCase())
  );

  if (allMeal && allMeal.length) {
    if (!meals.length) {
      emptyCatalog = noResult;
    }
  }

  return (
    <div>
      <Hero
        setSearch={(e: string) => {
          setSearch(e);
        }}
        search={search}
      />
      <Box my='10'>
        {loading ? (
          <h1>Loading...</h1>
        ) : meals && meals.length ? (
          <Catalog meals={meals} />
        ) : (
          <EmptyCatalog {...emptyCatalog} />
        )}
      </Box>
    </div>
  );
};

export default ExploreMeals;

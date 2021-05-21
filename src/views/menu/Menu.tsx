import React, { useEffect } from 'react';
import Catalog from './Catalog';
import Hero from './Hero';
import { useDispatch, useSelector } from 'src/store';
import { fetchMeals } from 'src/slices/meal';

const ExploreMeals = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const { allMeal } = useSelector((state) => state.meal);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  console.log(allMeal);

  return (
    <div>
      <Hero />
      <Catalog meals={allMeal} />
    </div>
  );
};

export default ExploreMeals;

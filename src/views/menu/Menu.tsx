import React, { useEffect, useState } from 'react';
import Catalog from './Catalog';
import Hero from './Hero';
import { useDispatch, useSelector } from 'src/store';
import { fetchMeals } from 'src/slices/meal';
import { Meal } from './Catalog/models';

const ExploreMeals = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();
  // @ts-ignore
  const { allMeal } = useSelector((state) => state.meal);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const meals = allMeal.filter((meal: Meal) =>
    meal.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Hero
        setSearch={(e: string) => {
          setSearch(e);
        }}
        search={search}
      />
      <Catalog meals={meals} />
    </div>
  );
};

export default ExploreMeals;

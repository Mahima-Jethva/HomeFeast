import React, { createContext, useState, useContext } from 'react';

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [orderedMeals, setOrderedMeals] = useState([]);

  const addMeal = (meal) => {
    setOrderedMeals((prevMeals) => [...prevMeals, { ...meal, orderId: Date.now() }]);
  };

  const removeMeal = (orderId) => {
    setOrderedMeals((prevMeals) => prevMeals.filter((item) => item.orderId !== orderId));
  };

  return (
    <MealContext.Provider value={{ orderedMeals, addMeal, removeMeal }}>
      {children}
    </MealContext.Provider>
  );
};

export const useMeals = () => useContext(MealContext);
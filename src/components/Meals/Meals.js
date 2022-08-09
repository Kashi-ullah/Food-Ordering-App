import React, { Fragment } from 'react'
import AvailableMeals from './AvalibleMeals'
import MealsSummery from './MealsSummery'
const Meals = () => {
  return (
    <Fragment>
        <MealsSummery></MealsSummery>
        <AvailableMeals></AvailableMeals>
    </Fragment>
  )
}

export default Meals
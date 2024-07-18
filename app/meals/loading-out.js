import React from 'react'
import classes from './loading.module.css'

function MealsLoadingPage() {
  return (
    <h1 className={classes.loading}>Fetching Meals</h1>
  )
}

export default MealsLoadingPage
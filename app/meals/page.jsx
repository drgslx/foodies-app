import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "app/components/meals/meals-grid";

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Share & discover recipes!</p>
        <p className={classes.cta}>
          <Link href="/meals/new">Share a new meal</Link>
        </p>
      </header>
      <main className={classes.main}><MealsGrid meals={[]}/></main>
    </>
  );
}

export default MealsPage;

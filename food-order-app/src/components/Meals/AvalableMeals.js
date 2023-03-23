import classes from "./AvailableMeals.module.css";

import DUMMY_MEALS from "../../assets/data/dummy-meals";

export default () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>)

    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    );
}
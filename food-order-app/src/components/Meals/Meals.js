import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvalableMeals from "./AvalableMeals";

export default () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvalableMeals />
        </Fragment>
    );
}

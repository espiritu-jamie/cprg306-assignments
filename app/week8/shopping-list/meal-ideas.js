"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try{
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            const data = await response.json();
            setMeals(data.meals || []);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <div>
            <h1 className="mt-4 mb-4">Meal Ideas</h1>
            {meals.length === 0 ? (
                <p>No meal ideas found for {ingredient}.</p>
            ) : (
              <ul>
                <p>Meal ideas for {ingredient}:</p>
                {meals && meals.map((meal) => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
            )}
        </div>
    )

}



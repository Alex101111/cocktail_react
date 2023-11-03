// In CocktailDetail.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CocktailDetail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    // Fetch cocktail details by ID and set them to the state
  }, [id]);
  return (
    <div className="cocktail-detail">
      {cocktail ? (
        <div>
          <img src={cocktail.strDrinkThumb + '/preview'} alt={cocktail.strDrink} />
          <h2>{cocktail.strDrink}</h2>
          <h3>Ingredients:</h3>
          <ul>
            {/* Map through ingredients and display their icons and names */}
            {cocktail.ingredients.map((ingredient, index) => (
              <li key={index}>
                <img src={`URL_FOR_INGREDIENT_IMAGE`} alt={ingredient.name} />
                {ingredient.name}
              </li>
            ))}
          </ul>
          <Link to="/">Back to Cocktails</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CocktailDetail;

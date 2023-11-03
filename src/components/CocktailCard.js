// In CocktailCard.js
import React from 'react';
import { Outlet,  Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import "./CocktailCard.css"

function CocktailCard({ cocktail }) {
  return (
    <div className="cocktail-card">
      <img src={cocktail.strDrinkThumb + '/preview'} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <Link to={`/cocktail/${cocktail.idDrink}`}>
  
  <button className="show-details-button">Show Details</button>
</Link>
    <Outlet />

    </div>
  );
}

export default CocktailCard;

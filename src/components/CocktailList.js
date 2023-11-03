// In CocktailList.js
import React, { useState, useEffect } from 'react';
import CocktailCard from './CocktailCard';
import SearchBar from './SearchBar';
import './CocktailList.css';
function CocktailList() {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch cocktails from the API based on the search term or fetch all cocktails initially
    const apiUrl = searchTerm
      ? `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) => console.error(error));
  }, [searchTerm]);

  return (
    <div>
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <div className="cocktail-list">
        {cocktails &&
          cocktails.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
      </div>
    </div>
  );
}

export default CocktailList;

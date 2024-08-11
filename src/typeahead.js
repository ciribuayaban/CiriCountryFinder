import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './typeahead.css';

const Typeahead = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/countries.json`) // fetch countries data from the JSON file
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error retrieving country information:', error));
  }, []);

  useEffect(() => {
    // check if query is empty
    if (query.length === 0) {
      setResults([]);
      return;
    }

    // filter countries based on the query
    const filteredResults = countries.filter(country =>
      country.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  }, [query, countries]); // rerun when query or country is changed

  // when result is clicked, it sets the query to the selected country
  const handleResultClick = (country) => {
    setQuery(country);
    setResults([]); // clear the results after selecting
  };

  return (
    <div className="search-container">
      <div className="search-input">
        <span className="search-icon">&#128269;</span>
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {results.length > 0 && (
        <ul className="results-list">
          {results.map((country, index) => (
            <li 
              key={index} 
              className="list-group-item"
              onClick={() => handleResultClick(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Typeahead;
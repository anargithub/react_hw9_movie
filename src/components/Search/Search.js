import React, { useState } from "react";
import "./Search.css";

export default function Search () {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = "7724321c8b2255220476991f595de584";

  const handleSearch = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error("Error searching for movies:", error);
      });
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search">
      <div className="search_input">
        <img src="https://moviemania-app.vercel.app/static/media/search-icon.82b9d96a.svg" alt="search-icon"/>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handlePress}
          placeholder="search movie"
        />
      </div>

      <div className="search_list">

        {searchResults.map((movie) => (
          <p key={movie.id}>
            {/* <h3>{movie.title}</h3> */}
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </p>
        ))}
      </div>
    </div>
  );
};



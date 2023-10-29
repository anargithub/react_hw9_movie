import { useEffect, useState } from "react";
import { getMovieList } from "../../lib/getMovieList";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const data = await getMovieList();
        setPopularMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchMovieList();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getMovieList } from "../../lib/getMovieList";
import "./MovieInfo.css"

export default function MovieInfo() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieList();
        setMovie(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div>
      <div className="movie_head">
        {movie.length > 0 && movie[0].backdrop_path && (
          <div className="movie_head_content">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie[0].backdrop_path}`}
              alt={movie[0].title}
            />
            <h1>{movie[0].title}</h1>
            <p>{movie[0].overview}</p>
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../../lib/getMovieDetails";
import "./MovieDetails.css";
import HomePage from "../../pages/HomePage";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setDetails(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="details">
      <div className="details_path">
        <p><Link to="/" style={{ color: 'white' }}>Home</Link> </p>
        <p> | </p>
        <p>{details.title}</p>
      </div>
      <div className="details_info">
        <div className="details_info_img">
          <img src={`https://image.tmdb.org/t/p/w200${details.poster_path}`} />
        </div>

        <div className="details_info_head">
          <h1>{details.title}</h1>
          <h3>PLOT</h3>
          <p>{details.overview}</p>
          <div className="details_info_add">
            <h3>RATING {details.vote_average}</h3>
            <h3>DIRECTOR {details.director}</h3>
          </div>
        </div>
      </div>

      <div className="details_numbers">
        <p>Running time: {details.runtime}</p>
        <p>Budget: {details.budget}</p>
        <p>Revenue: {details.revenue}</p>
      </div>
    </div>
  );
}

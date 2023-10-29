import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActorList } from "../../lib/getActorList";
import "./ActorList.css"

export default function ActorList() {
  const {movieId}  = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActorList = async () => {
      try {
        const data = await getActorList(movieId);
        setActors(data.cast);
        console.log(data.cast);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };

    fetchActorList();
  }, [movieId]);

  return (
    <div>
      
      <h2>Actors</h2>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <h4>{actor.name}</h4> <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

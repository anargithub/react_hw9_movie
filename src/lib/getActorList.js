const API_KEY = "7724321c8b2255220476991f595de584"
export const getActorList = async (movieId) => {
    const req = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    const data = await req.json();
    return data;
    
  };
  
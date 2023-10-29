import MovieInfo from "../components/MovieInfo/MovieInfo"
import MovieList from "../components/MovieList/MovieList"
import Search from "../components/Search/Search"

export default function HomePage() {
    return (
        <div>
            <MovieInfo/>
            <Search/>
            <MovieList/>
        </div>
    )
}
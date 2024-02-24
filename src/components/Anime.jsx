import { useFetch } from "../useFetch";
import { Link } from "react-router-dom";
import "./movies.css";
import "./global.css";
export function Anime() {
  const { data } = useFetch(
    "https://private-b5c8a7-moviesapp12.apiary-mock.com/movies/anime"
  );
  return (
    <article className="blockCards">
      <h2>Anime</h2>
      <ul className="listMovies">
        {data?.map((anime) => (
          <Link to={`movies/animes/${anime.id}`}>
            <li key={anime.id}>
              <img src={anime.img} alt="" className="movie_image_small" />
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
}

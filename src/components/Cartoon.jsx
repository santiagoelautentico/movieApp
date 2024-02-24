import { useFetch } from "../useFetch";
import { Link } from "react-router-dom";
import "./movies.css";
import "./global.css";
export function Cartoon() {
  const { data } = useFetch(
    "https://private-b5c8a7-moviesapp12.apiary-mock.com/movies/cartoon"
  );
  return (
    <article className="blockCards">
      <h2>CARTOON NETWORK MOVIES</h2>
      <ul className="listMovies">
        {data?.map((cartoon) => (
          <Link to={`movies/cartoon/${cartoon.id}`}>
            <li key={cartoon.id}>
              <img src={cartoon.img} alt="" className="movie_image_small" />
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
}

import { useFetch } from "../useFetch";
import "./movies.css";
export function Anime() {
  const { data } = useFetch(
    "https://private-b5c8a7-moviesapp12.apiary-mock.com/movies/anime"
  );
  return (
    <article className="blockCards">
      <h2>Anime</h2>
      <ul className="listMovies">
        {data?.map((anime) => (
          <li key={anime.id}>
            <img src={anime.img} alt="" className="cardPicture" />
          </li>
        ))}
      </ul>
    </article>
  );
}

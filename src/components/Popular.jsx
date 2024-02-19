import { useFetch } from "../useFetch";
import "./movies.css";
export function Popular() {
  const { data } = useFetch(
    "https://private-b5c8a7-moviesapp12.apiary-mock.com/movies/popular"
  );
  return (
    <article className="blockCards">
      <h2>Popular</h2>
      <ul className="listMovies">
        {data?.map((popular) => (
          <li key={popular.id}>
            <img src={popular.img} alt="" className="cardPicture" />
          </li>
        ))}
      </ul>
    </article>
  );
}

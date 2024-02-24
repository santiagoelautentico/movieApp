import { Link } from "react-router-dom";
import { useFetch } from "../useFetch";
import "./global.css";
import "./movies.css";
export function Clasics() {
  const { data } = useFetch(
    "https://private-b5c8a7-moviesapp12.apiary-mock.com/movies/clasics"
  );
  return (
    <article className="blockCards">
      <h2>THE CLASISCS</h2>
      <ul className="listMovies">
        {data?.map((clasic) => (
          <Link to={`movies/clasics/${clasic.id}`}>
            <li key={clasic.id} className="card">
              <img
                src={clasic.img}
                alt=""
                className="movie_image_small image"
              />
              <div>
                <div>
                  
                </div>
              </div>
              <p>Company - 2001</p>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
}

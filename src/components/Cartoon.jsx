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
            <li key={cartoon.id} className="card">
              <img src={cartoon.img} alt="" className="movie_image_small" />
              <div className="detailsMovie">
                <div className="topDetails-container">
                  <ul className="iconsRow">
                    <li>
                      <img
                        src="\images\playMoviehdpi.png"
                        alt="play buttom"
                        className="icon"
                      />
                    </li>
                    <li>
                      <img
                        src="\images\plusMovie.png"
                        alt="add to My list"
                        className="icon"
                      />
                    </li>
                    <li>
                      <img
                        src="public\images\loveMovie.png"
                        alt="give a like"
                        className="icon"
                      />
                    </li>
                  </ul>
                  <h3 className="match">98% Match</h3>
                </div>
                <p>Company - 2001</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
}

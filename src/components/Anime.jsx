import { useFetch } from "../useFetch";
import { Link } from "react-router-dom";
import "./movies.css";
import "./global.css";
export function Anime() {
  const { data } = useFetch(
    "https://private-b5c8a7-moviesapp12.apiary-mock.com/movies/anime"
  );
  return (
    <article className="container-cards container-anime">
      <h2>Anime</h2>
      <ul className="listMovies">
        {data?.map((anime) => (
          <Link to={`movies/animes/${anime.id}`}>
            <li key={anime.id} className="card">
              <img src={anime.img} alt="" className="movie_image_small image" />
              <div className="details-container">
                <div className="icons-container">
                  <img
                    src="\images\playMoviehdpi.png"
                    alt="play buttom"
                    className="icon"
                  />
                  <img
                    src="\images\plusMovie.png"
                    alt="add to My list"
                    className="icon"
                  />
                  <img
                    src="public\images\loveMovie.png"
                    alt="give a like"
                    className="icon"
                  />
                </div>
                <h3>98% Match</h3>
              </div>
              <p className="yearMovie">Company - 2001</p>
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
}

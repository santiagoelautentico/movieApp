import { Link } from "react-router-dom";
import { useFetch } from "../useFetch";
import "./movies.css";

export function Clasics() {
  const { data } = useFetch(
    "https://private-b5c8a7-moviesapp12.apiary-mock.com/movies/clasics"
  );

  return (
    <article className="container-cards container-clasic">
      <h2 className="title_category">THE CLASISCS</h2>
      <div className="listMovies snaps-inline">
        {data?.map((clasic) => (
          <Link to={`movies/clasics/${clasic.id}`}>
            <div key={clasic.id} className="card" id={clasic.id}>
              <img
                src={clasic.img}
                alt=""
                className="movie_image_small image"
              />
              <article className="menuItem">
                <div className="top-details">
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
              </article>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}

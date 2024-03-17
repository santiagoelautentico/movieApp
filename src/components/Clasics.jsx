import { Link } from "react-router-dom";
import { useFetch } from "../useFetch";
import "./global.css";
import "./movies.css";

export function Clasics() {
  const { data } = useFetch(
    "https://private-b5c8a7-moviesapp12.apiary-mock.com/movies/clasics"
  );
  return (
    <article className="container-cards container-clasic">
      <h2>THE CLASISCS</h2>
      <ul className="listMovies snaps-inline">
        {data?.map((clasic) => (
          <Link to={`movies/clasics/${clasic.id}`}>
            <li key={clasic.id} className="card">
              <img
                src={clasic.img}
                alt=""
                className="movie_image_small image"
              />
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
              {/* <div className="detailsMovie">
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
              </div> */}
            </li>
          </Link>
        ))}
      </ul>
    </article>
  );
}

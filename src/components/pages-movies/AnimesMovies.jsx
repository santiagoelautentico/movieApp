import { useFetch } from "../../useFetch";
import { useParams } from "react-router-dom";
import { Recomended } from "../Recomended";
import { Footer } from "../footer";
import "../watchMovie.css";
import "../global.css";
export function AnimesMovies() {
  const { id } = useParams();
  const { data } = useFetch(
    `https://private-b5c8a7-moviesapp12.apiary-mock.com/movies/animes/${id}`
  );
  console.log(data);
  //const clasic = useLoaderData();
  return (
    <>
      <div className="background">
        <section className="main_container">
          {data?.map((movie) => {
            return (
              <>
                <section>
                  <article className="art_container">
                    <div className="topBar_container">
                      <div className="topBar">
                        <div className="detailTop"></div>
                        <div className="detailBottom"></div>
                        <div className="detailLeft"></div>
                        <p className="watchNow">WATCH NOW</p>
                        <p className="close">X</p>
                      </div>
                    </div>
                    <div className="img_container">
                      <img
                        className="movie_image_larger image"
                        src={movie.img}
                        alt=""
                      />
                    </div>
                  </article>
                  <p className="plot">{movie.synopsis}</p>
                  <button className="play2">
                    <div className="topButtonColor"></div>
                    <div className="leftButtonColor"></div>
                    <img src="/images/play.png" className="logoPlay2" alt="" />
                    PLAY
                    <div className="bottomButtonColor"></div>
                    <div className="rigthButtonColor"></div>
                  </button>
                </section>
                <Recomended className="recomended"></Recomended>
              </>
            );
          })}
        </section>
      </div>
      <Footer />
    </>
  );
}

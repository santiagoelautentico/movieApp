import { Clasics } from "./Clasics";
import "./home.css";
export function Home() {
  return (
    <>
      <article className="headerContainer">
        <div className="infoMovieContainer">
          <img
            className="logoHeader"
            src="../public/images/Regular-show-the-movie-logo.png"
          />
          <p className="plotHeader">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel
            est reiciendis at omnis, autem voluptatum voluptas soluta iste neque
            perspiciatis, nemo eaque beatae esse ea quod illo eos explicabo.
          </p>
          <button className="play">
            <div className="topButtonColor"></div>
            <img src="../public/images/play.png" className="logoPlay" alt="" />
            PLAY
            <div className="bottomButtonColor"></div>
          </button>
        </div>
      </article>
      <Clasics />
    </>
  );
}

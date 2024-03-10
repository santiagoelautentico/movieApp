import "./header.css";
import bgRegular from "../assets/bgRegular.mp4";
import bgTitanes from "../assets/bgTitanes.mp4";
export function Header() {
  return (
    <section className="container">
      <div className="slider-wrapper">
        <div className="slider">
          <div id="slider-1">
            <video
              src={bgRegular}
              className="video"
              autoPlay
              loop
              muted
            ></video>
            <div className="infoHeader">
              <img
                src="/images/Regular-show-the-movie-logo.png"
                className="headerLogo"
                alt=""
              />
              <div className="bottonsHeader">
                <button className="play">
                  <div className="topButtonColor"></div>
                  <img src="/images/play.png" className="logoPlay" alt="" />
                  PLAY
                  <div className="bottomButtonColor"></div>
                </button>
                <button className="play">
                  <div className="topButtonColor"></div>
                  More info
                  <div className="bottomButtonColor"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              <p className="headerText">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit pariatur a corrupti sint deleniti. Corrupti
                similique itaque esse? Eos reiciendis molestias, voluptatem
                laudantium ea odio nihil. Natus sunt iure accusantium.
              </p>
              <div className="bottonsHeader">
                <button className="play">
                  <div className="topButtonColor"></div>
                  <img src="/images/play.png" className="logoPlay" alt="" />
                  PLAY
                  <div className="bottomButtonColor"></div>
                </button>
                <button className="play_more">
                  <div className="topButtonColor2"></div>
                  More info
                  <div className="bottomButtonColor2"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

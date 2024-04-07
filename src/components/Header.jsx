import "./header.css";
import bgRegular from "../assets/regularVideo.mp4";
import { useState } from "react";
export function Header() {
  const [muted, setMuted] = useState(true);

  const handleMuted = () => {
    setMuted(!muted);
  };

  return (
    <section className="container-header">
      <div className="slider">
        <video
          src={bgRegular}
          className="video"
          id="video"
          autoPlay
          loop
          muted={muted ? true : undefined}
        ></video>
        <div className="infoHeader">
          <img
            src="/images/Regular-show-the-movie-logo.png"
            className="headerLogo"
            alt=""
          />
          <p className="headerText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit pariatur a corrupti sint deleniti. Corrupti similique
            itaque esse? Eos reiciendis molestias
          </p>
        </div>
        <div className="bottonsHeader">
          <button className="play play-violet">
            <div className="topButtonColor"></div>
            <img src="/images/play.png" className="logoPlay" alt="" />
            PLAY
            <div className="bottomButtonColor"></div>
          </button>
          <button className="play play_more">
            <div className="topButtonColor2"></div>
            <div className="rigthButtonColor2"></div>
            More info
            <div className="bottomButtonColor2"></div>
            <div className="leftButtonColor2"></div>
          </button>
        </div>
        <button onClick={handleMuted} className="control">
          <img src="/images/sound.jpg" className="iconControl" alt="" />
        </button>
      </div>
    </section>
  );
}

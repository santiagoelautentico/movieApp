import "./recomended.css";
export const Recomended = () => {
  return (
    <>
      <article className="recomended_container">
        <h1 className="recomended_title">RECOMENDED MOVIES</h1>
        <ul>
          <li>
            <div className="movie_block">
              <img
                src="https://m.media-amazon.com/images/S/pv-target-images/73a880d42d9903682fb6ccab409c79d39dacf66ff060ddf3e60734fe65f32700.jpg"
                alt=""
                className="recomended_img"
              />
              <div>
                <h2 className="recomended_movieTitle">Teem Titanes</h2>
                <p className="recomended_movieSubtitle">
                  2006 - CARTOON NETWORK
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="movie_block">
              <img
                src="https://www.eres.com.mx/_next/image?url=https%3A%2F%2Fadmin.eres.com.mx%2Fwp-content%2Fuploads%2F2023%2F09%2Fcoraje.jpg&w=3840&q=75"
                alt=""
                className="recomended_img"
              />
              <div>
                <h2 className="recomended_movieTitle">
                  Coraje The Cowardly Dog
                </h2>
                <p className="recomended_movieSubtitle">
                  2002 - CARTOON NETWORK
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="movie_block">
              <img
                src="https://media.vanityfair.com/photos/5f5245d91e10df7a77868af6/master/pass/avatar-the-last-airbender.jpg"
                alt=""
                className="recomended_img"
              />
              <div>
                <h2 className="recomended_movieTitle">
                  avatar the last airbender
                </h2>
                <p className="recomended_movieSubtitle">2005 - Nikelodeon</p>
              </div>
            </div>
          </li>
          <li>
            <div className="movie_block">
              <img
                src="https://m.media-amazon.com/images/S/pv-target-images/d04174dabfbd4ef361b5f07d51fcebaa1e86850b28545d1f909dad39393de8dc.jpg"
                alt=""
                className="recomended_img"
              />
              <div>
                <h2 className="recomended_movieTitle">Kid Vs Kat</h2>
                <p className="recomended_movieSubtitle">2012 - Disney XD</p>
              </div>
            </div>
          </li>
        </ul>
      </article>
    </>
  );
};

// https://m.media-amazon.com/images/S/pv-target-images/d04174dabfbd4ef361b5f07d51fcebaa1e86850b28545d1f909dad39393de8dc.jpg

import "./albums.css";
export function Albums() {
  return (
    <article className="albums_container">
      <div className="backAlbum rick">
        <img className="logo_album" src="/images/rick_logo.png" alt="" />
        <img className="front-img" src="/images/rickTry.png" alt="" />
        <img src="/images/rickImage.jpg" alt="" className="bg-image" />
      </div>
      <div className="backAlbum adventure"></div>
      <div className="backAlbum spiderman"></div>
    </article>
  );
}

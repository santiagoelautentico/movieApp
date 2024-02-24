import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./navbar.css";
export function Navbar() {
  const [background, setBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [clicked, setCliecked] = useState(false);

  const buttonClicked = () => {
    setCliecked(!clicked);
  };
  return (
    <header className={background ? "headerApp backgroundHeader" : "headerApp"}>
      <div
        className={background ? "headerDetailShow top" : "headerDetailOff"}
      ></div>
      <div
        className={background ? "headerDetailShow bottom" : "headerDetailOff"}
      ></div>
      <img src="/images/play.png" alt="KineticaLogo" className="logoNav" />
      <div className="firstSecctionNav">
        <img src="" className="userLogo" />
        <nav>
          <ul>
            <li>
              <a href="http://localhost:5173/">Movies</a>
            </li>
            <li>
              <a href="">Series</a>
            </li>
            <li>
              <a href="">My list</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="rigthSecctionNav">
        <div className="inputContainer">
          <input type="text" placeholder="Search" />
          <div className="search">
            <AiOutlineSearch size={"1.8em"} />
          </div>
        </div>
        <div
          onClick={buttonClicked}
          className={`${
            clicked ? "backgroundHamburguerRed" : "backgroundHamburguerGray"
          }`}
        >
          <button
            onClick={buttonClicked}
            className={`${clicked ? "hamburguer is-active" : "hamburguer"}`}
          >
            <div className="bar"></div>
          </button>
        </div>
      </div>
    </header>
  );
}

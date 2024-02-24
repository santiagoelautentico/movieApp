import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { ClasicsMovies } from "./components/pages-movies/ClasicsMovies";
import { Navbar } from "./components/Navbar";
import { AnimesMovies } from "./components/pages-movies/AnimesMovies";
import { CartoonMovies } from "./components/pages-movies/CartoonMovies";
//import { LoginForm } from "./components/LoginForm";
//import { Home } from './components/Home'
//import { useState } from 'react'
function App() {
  //const [user, setUser] = useState([]);

  return (
    <>
      <Navbar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/clasics/:id" element={<ClasicsMovies />} />
            <Route path="/movies/animes/:id" element={<AnimesMovies />} />
            <Route path="/movies/cartoon/:id" element={<CartoonMovies />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>

    /*<div>
      {
        ! user.length > 0 ? <LoginForm setUser={setUser} /> : <Home></Home>
      }
    </div>*/
  );
}

export default App;

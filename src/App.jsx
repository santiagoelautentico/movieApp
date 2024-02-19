import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { WatchMovie } from "./components/WatchMovie";
import { Navbar } from "./components/Navbar";
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
            <Route path="/movies/clasics/:id" element={<WatchMovie />} />
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

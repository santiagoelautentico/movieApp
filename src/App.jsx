import './App.css'
import { LoginForm } from "./components/LoginForm";
import { Home } from './components/Home'
import { useState } from 'react'
function App() {

  const [user, setUser] = useState([])

  return (
    <div>
      {
        ! user.length > 0 ? <LoginForm setUser={setUser} /> : <Home></Home>
      }
    </div>
  );
}

export default App

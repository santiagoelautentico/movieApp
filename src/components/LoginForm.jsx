import "./loginForm.css"
import { useState } from "react"
export function LoginForm({setUser}){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email === "" || password === "") {
            setError(true)
            return
        }
        setError(false)

        setUser([email])
    }

    return(
        <section>

            
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password"  value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}
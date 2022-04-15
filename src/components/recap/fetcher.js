import { useState } from "react"

export default function Fetcher() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleLogin() {
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((response) => response.json())
            .then((resJson) => {
                if (resJson.token) {
                    setMessage("login successful");
                } else {
                    setMessage("login failed");
                }
            })
    }

    return (
        <div>
            <input
                placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                value={email}
            />

            <input
                placeholder="Password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                type="password"
                value={password}
            />

            <button
                onClick={() => {
                    handleLogin()
                }}
            >
                Login
            </button>

            {message}
        </div>
    )
}
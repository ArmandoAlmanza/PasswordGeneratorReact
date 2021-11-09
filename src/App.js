import React, { useState } from "react";
import "./App.css";
import generator from "generate-password";

function App() {
    const [password, setPassword] = useState("asdf");
    const [length, setLength] = useState(10);

    const generatePassword = () => {
        const pwd = generator.generate({
            length: length,
            lowercase: true,
            uppercase: true,
            numbers: true,
            symbols: true,
        });
        setPassword(pwd);
    };
    const something = (e) => {
      setLength(e.target.value);
    }
    return (
        <div className="App">
            <header className="App-header">
                <label>Length:</label>

                <input type="number" onChange={something} />
                <br />
                <h1>Your password is: {password}</h1>
                <button onClick={generatePassword}> Generate</button>
            </header>
        </div>
    );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import generator from "generate-password";
import Checkbox from "./components/Checkbox";

function App() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [upper, setUpper] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatePassword = () => {
        const pwd = generator.generate({
            length: length,
            lowercase: true,
            uppercase: upper,
            numbers: numbers,
            symbols: symbols,
        });
        setPassword(pwd);
    };

    return (
        <div className="App">
            <header className="App-header">
                <label>Length:</label>

                <input
                    type="number"
                    onChange={(e) => setLength(e.target.value)}
                />
                <br />
                <Checkbox
                    label={"UpperCase"}
                    value={upper}
                    onChange={() => setUpper(!upper)}
                />
                <Checkbox
                    label={"Numbers"}
                    value={numbers}
                    onChange={() => setNumbers(!numbers)}
                />
                <Checkbox
                    label={"Symbols"}
                    value={symbols}
                    onChange={() => setSymbols(!symbols)}
                />
                <br />
                <h1>Your password is: {password}</h1>
                <button onClick={generatePassword}> Generate</button>
            </header>
        </div>
    );
}

export default App;

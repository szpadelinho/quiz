import "./App.css";
import { useState } from "react"

const Start = ({ startQuiz }) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputValue = (event) => {
        setInputValue(event.target.value)
    }

    const handleStartQuiz = () => {
        startQuiz()
    }

    return(
        <div className="start">
            <h2>Podaj swoje imię, aby rozpocząć</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputValue}
            />
            <button onClick={handleStartQuiz}>Rozpocznij grę</button>
        </div>
    )
}

export default Start;
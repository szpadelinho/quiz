import React, { useState, useEffect } from "react";

const Board = ({ restartQuiz, playerName, isFirstCorrect, isSecondCorrect, isThirdCorrect, isFourthCorrect, isFifthCorrect }) => {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        let newPoints = 0;

        if (isFirstCorrect) newPoints += 1;
        if (isSecondCorrect) newPoints += 1;
        if (isThirdCorrect) newPoints += 1;
        if (isFourthCorrect) newPoints += 1;
        if (isFifthCorrect) newPoints += 1;

        setPoints(newPoints);
    }, [isFirstCorrect, isSecondCorrect, isThirdCorrect, isFourthCorrect, isFifthCorrect]);

    const handleRestartQuiz = () => {
        restartQuiz();
        setPoints(0);
    }

    return (
        <div className="board">
            <h2>Gratulacje, {playerName}</h2>
            <h1>Twój wynik to:</h1>
            <h2>{points}</h2>
            <h1>na 5 punktów.</h1>
            <button onClick={handleRestartQuiz}>Zagraj jeszcze raz</button>
        </div>
    )
}

export default Board;
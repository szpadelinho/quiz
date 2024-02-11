import "./App.css";

const QuestionOne = ({ numberTwo, firstCorrect, firstIncorrect }) => {
    const handleNextQuestion = () => {
        numberTwo()
    }

    const handleCorrectAnswer = () => {
        firstCorrect()
    }

    const handleIncorrectAnswer = () => {
        firstIncorrect()
    }

    return(
        <>
            <div className="question_number">
                <h1>Pytanie nr. 1</h1>
            </div>
            <div className="question_title">
                <h2>Kto wykonał oraz jak nazywa się ten album?</h2>
                <img src="https://media.pitchfork.com/photos/64c3bee4a7c2659c4cdcf382/1:1/w_3000,h_3000,c_limit/Travis%20Scott%20-%20Utopia.jpeg"/>
            </div>
            <div className="answers">
                <button onClick={handleCorrectAnswer}>Travis Scott - Utopia</button>
                <button onClick={handleIncorrectAnswer}>21 Savage - american dream</button>
                <button onClick={handleIncorrectAnswer}>KAYTRAMINÉ - KAYTRAMINÉ</button>
                <button onClick={handleIncorrectAnswer}>Drake - Views</button>
            </div>
            <div className="next">
                <button onClick={handleNextQuestion}>Następne pytanie</button>
            </div>
        </>
    )
}

export default QuestionOne;
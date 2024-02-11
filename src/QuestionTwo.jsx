import "./App.css";

const QuestionTwo = ({numberThree, secondCorrect, secondIncorrect}) => {
    const handleNextQuestion = () => {
        numberThree()
    }

    const handleCorrectAnswer = () => {
        secondCorrect()
    }

    const handleIncorrectAnswer = () => {
        secondIncorrect()
    }

    return(
        <>
            <div className="question_number">
                <h1>Pytanie nr. 2</h1>
            </div>
            <div className="question_title">
                <h2>Który mamy rok?</h2>
            </div>
            <div className="answers">
                <button onClick={handleIncorrectAnswer}>2023</button>
                <button onClick={handleCorrectAnswer}>2014</button>
                <button onClick={handleIncorrectAnswer}>1984</button>
                <button onClick={handleIncorrectAnswer}>2024</button>
            </div>
            <div className="next">
                <button onClick={handleNextQuestion}>Następne pytanie</button>
            </div>
        </>
    )
}

export default QuestionTwo;
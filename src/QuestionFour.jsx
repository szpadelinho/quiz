import "./App.css";

const QuestionFour = ({numberFive, fourthCorrect, fourthIncorrect}) => {
    const handleNextQuestion = () => {
        numberFive()
    }

    const handleCorrectAnswer = () => {
        fourthCorrect()
    }

    const handleIncorrectAnswer = () => {
        fourthIncorrect()
    }


    return(
        <>
            <div className="question_number">
                <h1>Pytanie nr. 4</h1>
            </div>
            <div className="question_title">
                <h2>Tak?</h2>
                <img src="https://i.kym-cdn.com/entries/icons/facebook/000/037/697/cover2.jpg"/>
            </div>
            <div className="answers">
                <button onClick={handleIncorrectAnswer}>Nie</button>
                <button onClick={handleIncorrectAnswer}>Może</button>
                <button onClick={handleCorrectAnswer}>Tak</button>
                <button onClick={handleIncorrectAnswer}>Nie wiem</button>
            </div>
            <div className="next">
                <button onClick={handleNextQuestion}>Następne pytanie</button>
            </div>
        </>
    )
}

export default QuestionFour;
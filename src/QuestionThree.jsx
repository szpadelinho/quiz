import "./App.css";

const QuestionThree = ({numberFour, thirdCorrect, thirdIncorrect}) => {
    const handleNextQuestion = () => {
        numberFour()
    }

    const handleCorrectAnswer = () => {
        thirdCorrect()
    }
    
    const handleIncorrectAnswer = () => {
        thirdIncorrect()
    }

    return(
        <>
            <div className="question_number">
                <h1>Pytanie nr. 3</h1>
            </div>
            <div className="question_title">
                <h2>Kto to jest?</h2>
                <img src="https://cdn.nba.com/headshots/nba/latest/1040x760/202331.png"/>
            </div>
            <div className="answers">
                <button onClick={handleIncorrectAnswer}>LeBron James</button>
                <button onClick={handleIncorrectAnswer}>Cristiano Ronaldo</button>
                <button onClick={handleCorrectAnswer}>Paul George</button>
                <button onClick={handleIncorrectAnswer}>Wojciech Kowalczyk</button>
            </div>
            <div className="next">
                <button onClick={handleNextQuestion}>Następne pytanie</button>
            </div>
        </>
    )
}

export default QuestionThree;
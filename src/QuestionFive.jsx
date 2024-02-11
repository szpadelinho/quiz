import "./App.css";
import kot from "./kot.png"

const QuestionFive = ({ endQuiz, fifthCorrect, fifthIncorrect }) => {
    const handleEndQuiz = () => {
        endQuiz()
    }

    const handleCorrectAnswer = () => {
        fifthCorrect()
    }

    const handleIncorrectAnswer = () => {
        fifthIncorrect()
    }

    return(
        <>
            <div className="question_number">
                <h1>Pytanie nr. 5</h1>
            </div>
            <div className="question_title">
                <h2>Kot</h2>
                <img src={kot}/>
            </div>
            <div className="answers">
                <button onClick={handleIncorrectAnswer}>Kot</button>
                <button onClick={handleIncorrectAnswer}>kOt</button>
                <button onClick={handleIncorrectAnswer}>koT</button>
                <button onClick={handleCorrectAnswer}>Super siedzi sobie pozdrawiam z całą rodzinką cieplutko</button>
            </div>
            <div className="next">
                <button id="end" onClick={handleEndQuiz}>Zakończ quiz</button>
            </div>
        </>
    )
}

export default QuestionFive;
import "./App.css";
import QuestionOne from "./QuestionOne.jsx"
import QuestionTwo from "./QuestionTwo.jsx"
import QuestionThree from "./QuestionThree.jsx"
import QuestionFour from "./QuestionFour.jsx"
import QuestionFive from "./QuestionFive.jsx"
import { useState } from "react"

const Content = ({ endQuiz, setFirstCorrect, setSecondCorrect, setThirdCorrect, setFourthCorrect, setFifthCorrect }) => {
    const [isQuestionOne, setQuestionOne] = useState(true)
    const [isQuestionTwo, setQuestionTwo] = useState(false)
    const [isQuestionThree, setQuestionThree] = useState(false)
    const [isQuestionFour, setQuestionFour] = useState(false)
    const [isQuestionFive, setQuestionFive] = useState(false)

    const [points, setPoints] = useState(0)

    const numberTwo = () => {
        setQuestionOne(false)
        setQuestionTwo(true)
    }

    const numberThree = () => {
        setQuestionTwo(false)
        setQuestionThree(true)
    }

    const numberFour = () => {
        setQuestionThree(false)
        setQuestionFour(true)
    }

    const numberFive = () => {
        setQuestionFour(false)
        setQuestionFive(true)
    }

    const firstCorrect = () => {
        setFirstCorrect(true)
    }

    const secondCorrect = () => {
        setSecondCorrect(true)
    }

    const thirdCorrect = () => {
        setThirdCorrect(true)
    }

    const fourthCorrect = () => {
        setFourthCorrect(true)
    }

    const fifthCorrect = () => {
        setFifthCorrect(true)
    }

    const firstIncorrect = () => {
        setFirstCorrect(false)
    }

    const secondIncorrect = () => {
        setSecondCorrect(false)
    }

    const thirdIncorrect = () => {
        setThirdCorrect(false)
    }

    const fourthIncorrect = () => {
        setFourthCorrect(false)
    }

    const fifthIncorrect = () => {
        setFifthCorrect(false)
    }

    return(
        <div className="content">
            {isQuestionOne && <QuestionOne numberTwo={numberTwo} firstCorrect={firstCorrect} firstIncorrect={firstIncorrect}/>}
            {isQuestionTwo && <QuestionTwo numberThree={numberThree} secondCorrect={secondCorrect} secondIncorrect={secondIncorrect}/>}
            {isQuestionThree && <QuestionThree numberFour={numberFour} thirdCorrect={thirdCorrect} thirdIncorrect={thirdIncorrect}/>}
            {isQuestionFour && <QuestionFour numberFive={numberFive} fourthCorrect={fourthCorrect} fourthIncorrect={fourthIncorrect}/>}
            {isQuestionFive && <QuestionFive endQuiz={endQuiz} fifthCorrect={fifthCorrect} fifthIncorrect={fifthIncorrect}/>}
        </div>
    );
}

export default Content
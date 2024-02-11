import "./App.css";
import Content from "./Content.jsx";
import Board from './Board.jsx';
import Start from './Start.jsx';
import { useState } from "react";

const Viewport = () => {
    const [visibleStart, setVisibleStart] = useState(true);
    const [visibleContent, setVisibleContent] = useState(false);
    const [visibleBoard, setVisibleBoard] = useState(false);
    const [playerName, setPlayerName] = useState("");

    const [isFirstCorrect, setFirstCorrect] = useState(false);
    const [isSecondCorrect, setSecondCorrect] = useState(false);
    const [isThirdCorrect, setThirdCorrect] = useState(false);
    const [isFourthCorrect, setFourthCorrect] = useState(false);
    const [isFifthCorrect, setFifthCorrect] = useState(false);

    const startQuiz = () => {
        setVisibleStart(false);
        setVisibleContent(true);
    };

    const endQuiz = () => {
        setVisibleContent(false);
        setVisibleBoard(true);
    };

    const restartQuiz = () => {
        setVisibleBoard(false);
        setVisibleStart(true);
        setFirstCorrect(false);
        setSecondCorrect(false);
        setThirdCorrect(false);
        setFourthCorrect(false);
        setFifthCorrect(false);
    };

    return (
        <section>
            <article>
                {visibleStart && <Start startQuiz={startQuiz} setPlayerName={setPlayerName} />}
                {visibleContent && (
                    <Content
                        endQuiz={endQuiz}
                        setFirstCorrect={setFirstCorrect}
                        setSecondCorrect={setSecondCorrect}
                        setThirdCorrect={setThirdCorrect}
                        setFourthCorrect={setFourthCorrect}
                        setFifthCorrect={setFifthCorrect}
                    />
                )}
                {visibleBoard && (
                    <Board
                        restartQuiz={restartQuiz}
                        playerName={playerName}
                        isFirstCorrect={isFirstCorrect}
                        isSecondCorrect={isSecondCorrect}
                        isThirdCorrect={isThirdCorrect}
                        isFourthCorrect={isFourthCorrect}
                        isFifthCorrect={isFifthCorrect}
                    />
                )}
            </article>
        </section>
    );
};

export default Viewport;
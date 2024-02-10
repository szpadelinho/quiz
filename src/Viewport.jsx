import "./App.css";
import Content from "./Content.jsx";
import Board from './Board.jsx';
import Start from './Start.jsx';
import { useState } from "react"

const Viewport = () => {
    const [visibleStart, setVisibleStart] = useState(true)
    const [visibleContent, setVisibleContent] = useState(false)
    const [visibleBoard, setVisibleBoard] = useState(false)

    const startQuiz = () =>{
        setVisibleStart(false)
        setVisibleContent(true)
    }

    const endQuiz = () => {
        setVisibleContent(false)
        setVisibleBoard(true)
    }

    return(
        <section>
            <article>
                {visibleStart && <Start startQuiz={startQuiz}/>}
                {visibleContent && <Content endQuiz={endQuiz}/>}
                {visibleBoard && <Board/>}
            </article>
        </section>
    )
}

export default Viewport
import "./App.css";

const Content = () => {
    return(
        <div className="content">
            <div className="question_number">
                <h1>Przykładowe pytanie nr. 1</h1>
            </div>
            <div className="question_title">
                <h2>Przykładowa treść pytania.</h2>
                <img src="https://media.pitchfork.com/photos/64c3bee4a7c2659c4cdcf382/1:1/w_3000,h_3000,c_limit/Travis%20Scott%20-%20Utopia.jpeg"/>
            </div>
            <div className="answers">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
            <div className="next">
                <button>Następne pytanie</button>
            </div>
        </div>
    )
}

export default Content
import React, { useState } from "react";
import QuizBank from "../quizData";

function QuizApp() {
const [questionNumber, changeQuestionNumber] = useState(0);
const buttonClick = () => {
    const nextQuestion = questionNumber + 1;
    changeQuestionNumber(nextQuestion);
}
    return(
        <div className="quizApp">
            
            <div className="questionTitle"><h2>{QuizBank[questionNumber].question}</h2></div>

            <div className="answerTitle">
                {QuizBank[questionNumber].answers.map((answers)=> <button onClick={buttonClick}>{answers.answer}</button>)}
                </div>
            </div>
    )
}

export default QuizApp;
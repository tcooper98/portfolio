import React, { useState } from "react";
import QuizBank from "../quizData";

function QuizApp() {
const [questionNumber, changeQuestionNumber] = useState(0);
//const [totalAnswer, setTotalAnswer] = useState(0);

//const totalAnswer = [];

const total = () =>{
    let sum = 0;
    QuizBank.forEach((item) =>{
        sum = sum + item.answers.answerValue;
        console.log(item);
    }
    );
    //sum = 0;
    /* for(let x in totalAnswer){
        sum += totalAnswer[x];
    } */
    return(
      sum
    );
}
const sum = total();
console.log(sum);

// QuizBank.forEach(number => {
//     total = total + number.value;
// });
// console.log(total);

const buttonClick = (e) => {
    const nextQuestion = questionNumber + 1;
    //console.log('inside click this', e.target.value );
    //parseInt(totalAnswer.push(e.target.value));
    const num = parseInt(e.target.value);
    //setTotalAnswer(totalAnswer + num);
    //console.log(totalAnswer);
    if(nextQuestion < QuizBank.length){
    changeQuestionNumber(nextQuestion);
    } else {
        alert ("you have finished the quiz")
        //console.log(totalAnswer);
    }
}
    return(
        <div className="quizApp">
            
            <div className="questionTitle"><h2>{QuizBank[questionNumber].question}</h2></div>

            <div className="answerTitle">
                {QuizBank[questionNumber].answers.map((answers)=> <button key={answers.answer} value={answers.answerValue} onClick={buttonClick} >{answers.answer}</button>)}
                </div>
            </div>
    )
}

export default QuizApp;